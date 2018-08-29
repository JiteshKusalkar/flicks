FROM node:latest
MAINTAINER hrishekesh
RUN npm install -g nodemon
WORKDIR /data/flicks/microservices/csv-upload
COPY *.json ./
RUN npm install
COPY . .
EXPOSE 10021
CMD ["nodemon", "app.js"]
