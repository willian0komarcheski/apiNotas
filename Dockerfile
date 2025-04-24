FROM node:18

WORKDIR /app

COPY ./src/ ./


COPY package*.json ./

RUN npm install

EXPOSE 4001
CMD ["node", "index.js"]

