# ForeKast Backend

Provides a simple API for ForeKast to get facts about some cities.

Hit the `/.netlify/functions/server/facts/{city}` path to get a fact about a city, e.g.:
```http
GET /.netlify/functions/server/facts/Stockholm
```


## DEV Usage

You need to setup these env. variables:
```sh
export ALLOW_ORIGIN='http://localhost:3000' # origin of the ForeKast frontend
```

Run this command to get a running instance of the API:
```sh
npm start
```

Hot-reload is not enabled so you need to refresh the process each time you make a change.


To run tests:
```sh
npm run test
```

To just build the project (into ./build folder):
```sh
npm run build
```

To create a production build run:
```sh
npm run dist
```
