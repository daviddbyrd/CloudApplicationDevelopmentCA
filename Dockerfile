# React frontend build
FROM node:18 AS react-build
WORKDIR /app
COPY client/react-client/package*.json ./
RUN npm install
COPY client/react-client/ ./
RUN npm run build

# HTML frontend build
FROM nginx:alpine AS html-build
COPY client/html-client /usr/share/nginx/html

# Rails backend
FROM ruby:3.3.1 AS rails-build
RUN apt-get update -qq && \
    apt-get install -y build-essential libpq-dev nodejs libsqlite3-dev
WORKDIR /app
COPY server/product_app/Gemfile ./
COPY server/product_app/Gemfile.lock ./
RUN bundle install
COPY server/product_app/ ./
RUN bundle exec rails assets:precompile

# Final image combining all components
FROM nginx:alpine
COPY --from=react-build /app /usr/share/nginx/html/react
COPY --from=html-build /usr/share/nginx/html /usr/share/nginx/html
COPY --from=rails-build /app /usr/share/nginx/rails
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80