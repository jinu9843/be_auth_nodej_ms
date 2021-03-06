#!/usr/bin/bash 
sudo docker build . -f Dockerfile-Dev -t toyongyeon/be_auth_nodejs_ms_dev:0.1
sudo docker rm $(sudo docker stop $(sudo docker ps -a -q --filter="name=be-auth-nodejs-ms-dev" --format="{{.ID}}"))
sudo docker run --name be-auth-nodejs-ms-dev -e MONGO_HOST=$MONGO_HOST -d -p 3000:8888 toyongyeon/be_auth_nodejs_ms_dev:0.1
# sudo docker restart be-auth-nodejs-ms-dev
