FROM node:12.18.4-alpine

WORKDIR /

ADD . /

RUN npm install

COPY ./dist .

CMD npm start

EXPOSE 8080
