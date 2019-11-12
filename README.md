# Electron Typescript Webpack template

This project is a boilerplate for setting up Electron with Webpack and
Typescript support.

## Prerequisites

* NodeJS 11.15.0


## Known issues

### FSEvents

With more recent NodeJS versions (13.1.0) unresolved issues with FSEvents (on
macOS) occur. This might be resolved with Webpack v5 which is not yet released.
The root cause is webpack > watchpack > chokidar > fsevents (1.2.9 ->
Unsupported).
