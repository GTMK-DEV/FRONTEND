REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY

sudo npm install

sudo pm2 start ecosystem.config.js || sudo pm2 reload ecosystem.config.js
