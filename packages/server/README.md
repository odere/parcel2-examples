# Parcel 2 Books Server

## Description

Contain the server with primitive RESTful API for [packages/generic-web-app-with-proxy](packages/generic-web-app-with-proxy/README.md).

Using Node Js `fs` module simply just to update JSON file.

## API

- `GET /` - return string 'Hello from Proxy'
- `GET /books` - return [all books](packages/server/data/books.json)
- `POST /books` - use book as payload to save new book.
- `DELETE /books` - delete book by id in parameters
- `PUT /books` - use id in parameters and book payload to update certain book
- `* /{any*}` - return string '404 Error! Page Not Found!'

Using `env-cmd` to use environment variables from .env file

## Scripts

- `dev` - start dev all packages
- `start` - start all packages
