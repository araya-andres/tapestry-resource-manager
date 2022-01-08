FROM node:17.3-alpine3.14
RUN npm install react-scripts@5.0.0 -g --silent
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --silent
COPY . .
CMD ["npm", "start"]