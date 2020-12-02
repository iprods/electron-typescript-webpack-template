# Electron Typescript Webpack template

This project is a boilerplate for setting up Electron with Webpack and
Typescript support.

## Target

The target of the boilerplate is to have

- [x] a running Electron app
- [x] Typescript support built in
- [x] Webpack on board
- [x] Tailwind configured
- [x] hot module reloading
- [ ] testing setup for unit tests
- [ ] testing setup for e2e testing

## Usage

In order to use this template you can simply clone it or use the template
functionality of GitHub.

Then run `npm install` and after all dependencies have been installed use `npm start`
to run the app in development mode.

## Prerequisites

- NodeJS

## Known issues

### Hot Module Reload

Though Webpack is setup with this template you will need to reload the app
manually to see the changes of the screens (renderer).

In order to reflect changes in the main process you have to either restart the
build process via `npm start` or type `rs` in the terminal you started the
build process.

## Sources

This project is based on the groundwork of

- https://blog.scottlogic.com/2017/06/06/typescript-electron-webpack.html
- https://github.com/kontrollanten/electron-webpack-quick-start
- https://github.com/electron-userland/electron-webpack-quick-start
- https://www.electronforge.io/templates/typescript-+-webpack-template

## License

MIT

See [License](LICENSE.md)
