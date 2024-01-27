# Rails Template

Oh whats that? A new app idea?

This is a template to help you get started on your new app right away.

With authentication provided out-of-the-box, you can spend less time fiddling with configurations and more time doing what you do best: building and creating!

So, what's under the hood?

- Rails 7, because we always like to stay on the cutting edge of things!
- Vite Ruby instead of Webpacker, because let's face it, life is too short to deal with slow build times.
- React (with TypeScript), because who doesn't love a little type safety in their life?
- InertiaJS, because we like to keep things snappy and responsive.
- Cuprite for driving headless Chrome, because we're fancy like that.
- Devise for authentication, because why reinvent the wheel?

### Development

- Fork the repo and install the gems w/ `bundle`
- Install the JS dependencies w/ `yarn`
- Create and seed the DB w/ `rails db:reset`
- Start the server w/ `rails s`
- Start Vite w/ `vite dev`
- View the app at `localhost:3000`

### Rubocop

Now, we know that nobody likes a messy codebase, which is why we've included Rubocop in this template. But don't worry, we're not here to judge - we know that sometimes you just gotta get things done!

- Run `bundle exec rubocop --auto-gen-config` to generate a todo list of existing exceptions
- Run `rubocop -a` to autocorrect offenses
- Run `rubocop -x` to fix layout issues
