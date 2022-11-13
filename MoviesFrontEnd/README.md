# MoviesFrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Docker build

```bash
docker build -t skemuel007/moviesfrontend:dev .

docker run -d -p 4200:80 --name=moviesapp skemuel007/moviesfrontend:dev
```

## Docker compose

```bash
docker-compose -f docker-compose.yml up -d

docker-compose down

docker-compose down --rmi all
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
