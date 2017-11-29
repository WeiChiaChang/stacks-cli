FROM node:alpine
LABEL maintainer="Jay MOULIN <jaymoulin@gmail.com> <https://twitter.com/MoulinJay>"
COPY . /root/
RUN cd /root/ && npm install
ENTRYPOINT ["/root/bin/cli.js"]
CMD []
