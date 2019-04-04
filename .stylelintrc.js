module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-processor-styled-components',
  ],
  rules: {
    'no-empty-source': null,
  },
};
