FROM node:16-alpine
RUN mkdir /my_app
COPY package.json /my_app
WORKDIR /my_app
RUN npm install\
        && npm install typescript -g
COPY . .
RUN tsc
ENTRYPOINT  ["node", "./dist/index.js"]