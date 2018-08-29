FROM node:latest
MAINTAINER hrishekesh
RUN npm install -g nodemon
WORKDIR /data/flicks/microservices/socket
COPY *.json ./
RUN npm install
COPY . .
EXPOSE 10023
CMD ["nodemon", "app.js"]
