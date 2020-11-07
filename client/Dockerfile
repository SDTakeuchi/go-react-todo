FROM node:15.1.0-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
ENV NODE_ENV development
RUN npm install
