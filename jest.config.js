module.exports = {
    preset: 'ts-jest',
    clearMocks: true,
    resetMocks: true,
    verbose: true,
    testEnvironment: 'node',
    testMatch: ['**/*.spec.ts'],
    testPathIgnorePatterns: ['/node_modules/'],
    collectCoverageFrom: ['app/**/*.ts', '!app/index.ts'],
    setupFiles: ['<rootDir>/.jest/setupEnv.ts'],
};
