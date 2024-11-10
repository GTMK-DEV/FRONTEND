REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY

sudo npm install

pm2 start npm --name billeasy -- run start || pm2 reload billeasy
