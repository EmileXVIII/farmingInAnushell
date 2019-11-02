FROM node:12-alpine
RUN apk add --update npm
WORKDIR /farmingInANutshell
ADD ./package.json ./package.json
ADD ./src ./src
ADD ./public ./public
RUN npm install
CMD ["npm","start"]