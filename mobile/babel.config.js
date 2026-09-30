// babel-preset-expo already injects react-native-worklets/plugin for Reanimated 4.
// Adding it here duplicates it. If you ever do add it, it must come last.
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
  };
};
