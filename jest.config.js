const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/app/components/(.*)$": "<rootDir>/app/components/$1",
    "\\.(css|scss|sass)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(customJestConfig);
