FROM node:16
RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY package.json yarn.lock ./

RUN yarn install
