// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    settings: {
      // eslint-config-expo registers only the node resolver, so every `@/*` import
      // reports import/no-unresolved. Flat config deep-merges settings, so this adds the
      // typescript resolver and keeps Expo's node one with its own extension list.
      'import/resolver': {
        typescript: { project: './tsconfig.json' },
      },
    },
  },
  {
    ignores: ['dist/*'],
  },
]);
