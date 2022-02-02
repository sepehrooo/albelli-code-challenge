module.exports = {
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
}
