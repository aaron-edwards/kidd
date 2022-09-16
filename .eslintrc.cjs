module.exports = {
    env: {
      "browser": true,
      "es2021": true
    },
    extends: [
      'airbnb',
      'airbnb-typescript',
    ],
    parserOptions: {
      project: './tsconfig.json'
    },
    "rules": {
      "react/react-in-jsx-scope": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/no-unknown-property": ['error', { ignore: ['css'] }]
    }
  }