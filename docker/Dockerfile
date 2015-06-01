FROM node:0.12.2
MAINTAINER Markus Ziller "markus.ziller@netlight.com"

#Add some files from the outside to the docker container
#ADD a_ssh_key /root/.ssh/id_rsa

#Set an ENV-Variable in the container
ENV NODE_ENV test

#Run bash commands in the container
RUN apt-get update -y && apt-get install -y git
RUN mkdir /root/.ssh && ssh-keyscan -H github.com >> /root/.ssh/known_hosts
RUN mkdir /opt/docker-demo && cd /opt/docker-demo && git init && git remote add psd-git git@github.com:markusz/docker-demo.git
RUN cd /opt/docker-demo && git fetch --all && git reset --hard psd-git/$branch && npm install
CMD "node bin/www.js"
