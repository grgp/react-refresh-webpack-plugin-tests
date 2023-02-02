module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
  proseWrap: 'always',
  overrides: [
    {
      files: '*.scsss',
      options: {
        parser: 'scss',
      },
    },
    {
      files: '*.csss',
      options: {
        parser: 'css',
      },
    },
  ],
};
