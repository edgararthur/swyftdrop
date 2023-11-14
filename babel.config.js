module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // pulgins: ['react-native-reanimated/plugin']
  };
};
