import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['**/__tests__/*test.(ts|tsx|js|jsx)'],
  preset: 'ts-jest/presets/js-with-babel-esm',
};

export default config;
