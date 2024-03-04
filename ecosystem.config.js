module.exports = {
  apps: [
    {
      script: 'npm run dev',
    },
  ],

  deploy: {
    production: {
      key: 'Hostinger',
      user: 'root',
      host: '89.117.37.12',
      ref: 'origin/main',
      repo: 'git@github.com:JaviPSanchez/next_boilerplate.git',
      path: '/root/ATALAYA',
      'pre-deploy-local': '',
      'post-deploy':
        'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      ssh_options: 'ForwardAgent=yes',
    },
  },
};
