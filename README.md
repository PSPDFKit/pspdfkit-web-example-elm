# PSPDFKit for Web Example – Elm

This example shows how to integrate [PSPDFKit for Web](https://pspdfkit.com/web/) into an [Elm](https://elm-lang.org/) app.

## Prerequisites

- [Node.js](http://nodejs.org/)
- A PSPDFKit for Web license. If you don't already have one
  you can [request a free trial here](https://pspdfkit.com/try/).

## Getting Started

Install the `pspdfkit` npm package using the NPM_KEY provided with your license. Following the link from the email you received, you should be able to retrieve it [here](https://pspdfkit.com/guides/web/current/standalone/adding-to-your-project).

```bash
npm install --save https://customers.pspdfkit.com/npm/YOUR_NPM_KEY_GOES_HERE/latest.tar.gz
```

This example does not use any other dependency unless you want to use the helper script `scripts/copy-pspdfkit-files.js`, which uses the `ncp` package to copy the PSPDFKit for Web files onto the example directory.

To install it (the dependency is already included in `package.json`):

```bash
npm install
```

Now that everything is installed we need to configure the app to use our [PSPDFKit for Web license key](https://pspdfkit.com/guides/web/current/standalone/integration).

Edit `./config/license-key` and replace the string `YOUR_LICENSE_KEY_GOES_HERE` with the license key that you'll find following [that link](<(https://pspdfkit.com/guides/web/current/standalone/integration)>).

## Running the Example

We are ready to launch the app! 🎉

```bash
npm run start
```

You can now open http://localhost:8080 in your browser and enjoy!

## License

This software is licensed under a [modified BSD license](LICENSE).

## Contributing

Please ensure
[you have signed our CLA](https://pspdfkit.com/guides/web/current/miscellaneous/contributing/) so that we can
accept your contributions.
