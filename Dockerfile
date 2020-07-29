FROM node:alpine3.12

LABEL Maintainer="Fabian Brash"

RUN mkdir /opt/node-pwsh

WORKDIR /opt/node-pwsh

COPY package*.json ./

COPY app.js .

RUN npm install

USER 1000

CMD ["npm", "start"]