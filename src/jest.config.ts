
// jest.config.js
module.exports = {
    collectCoverage: true,
    // on node 14.x coverage provider v8 offers good speed and more or less good report
    coverageProvider: 'v8',
    collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
      '!<rootDir>/out/**',
      '!<rootDir>/.next/**',
      '!<rootDir>/*.config.js',
      '!<rootDir>/coverage/**',
    ],
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
      // Handle CSS imports (with CSS modules)
      // https://jestjs.io/docs/webpack#mocking-css-modules
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  
      // Handle CSS imports (without CSS modules)
      '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
  
      // Handle image imports
      // https://jestjs.io/docs/webpack#handling-static-assets
      '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,
  
      // Handle module aliases
      '^@/components/(.*)$': '<rootDir>/components/$1',
    },
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    testEnvironment: 'jsdom',
    transform: {
      // Use babel-jest to transpile tests with the next/babel preset
      // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sass|scss)$',
    ],
  }
  
// jest.config.js

const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)

import type {Config} from 'jest';
import {defaults} from 'jest-config';

const config: Config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
};

module.exports = {
  "testEnvironment": "jsdom"
}

export default config;