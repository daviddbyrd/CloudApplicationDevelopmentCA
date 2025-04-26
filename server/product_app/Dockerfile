FROM ruby:3.3.1  
RUN apt-get update -qq && \
    apt-get install -y build-essential libpq-dev nodejs libsqlite3-dev
WORKDIR /app
COPY server/product_app/Gemfile ./
COPY server/product_app/Gemfile.lock ./
RUN bundle install
COPY server/product_app/ ./
RUN bundle exec rails assets:precompile
EXPOSE 3000

