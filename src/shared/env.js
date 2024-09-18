const { version } = require('../../package.json');
export const ENVS = {
  dev: 'development', // 开发环境
  staging: 'staging', // staging环境
  uat: 'uat', // uat环境
  pp: 'preproduction', // 预生产环境
  pro: 'production', // 生产环境
};

/**
 * 根据document.body attribute version判断当前环境
 */
export const getCurEnv = () => {
  const domVersion = document.body.getAttribute('version'); // window.location.host;

  if (/staging_/.test(domVersion)) {
    return ENVS.staging;
  }
  if (/uat_/.test(domVersion)) {
    return ENVS.uat;
  }
  if (/release_/.test(domVersion)) {
    return ENVS.pp;
  }
  if (/master_/.test(domVersion)) {
    return ENVS.pro;
  }
  return ENVS.dev;
};

export const getHomeCharging = () => {
  const env = getCurEnv();
  const chargingObj = {
    development: 'https://develop.porsche-preview.cn',
    staging: 'https://smartmobility.porsche-preview.cn',
    preproduction: 'https://smartmobility.porsche-preview.cn:8443',
    production: 'https://smamo.porsche.cn',
  };
  return chargingObj[env] || chargingObj.development;
};

// 获取 备案号
export const getICPCode = () => {
  if (getCurEnv() === ENVS.pro) {
    return '沪ICP备10013326号-287';
  }
  return '沪ICP备10013326号-288';
};

// the configuration to toggle feature on/off
export const config = require(`./config-ver-${version}`);

export const enableMultipleLanguage = () =>
  [ENVS.dev, ENVS.staging, ENVS.uat].includes(getCurEnv());
