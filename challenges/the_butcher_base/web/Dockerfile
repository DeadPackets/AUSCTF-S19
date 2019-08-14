FROM node:8

# Install sqlite
USER root
RUN echo "nameserver 1.1.1.1 > /etc/resolv.conf"
WORKDIR /home/node/app
COPY ./web /home/node/app
RUN npm install
USER node
ENV SECRET_SERVICE_PASSWORD ilovebeef
EXPOSE 8000
CMD ["node", "index.js"]