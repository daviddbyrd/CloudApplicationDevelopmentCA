FROM ruby:3.3.1-slim

# Install dependencies
RUN apt-get update -qq && apt-get install -y \
    build-essential \
    libpq-dev \
    nodejs \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy gemfiles and install dependencies
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copy the rest of the application code
COPY . .

# Precompile assets (optional)
RUN bundle exec rails assets:precompile

# Expose the port the Rails server will run on
EXPOSE 3000

# Start the Rails server (ensure this command is correct)
CMD ["rails", "server", "-b", "0.0.0.0"]