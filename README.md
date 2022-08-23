<img src="https://swetrix.com/assets/logo_blue.svg" alt="Swetrix Analytics" height="100" />

# Swetrix Vue 3 integration

[![npm version](https://img.shields.io/npm/v/swetrix-vue.svg)](https://www.npmjs.com/package/swetrix-vue)
[![Build Status](https://github.com/ansidev/swetrix-vue/workflows/publish_npm_package/badge.svg)](https://github.com/ansidev/swetrix-vue/actions/workflows/publish.yml)
[![Sourcegraph](https://sourcegraph.com/github.com/ansidev/swetrix-vue/-/badge.svg)](https://sourcegraph.com/github.com/ansidev/swetrix-vue?badge)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d9cca26d-22e6-445e-b460-7f3b8c9984cd/deploy-status)](https://app.netlify.com/sites/swetrix-vue/deploys)

Unofficial [Swetrix Analytics](https://go2.vn/roke5) integration for Next.js.

## Integration

### Install

Run the following command to install in your project:

```
npm install swetrix-vue
```

Or with yarn:

```
yarn add swetrix-vue
```

Or with pnpm:

```
pnpm add swetrix-vue
```

### Basic usage

You can now import, and use the Swetrix hook on your project:

```typescript
// ./src/main.ts

import { createApp } from 'vue'
import Swetrix from 'swetrix-vue'

const app = createApp({})

app.use(Swetrix, {
  pid: 'SWETRIX_PROJECT_ID',
  // optional options
  initOptions: {
    // options
  },
  pageViewsOptions: {
    // options
  },
})
```

### Debug-mode

When developing in localhost, Swetrix does not send events to avoid using your quota. \
You can enable debug mode to send events when testing things locally. It will also log messages to console.

```typescript
// ./src/main.ts

import { createApp } from 'vue'
import Swetrix from 'swetrix-vue'

const app = createApp({})

app.use(Swetrix, {
  pid: 'SWETRIX_PROJECT_ID',
  initOptions: {
    debug: true,
    // other options
  },
})
```

### Advanced options
`useSwetrix` hook accepts 3 parameters: `PID`, `initOptions`, `pageViewsOptions`. \
See the [official documentation](https://swetrix.com/docs) page for more details. \
You can always [create an issue](https://github.com/ansidev/swetrix-vue/issues/new) in case of any questions! 😀

## Contribution

Feel free to contribute to the source code by opening a pull requests.

For any questions, you can [open an issue](https://github.com/ansidev/swetrix-vue/issues/new), refer to the official [Swetrix FAQs](https://swetrix.com/#faq) page or reach them at contact@swetrix.com.

## Self-hosted API
If you are selfhosting the [Swetrix-API](https://github.com/Swetrix/swetrix-api), be sure to point the `apiUrl` parameter to: `https://yourapiinstance.com/log`

## Donate

You can support this project by donating me at:
- [Paypal](https://paypal.me/ansidev)
- [Ko-fi](https://ko-fi.com/ansidev)
- [Buy me a coffee](https://buymeacoffee.com/ansidev)
