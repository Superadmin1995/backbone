FROM node:16-alpine3.15

RUN apk add g++ make py3-pip

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]