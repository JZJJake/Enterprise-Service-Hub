module.exports = {
  // preset: 'ts-jest', // Removed this
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest for .ts and .tsx files
  },
  testEnvironment: 'jsdom', // or 'node' if your utils don't interact with DOM
  collectCoverage: true,
  collectCoverageFrom: [
    'src/utils.ts', // Specify the file to collect coverage from
  ],
  coverageThreshold: {
    global: { // Optional: enforce coverage thresholds
      branches: 80, // Example threshold
      functions: 90,
      lines: 90,
      statements: 90,
    },
    './src/utils.ts': { // Specific threshold for utils.ts
      branches: 85,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleNameMapper: {
    // Handle CSS imports (if your utils import CSS, though unlikely for pure utils)
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Handle image imports (if your utils import images)
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
  },
  // CRA's setupTests.ts can be used if you have global mocks or setup
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  // Add testRegex or testMatch if needed, but Jest usually picks up .test.ts files by default
  // testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
};
