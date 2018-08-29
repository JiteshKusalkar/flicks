FROM node:latest
MAINTAINER hrishekesh
RUN npm install -g nodemon
WORKDIR /data/flicks/microservices/extras
COPY *.json ./
RUN npm install
COPY . .
EXPOSE 10022
CMD ["nodemon", "app.js"]
