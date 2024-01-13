// Add Reanimated's babel plugin to your babel.config.js:
// **Reanimated plugin has to be listed last.**
// Ref. https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};
