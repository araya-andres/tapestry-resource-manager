FROM node:17.3-alpine3.14
RUN npm install react-scripts@5.0.0 -g --silent

COPY ["package.json", "package-lock.json", "./"]
RUN npm install --silent

WORKDIR /app
COPY . .

CMD ["npm", "start"]