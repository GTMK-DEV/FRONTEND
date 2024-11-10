REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY

# 기존 빌드 디렉토리 삭제
rm -rf .next

sudo npm run deploy

