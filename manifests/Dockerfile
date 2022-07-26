FROM node:16-alpine
WORKDIR /ciscoapi
COPY package.json /ciscoapi
RUN npm install
COPY . /ciscoapi
CMD ["npm","start"]