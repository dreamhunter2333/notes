FROM nginx:latest

RUN mkdir /app
COPY ./docs/.vuepress/dist /app/dist
COPY ./docker/conf.d /etc/nginx/conf.d

EXPOSE 80 443
