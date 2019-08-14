FROM node:8
ENV NODE_ENV production
WORKDIR /home/node/app
COPY ./ /home/node/app
RUN npm install
USER node
CMD ["npm", "start"]