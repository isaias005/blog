FROM node
WORKDIR /usr/src/app
copy package*.json ./
COPY . .
EXPOSE 4001
CMD ["npm", "install"]