module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    [
      "babel-plugin-root-import",
      {
        "paths": [
          {
            "rootPathSuffix": "./src",
            "rootPathPrefix": "~/"
          },
        ]
      }
    ]
  ]
};
module.exports = (api) => {
  api.cache(true);

  return {
    plugins: ['babel-plugin-root-import'],
  };
};