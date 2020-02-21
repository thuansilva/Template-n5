module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console',
        'babel-plugin-root-import',
        {
          rootPathPrefix: '-/',
          rootPathSuffix: 'src',
        },
      ],
    },
  },
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '-/',
        rootPathSuffix: 'src',
      },
    ],
  ],

};