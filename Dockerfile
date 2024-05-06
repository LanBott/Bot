FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
