docker rm $(docker ps -a -q) --force
docker rmi $(docker images -q) --force
docker rmi $(docker images -f "dangling=true" -q)
docker-compose pull
docker-compose build
