module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  moduleDirectories: ['node_modules', 'packages'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', '<rootDir>/setupAfterEnv.ts'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};
