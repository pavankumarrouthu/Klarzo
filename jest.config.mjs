export default {
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  // OR
  // testRegex: '(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass|svg)$': 'identity-obj-proxy',
  },
};
