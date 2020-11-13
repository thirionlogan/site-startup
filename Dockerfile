FROM node:latest

ENV PORT=8080
#TODO
ENV AUTH_ISSUER=1
ENV AUTH_AUDIENCE=1
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm i
# Bundle app source
COPY . .
EXPOSE 8080
RUN npm run webpack
ENTRYPOINT [ "npm", "start"]