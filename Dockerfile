FROM nginx:alpine

# Remove a pagina default do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia todos os sites (8 pastas) pra raiz do nginx
COPY . /usr/share/nginx/html/

# Expor porta 80 (Coolify/Traefik mapeia automaticamente)
EXPOSE 80

# Nginx em foreground (necessario pra Docker)
CMD ["nginx", "-g", "daemon off;"]
