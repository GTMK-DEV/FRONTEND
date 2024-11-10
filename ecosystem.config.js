module.exports = {
  apps: [
    {
      name: "billeasy",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      exec_mode: "cluster",
      instances: 2,
      autorestart: true,
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
