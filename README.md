# Rails Template

Oh whats that? A new app idea?

This is a template to help you get started on your new app v quickly.

With authentication provided out-of-the-box, you can focus on building and creating rather than configuring a new app.

The Stack:

- Rails 7
- Vite Ruby instead of Webpacker.
- React (typescript)
- InertiaJS
- Cuprite for driving headless-Chrome
- Devise for authentication

### Development

- Fork the repo and install the gems w/ `bundle`
- Create and seed the DB w/ `rails db:reset`
- Start the server w/ `rails s`
- Have fun!

### Rubocop

- Run `bundle exec rubocop --auto-gen-config` to generate a todo list of existing exceptions
- Run `rubocop -a` to autocorrect offenses
- Run `rubocop -x` to fix layout issues
