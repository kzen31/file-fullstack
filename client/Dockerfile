FROM ubuntu:latest

FROM node:15.1.0-alpine3.12

WORKDIR /app
COPY package.json .

RUN apk add --no-cache --virtual build-dependencies \
    python2 \
    python3 \
    make \
    g++ \
    && apk add --no-cache git \
    && npm install --legacy-peer-deps \
    && apk del build-dependencies

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . .
EXPOSE 3000

CMD ["npm", "start"]