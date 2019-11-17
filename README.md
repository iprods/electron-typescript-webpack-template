# Electron Typescript Webpack template

This project is a boilerplate for setting up Electron with Webpack and
Typescript support.

## Target

The target of the boilerplate is to have

[x] a running Electron app
[x] Typescript support built in
[x] Webpack on board
[ ] Tailwind configured
[x] hot module reloading
[ ] testing setup for unit tests
[ ] testing setup for e2e testing

## Prerequisites

* NodeJS 11.15.0

## Known issues

### FSEvents

With more recent NodeJS versions (13.1.0) unresolved issues with FSEvents (on
macOS) occur. This might be resolved with Webpack v5 which is not yet released.
The root cause is webpack > watchpack > chokidar > fsevents (1.2.9 ->
Unsupported).

## Sources

This project is based on the groundwork of

* https://blog.scottlogic.com/2017/06/06/typescript-electron-webpack.html
* https://github.com/kontrollanten/electron-webpack-quick-start
* https://github.com/electron-userland/electron-webpack-quick-start
