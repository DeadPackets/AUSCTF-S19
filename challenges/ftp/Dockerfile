FROM python:2.7
WORKDIR /usr/src/app
RUN pip install --no-cache-dir pyftpdlib
COPY . .
EXPOSE 20 21 30000-30009
CMD [ "python", "./ftp.py" ]
