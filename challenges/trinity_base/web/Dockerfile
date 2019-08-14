FROM node:8-jessie

USER root
RUN echo "nameserver 1.1.1.1 > /etc/resolv.conf"
RUN apt-get update
WORKDIR /home/node/app
COPY ./web /home/node/app

RUN npm install
RUN mkdir /home/trinity
COPY ./.bash_history /home/trinity/
USER node
EXPOSE 8080
CMD ["node", "index.js"]