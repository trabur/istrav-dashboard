FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build-storybook

EXPOSE 9999
CMD [ "npm", "start" ]
