import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
};

export default config;
