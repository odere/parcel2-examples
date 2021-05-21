# Parcel 2 Examples

## Goal

Is to have  workable code-snippets as examples for knowledge sharing and as a playground to test Parcel 2 features.

## Project structure

This examples based on official Parcel 2 documentation [https://v2.parceljs.org](https://v2.parceljs.org/)
This is mono-repository constructed created with combination of Lerna [https://github.com/lerna/lerna](https://github.com/lerna/lerna) and Yarn [https://classic.yarnpkg.com/en/docs/workspaces/](https://classic.yarnpkg.com/en/docs/workspaces/)

Yarn + Lerna symbioz is very comfortable.

Lerna is providing easy going way to work with packages in mono-repository, also with `lerna-update-wizard` able to update dependencies without pain.

Yarn provide workspaces mechanism and managing dependencies.

## Scripts

- `build` - build all packages
- `dev` - start dev all packages
- `kill-port` - killing processes with defined ports, for graceful termination of processes that Lerna spawn
- `rimraf` - clean-up artifacts
- `start` - start all packages
- `inspect-bundle-health` - generate artifacts for [https://bundle-buddy.com/parcel](xhttps://bundle-buddy.com/parcel), this site will visualize report [https://v2.parceljs.org/features/production/](https://v2.parceljs.org/features/production/)
- `update-wizard` - launch lerna-update-wizard CLI to update dependencies

## Examples

1. [Generic Web App](./packages/generic-web-app/README.md)
1. [Generic Web App with Proxy](./packages/generic-web-app-with-proxy/README.md)
1. [Code Splitting](./packages/code-splitting/README.md)
