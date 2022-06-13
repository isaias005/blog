FROM node:18
RUN mkdir -p /blog
WORKDIR /blog
COPY package.json /blog
RUN npm install
COPY . /blog/
EXPOSE 4200
CMD [ "npm" ]