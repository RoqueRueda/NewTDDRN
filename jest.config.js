module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transforminIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|@react-native-community|@react-navigation)',
  ],
};
