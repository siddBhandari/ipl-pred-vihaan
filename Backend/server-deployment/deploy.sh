#!/usr/bin/env bash

echo "stopping the already running containers"
cd /home/ubuntu/cricket-yug-backend/Backend/server-deployment
docker compose down

echo "Removing docker images and stopped containers Forcefully"
docker rm -f `docker ps -aq`
docker rmi -f `docker images -a -q`

echo "Syncing frontend changes from Github"
cd /home/ubuntu/cricket-yug-frontend
git pull

echo "Syncing backend changes from Github"
cd /home/ubuntu/cricket-yug-backend
git pull

echo "Now Deploying"
cd /home/ubuntu/cricket-yug-backend/Backend/server-deployment
docker compose up --build -d

echo "Deployment Complete.. Please Verify everything is up and running"


