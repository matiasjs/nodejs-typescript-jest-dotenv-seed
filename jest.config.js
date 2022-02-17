module.exports = {
  globalSetup: './test/test-setup.js',
  modulePathIgnorePatterns: ['dist', 'node_modules'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ["jest-extended/all"],
  testTimeout: 50000,
};
