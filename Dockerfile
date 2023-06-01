FROM node:12

WORKDIR /reader

COPY package*.json ./

RUN npm install

COPY . . 

CMD ["node", "httpreader.js"]