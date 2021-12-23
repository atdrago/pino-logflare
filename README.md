# pino-logflare

> **Note:** The goal of this fork is to be identical to the original `pino-logflare`, but with all the things that aren't necessary removed. Currently, it drastically reduces the bundle size from 44.3kB to 2.8kB (both numbers minified and gzipped).

This module provides transport for [pino][pino] that forwards messages to your [Logflare][logflare] account.

You can use `pino-logflare` both for node and browser apps. We also support isomorphic Vercel apps.

## Installation

To use globally from command line:

```bash
$ npm install -g pino-logflare
```

To include as a library in your project:

```bash
$ npm install pino-logflare
```

## CLI

Want to use `pino-logflare` from the CLI?
See the [CLI](./docs/CLI.md) documentation for details.

## API

Want to use `pino-logflare` as a library in your project?
See the [API](./docs/API.md) documentation for details.

## Vercel

Set up `pino-logflare` to use in your Vercel project.
See the [VERCEL](./docs/VERCEL.md) documentation for details.

## Known Issues

- Not compatible with `pino-pretty`.

## Credits

Thanks to [@zackkrida](https://github.com/zackkrida) for creating the initial version of pino-logflare.

Thanks to [@ovhemert](https://github.com/ovhemert) for creating the [pino-datadog](https://github.com/ovhemert/pino-datadog) project this transport is based on.

## Contributing

If you would like to help out with some code, check the [details](./docs/CONTRIBUTING.md).

## License

Licensed under [MIT](./LICENSE).

[pino]: https://www.npmjs.com/package/pino
[logflare]: https://logflare.app/
