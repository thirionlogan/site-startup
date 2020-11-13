// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**'],
  clearMocks: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  preset: 'ts-jest',
  roots: ['<rootDir>/src', '<rootDir>/server'],
  setupFiles: ['raf/polyfill'],
  setupTestFrameworkScriptFile: '<rootDir>src/setupTests.ts',
  snapshotSerializers: ['enzyme-to-json'],
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  verbose: true,
};

export default config;
