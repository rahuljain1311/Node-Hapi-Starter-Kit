FROM node:8.9.4

RUN apt-get update -yqq 

RUN npm install -g yarn

WORKDIR /usr/src/app

COPY package.json .

RUN yarn install

COPY . . 

EXPOSE 5000

CMD npm run startMSQL
