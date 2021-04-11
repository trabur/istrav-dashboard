FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY scripts ./scripts
COPY templates ./templates
COPY bundle.js ./
COPY index.html ./
COPY index.js ./
COPY prism-theme.css ./
COPY require.js ./
COPY server.js ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 9999
CMD [ "npm", "start" ]
