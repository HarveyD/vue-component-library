# Vue Component Library

**For Vue 3**

This project skeleton was created to help people get started with creating their own Vue component library using:

- [Vue](https://vuejs.org/) (V3)
- [Rollup](https://github.com/rollup/rollup)
- [TypeScript](https://www.typescriptlang.org/)

It features:

- [Storybook](https://storybook.js.org/) to help you create and show off your components
- [Jest](https://jestjs.io/) enabling testing of your Vue components

[**Read my blog post about why and how I created this project skeleton ▸**](https://blog.harveydelaney.com/creating-your-own-vue-component-library/)

[Check out this CodeSandbox to see the component library in action ▸](https://codesandbox.io/s/silly-taussig-zm0ni?file=/src/App.vue)

## Development

### Testing

```
npm run test
```

### Building

```
npm run build
```

### Storybook

To run a live-reload Storybook server on your local machine:

```
npm run storybook
```

To export your Storybook as static files:

```
npm run storybook:export
```

## Publishing

### Hosting via NPM

First, make sure you have an NPM account and are [logged into NPM using the `npm login` command.](https://docs.npmjs.com/creating-a-new-npm-user-account)

Then update the `name` field in `package.json` to reflect your NPM package name in your private or public NPM registry. Then run:

```
npm publish
```

The `"prepublishOnly": "npm run build"` script in `package.json` will execute before publish occurs, ensuring the `build/` directory and the compiled component library exist.

## Usage

Let's say you created a public NPM package called `harvey-vue-component-library` with the `SampleComponent` component created in this repository.

First, install the component library:

```
npm i --save harvey-vue-component-library
```

Next, the component library's peerDependencies must be installed:

```
npm i --save vue@^3.0.0 vue-class-component@^8.0.0
```

Usage of the component will be:

```
<template>
  <SampleComponent
    headingText="Hello world!"
    bodyText="Made with love by Harvey"
  />
</template>

<script>
import { SampleComponent } from "harvey-vue-component-library";

export default {
  name: "App",
  components: {
    SampleComponent: SampleComponent,
  },
};
</script>
);

export default App;
```

[Check out this Code Sandbox for a live example.](https://codesandbox.io/s/silly-taussig-zm0ni?file=/src/App.vue)
