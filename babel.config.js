module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '^~(.+)': './src/\\1',
        },
      },
    ],
  ],
  assumptions: {
    setPublicClassFields: false,
    privateFieldsAsSymbols: true,
  },
};
