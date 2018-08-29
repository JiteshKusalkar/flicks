FROM node:latest
MAINTAINER hrishekesh
RUN npm install -g swagger
WORKDIR /data/flicks/microservices/movie
COPY *.json ./
RUN npm install
COPY . .
EXPOSE 10020
CMD ["swagger", "project", "start", "movie"]
