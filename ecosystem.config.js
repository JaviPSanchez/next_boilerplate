module.exports = {
  apps: [
    {
      script: 'yarn dev',
    },
  ],

  deploy: {
    production: {
      key: 'Hostinger.pub',
      user: 'root',
      host: '89.117.37.12',
      ref: 'origin/main',
      repo: 'git@github.com:JaviPSanchez/next_boilerplate.git',
      path: '/root/ATALAYA',
      'pre-deploy-local': '',
      'post-deploy':
        'source ~/.nvm/nvm.sh && yarn install && yarn build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      ssh_options: 'ForwardAgent=yes',
    },
  },
};
