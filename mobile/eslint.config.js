// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const {
  jsExtensions,
  tsExtensions,
  platformSubextensions,
  computeExpoExtensions,
} = require('eslint-config-expo/utils/extensions');

const allExtensions = computeExpoExtensions(
  [...jsExtensions, ...tsExtensions],
  platformSubextensions,
);

module.exports = defineConfig([
  expoConfig,
  {
    settings: {
      // eslint-config-expo registers only the node resolver, so every `@/*` import
      // reports import/no-unresolved. Flat config replaces settings keys instead of
      // merging, so node has to be restated alongside typescript.
      'import/resolver': {
        typescript: { project: './tsconfig.json' },
        node: { extensions: allExtensions },
      },
    },
  },
  {
    ignores: ['dist/*'],
  },
]);
