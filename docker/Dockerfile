FROM nginx:alpine

RUN mkdir /app
COPY ./docs/.vitepress/dist /app/dist
COPY ./docker/conf.d /etc/nginx/conf.d

EXPOSE 80 443
