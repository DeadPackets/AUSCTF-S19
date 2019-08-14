FROM sickp/alpine-sshd:7.5

# Setup SSH
USER root
RUN echo "nameserver 1.1.1.1" > /etc/resolv.conf
RUN apk update
RUN apk add g++ bash
COPY ./ssh /etc/ssh
COPY ./profile /etc/profile
COPY ./motd /etc/motd
RUN echo -ne "root:SUPERSECUREPASSWORD" | chpasswd

# Setup the vladimir user
RUN adduser -D -s /bin/bash vladimir
RUN chown -R vladimir:vladimir /home/vladimir
RUN chmod 0550 -R /home/vladimir
RUN echo -ne "vladimir:russia123" | chpasswd

# Compile the program
COPY ./giveFlag.cpp /home/vladimir/
RUN g++ -s -O3 /home/vladimir/giveFlag.cpp -o /home/vladimir/giveFlag
RUN chown vladimir:vladimir /home/vladimir/giveFlag
RUN chmod 4755 /home/vladimir/giveFlag
RUN rm /home/vladimir/giveFlag.cpp