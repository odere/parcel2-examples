# Parcel 2 Generic Web App With Proxy

## Description

[https://v2.parceljs.org/features/api-proxy/](https://v2.parceljs.org/features/api-proxy/)

Contain the example with component that send HTTP request to another package in mono-repository.

To better emulate the actual production environment when developing web apps, you can specify paths that should be proxied to another server (e.g. your real API server or a local testing server) in a `.proxyrc` file.

To test this functionality simple [Node JS server](packages/server/README.md) was created.

To test it just run `yarn start` in server an client packages. In client you will see list of fetched books. Also by following `/api`, `/api/books` you will get response from server.

## Tips

`.proxyrc` Should be in the root folder in the project.

Proxy configuration is applying to all client packages in mono-repo.

## Scripts

- `build` - build all packages
- `dev` - start dev all packages
- `start` - start all packages
