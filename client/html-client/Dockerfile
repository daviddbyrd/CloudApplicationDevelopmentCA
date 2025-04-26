# HTML frontend build
FROM nginx:alpine AS html-build
COPY client/html-client /usr/share/nginx/html

# Final image combining all components
FROM nginx:alpine
COPY --from=html-build /usr/share/nginx/html /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80