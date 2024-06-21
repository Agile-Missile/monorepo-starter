/**
 * 使用production模式 pm2 start pm2.config.js --env production
 */
module.exports = {
  apps: [
    {
      name: 'flatjs-docs',
      script: 'npm run start',
      watch: false,
      env: {},
    },
  ],
};
