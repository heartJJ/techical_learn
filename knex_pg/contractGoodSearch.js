const knex = require('./pg-connection');

const search = async () => {
  const [{ sum }] = await knex('contractgood').count('* as sum'),
    page = Math.round(sum / 50);
  
  for (let i = 0; i < page; i++) {
    const datas = await knex('contractgood').select('GUID', 'goods')
      .limit(50).offset(i * 50);
    console.log(datas);
  };
};

search();