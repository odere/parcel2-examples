# Parcel 2 Code Splitting

## Description

[https://v2.parceljs.org/features/code-splitting/](https://v2.parceljs.org/features/code-splitting/)

Contain app with lazy components and code that able to test tree-shaking.

The result production build exclude not used code from modules and create separate bundles for lazy components

## Tips

Using `env-cmd` to use environment variables from .env file

To generate `bundle-buddy.json` need to set BUNDLE_BUDDY=true environment variable

Unfortunately to [https://v2.parceljs.org/features/production/](https://v2.parceljs.org/features/production/) analyze bundle size with first example didn't managed.

## Scripts

- `build` - build all packages
- `dev` - start dev all packages
- `inspect-bundle-health` - generate artifacts for [https://bundle-buddy.com/parcel](xhttps://bundle-buddy.com/parcel), this site will visualize report [https://v2.parceljs.org/features/production/](https://v2.parceljs.org/features/production/)
- `start` - start all packages
