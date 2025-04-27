FROM ruby:3.3.1  
RUN apt-get update -qq && \
    apt-get install -y build-essential libpq-dev nodejs libsqlite3-dev
WORKDIR /app
COPY Gemfile ./
COPY Gemfile.lock ./
RUN bundle install
COPY . ./
RUN bundle exec rails assets:precompile
EXPOSE 3000
CMD bundle exec rake db:migrate && rails server -b '0.0.0.0'