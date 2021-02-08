const { asyncWrapper, start } = require('@midwayjs/serverless-fc-starter');
const SimpleLock  = require('@midwayjs/simple-lock').default;
const lock = new SimpleLock();
const layers = [];

try {
  const layer_npm_eggLayer = require('@midwayjs/egg-layer');
  layers.push(layer_npm_eggLayer);
} catch(e) { }


let runtime;
let inited = false;

const initializeMethod = async (initializeContext = {}) => {
  return lock.sureOnce(async () => {
    runtime = await start({
      layers: layers,
      isAppMode: true,
      initContext: initializeContext,
    });
  }, 'APP_START_LOCK_KEY');
};

exports.initializer = asyncWrapper(async (...args) => {
  if (!inited) {
    inited = true;
    await initializeMethod();
  }
});


  exports.handler = asyncWrapper(async (...args) => {
    if (!inited) {
      await initializeMethod();
    }

    return runtime.asyncEvent()(...args);
  });

