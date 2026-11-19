# Static site served by unprivileged nginx (non-root, listens on 8080).
FROM nginxinc/nginx-unprivileged:stable-alpine
COPY deploy/nginx/web.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
COPY assets /usr/share/nginx/html/assets
EXPOSE 8080
