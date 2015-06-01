FROM node:0.12.2
MAINTAINER Markus Ziller "markus.ziller@netlight.com"
#Install dependencies
RUN apt-get update -y && apt-get install -y git
RUN ssh-keyscan -H github.com >> /root/.ssh/known_hosts
ADD some-file.json /root/.ssh/id_rsa
ENV NODE_ENV test
RUN mkdir /opt/docker-demo && cd /opt/docker-demo && git init && git remote add psd-git git@github.com:p7s1digital/docker-demo.git
RUN cd /opt/docker-demo && git fetch --all && git reset --hard psd-git/$branch
RUN cd /opt/docker-demo && npm install && npm run build-admin-ui
CMD "/usr/bin/supervisord"
