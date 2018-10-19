module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'jasmine': true,
        'jquery': true,
    },
    'plugins': [
        'react',
    ],
    'parser': 'babel-eslint',
    'extends': ['eslint:recommended', 'plugin:react/recommended'],
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true,
            'experimentalObjectRestSpread': true,
        },
    },
    'rules': {
        'comma-dangle': ['error', 'always-multiline'],
        'default-case': 'off',
        'react/display-name': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/first': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/imports-first': 'off',
        'import/prefer-default-export': 'off',
        'prefer-promise-reject-errors': 'off',
        'class-methods-use-this': 'off',
        'no-plusplus': 'off',
        'indent': ['error', 4],
        'func-names': 'off',
        'global-require': 'off',
        'no-mixed-operators': 'off',
        'max-len': ['error', 120],
        'no-console': 'off',
        'no-param-reassign': ["error", { "props": false }],
        'no-underscore-dangle': ["error", { "allowAfterThis": true }],
        // This one is to avoid complaining avoid invoking functions defined at the bottom of the file
        // which is the preferred place to put private stuff as it's better to have the public API of a module
        // on top as it's usually what you need to check to know how to use it
        'no-use-before-define': ['error', 'nofunc'],
        'prefer-arrow-callback': 'off',
        'yoda': 'off',
        'no-void': 'off',
        'prefer-destructuring': 'off',
        'jsx-quotes': [2, 'prefer-single'],

    }
}
