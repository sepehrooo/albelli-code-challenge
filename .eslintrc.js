module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'prettier/prettier',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    rules: {
        'no-use-before-define': 'off',
        'no-param-reassign': [
            'error',
            { props: true, ignorePropertyModificationsFor: ['state'] },
        ],
        'no-plusplus': 'off', // you can use i++
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
            },
        ],
        'max-len': ['warn', { code: 80, ignorePattern: '^import .*' }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        // won't throw error when you use prop spreading {...props}
        'react/jsx-props-no-spreading': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.test.ts',
                    '**/*.test.tsx',
                    'setUpTests.js',
                ],
            },
        ],
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
}
