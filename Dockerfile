FROM nginx:alpine

# Remove a pagina default do nginx
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf

# Copia todos os sites (8 pastas) pra raiz do nginx
COPY . /usr/share/nginx/html/

# Copia nginx.conf customizado (rewrite por Host header)
COPY nginx.conf /etc/nginx/nginx.conf

# Expor porta 80 (Coolify/Traefik mapeia automaticamente)
EXPOSE 80

# Nginx em foreground (necessario pra Docker)
CMD ["nginx", "-g", "daemon off;"]
ts 
1786187856
