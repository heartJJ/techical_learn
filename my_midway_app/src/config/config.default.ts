import { EggAppConfig, EggAppInfo, PowerPartial } from 'midway';

export type DefaultConfig = PowerPartial<EggAppConfig>

export default (appInfo: EggAppInfo) => {
  const config = <DefaultConfig> {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1587695098642_2692';

  // add your config here
  config.middleware = [
  ];

  return config;
};
