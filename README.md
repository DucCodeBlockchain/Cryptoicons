# Cryptocons

![Cryptocons cover](.github/cover.png)

# What is Cryptocons?

Cryptocons is a collection of named icon modules and utility functions making it easier to manage cryptocurrency icons in your project.

Each icon is placed on a 24x24 grid and available as two types:

1. **Logo**: Plain logomark icons
2. **Badge**: Logomark icons contained in a shape that can be configured with different border radiuses from square to circle.

# Design Assets

Check out the [Figma library](https://www.figma.com/community/file/1100964857221715143/Cryptocurrency-Logos-and-Icons) for component assets.

---

# Quick start

For a detailed guide on Cryptocon component usage, [check out the website](https://www.cryptocons.io/documentation/usage). To get started quickly and/or learn by inspecting, read on and check out the [CodeSandbox example](https://codesandbox.io/s/cryptocons-example-okpxc2?file=/src/App.tsx).

## 1. Install the package in your project

```bash
yarn add cryptocons

or

npm install cryptocons
```

## 2. Import icons

```jsx
import { Binance, BinanceBadge } from 'cryptocons'
```

## 3. Render the icons

```jsx
<Binance />
<BinanceBadge />
```

---

# Develop locally

If you want to tinker or contribute to Cryptocons, you will need to build the repo locally.

The content within the `scripts` directory is what automatically transforms XML into React components from within the `svg` directory. Most of the functions within are refactored and tailored to the cryptocon build process from the [svg2jsx](https://github.com/balajmarius/svg2jsx) library.

## Build

### 1. Install the dependencies

```bash
yarn
```

### 2. Run the scripts

```bash
yarn build
```

This will use `ts-node` to run all the functions in the `scripts` directory. These scripts will optimize, transform, and reformat the content within the `svg` directory into React components in the `components` directory.

### 3. Run Storybook to view changes

```bash
yarn storybook
```

This will build the components within the `components` directory to `localhost:8000`. Any changes made to components will automatically rerender. Hack away.

## Debug

If you use VS Code to develop, the debug panel will have a pre-configured profile called "Debug Scripts". This will run the build command in debug mode and allow you to step through all the functions.

## Test

Icon tests are run with React Testing Library and Jest.

```bash
yarn test
```

This will run all available tests within the `tests` directory inside `src` and watch for changes.

## Contributing

If you would like to contribute, the repository is setup in a way to make it fairly easy, but there are a few important things to know.

The entire component library is built from how the content within the `svgs` repository is named and structured. This means naming conventions play a very important role and there area few important hooks when exporting svgs as Badges and Logos.

### Exporting SVGs

1. Icons must be on a 24x24 pixel artboard/canvas. The `viewBox` used in the `createIcon` helper specifies 24x24 and it's important to match it.
2. For Badge types, the first element in the exported svg must be a 24x24 `rect` element with a color. This is hooked into during the build process and creates the `badgeRadius` functionality. Follow the icon structure in [the example Figma](#) file.

### Naming conventions

1. Icons are named after the brand/business/coin name, not the cryptocurrency ticker symbol. For example, Bitcoin's ticker symbol is BTC and Ethereum's ticker symbol is ETH. The name of the icon would be `Ethereum`, `EthereumBadge`, `Bitcoin`, `BitcoinBadge`.
2. Icons have two types: Badge and Logo. Logos are the default icon and don't need typed. Badge types of an icon must have the word "Badge" as a suffix.
3. Icon names are PascalCase with no spaces. PascalCaseIsCapitalizedInsteadOfASpace.
4. Numbers in names are always typed out. For instance, it's `ZeroX` instead of `0x` (sorry 0x, blame JavaScript).

---

## More apps by me

I like making things. [Check out what I'm up to lately](https://rossmoody.com).
