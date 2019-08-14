FROM node:8

# Install sqlite
USER root
RUN echo "nameserver 1.1.1.1 > /etc/resolv.conf"
WORKDIR /home/node/app
COPY ./web /home/node/app
RUN npm install
USER node
EXPOSE 8080
CMD ["node", "index.js"]