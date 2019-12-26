# addi-app-frontend-test

Application created to test knowledge like Fronted developer.

To build this project you need a environment with:

- [NodeJS](https://nodejs.org/)
- Yarn `npm i -g yarn`

To use the form you can use the test data found in this JSON file `data/db.json`.

## Project Develoment

- You need to setup de node_modules project with:

  ```sh
  $ yarn
  ```

- Run mockapi, for services http with json-server:

  ```sh
  $ yarn start-mockapi
  ```

- Run command on terminal:
  ```sh
  $ yarn start
  ```

## Project Run Test

Run command on terminal:

```sh
$ yarn test
```

Run EndtoEnd test, eject command on terminal:

```sh
$ yarn cypress
```

Run, Integration Test with name `form.spec.js`

## Project storybook

To view the storybook, run in terminal:

```sh
$ yarn storybook
```
