module.exports = {
  extends: [
    "eslint:recommended"
  ],
  env: {
    browser: true,
    jasmine: true,
    mocha: true,
    node: true,
    jest: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      objectLiteralDuplicateProperties: false
    }
  },
  plugins: [
    'import'
  ],
  /* eslint-disable */
  rules: {
    // use double quotes for copy friendly
    "max-len": [0],
    "no-shadow": [0],
    "func-names": [0],
    "no-console": [0],
    "brace-style": [0],
    "global-require": [0],
    "semi": [ 2, "always" ],
    "no-param-reassign": [0],
    "no-mixed-operators": [0],
    "prefer-destructuring": [0],
    "eol-last": [ 2, "always" ],
    "no-restricted-globals": [0],
    "no-unused-expressions": [0],
    "comma-dangle": [ 2, "never" ],
    "camelcase": [ 2, { "properties": "never" }],
    "object-curly-newline": [0],
    "space-in-parens": [ 2, "always", {
      "exceptions": [ "{}", "[]", "()", "empty" ]
    }],
    "object-shorthand": [ 2, "always", {
      "avoidQuotes": true,
      "avoidExplicitReturnArrows": true
    }],
    "object-curly-spacing": [ 2, "always", {
      "arraysInObjects": false,
      "objectsInObjects": false
    }],
    "array-bracket-spacing": [ 2, "always", {
      "arraysInArrays": false,
      "objectsInArrays": false,
      "singleValue": false
    }],
    "prefer-arrow-callback": [0],
    // "prefer-arrow-callback": [2],
    "arrow-parens": [0],
    "arrow-body-style": [0],
    "space-before-function-paren": [ 2, {
      "named": "never",
      "anonymous": "never",
      "asyncArrow": "ignore"
    }],
    "consistent-return": [0],
    // "consistent-return": [ 2, {
    //   "treatUndefinedAsUnspecified": true
    // }],
    "no-plusplus": [0],
    "no-unused-vars": [ 2, {
      "args": "all",
      "caughtErrors": "none",
      "argsIgnorePattern": "^_|_$"
    }],
    "no-underscore-dangle": [0],
    "padded-blocks": [0],
    "no-nested-ternary": [0],
    "no-bitwise": [0],
    "require-yield": [1],
    "class-methods-use-this": [0],

    // plugins
    "import/extensions": [0],
    "import/newline-after-import": [0],
    "import/prefer-default-export": [0],
    "import/no-extraneous-dependencies": [ "error", {
      "devDependencies": ["**/!(src)/*"]
    }]
  }
  /* eslint-disable */
};
