FROM node:latest
MAINTAINER hrishekesh
RUN npm install -g create-react-app
WORKDIR /data/flicks/client
COPY *.json ./
RUN npm install
COPY . .
EXPOSE 3052
CMD ["npm", "start"]