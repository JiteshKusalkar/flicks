FROM node:latest
MAINTAINER hrishekesh
RUN npm install -g nodemon
WORKDIR /data/flicks/server
COPY *.json ./
RUN npm install
COPY . .
EXPOSE 3051
CMD ["nodemon", "app.js"]
