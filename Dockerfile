FROM node:18
RUN mkdir -p /blog
WORKDIR /blog
COPY package.json /blog
RUN npm install
RUN npm run build
COPY . /blog
EXPOSE 4200
CMD [ "npm" ]