FROM ubuntu:latest
RUN apt-get -y update
RUN apt-get -y install git
RUN git config --global url."https://".insteadOf git://

FROM node:17-alpine

WORKDIR /app
COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]