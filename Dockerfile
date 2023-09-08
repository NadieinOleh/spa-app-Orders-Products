FROM node:18.7

WORKDIR /spa-app-Orders-Products

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]