FROM node:8
WORKDIR /home/node/app
COPY ./ /home/node/app
RUN npm install
EXPOSE 8080
USER node
CMD ["npm", "start"]