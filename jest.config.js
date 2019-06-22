module.exports = {
  "verbose": true,
  "unmockedModulePathPatterns": [
    "<rootDir>/node_modules/react",
    "<rootDir>/node_modules/react-dom",
    "<rootDir>/node_modules/react-addons-test-utils",
    "<rootDir>/node_modules/fbjs"
  ],
  "moduleNameMapper": {
    '^config$': '<rootDir>/webpack.config.js',
    "\\.(css|jpg|png|svg|gif)$": "<rootDir>/__tests__/jest/__mocks__/emptyModule.js"
  },
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.jsx$": "babel-jest"
  },
  "moduleFileExtensions": [
    "js",
    "jsx",
    "json",
    "es6",
    "node"
  ],
  "setupFiles": ["./src/setupTests.js"],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "clearMocks": true,
};

module.exports = {
  "verbose": true,
  "unmockedModulePathPatterns": [
    "<rootDir>/node_modules/react",
    "<rootDir>/node_modules/react-dom",
    "<rootDir>/node_modules/react-addons-test-utils",
    "<rootDir>/node_modules/fbjs"
  ],
  "moduleNameMapper": {
    '^config$': '<rootDir>/webpack.config.js',
    "\\.(css|jpg|png|svg|gif)$": "<rootDir>/__tests__/jest/__mocks__/emptyModule.js"
  },
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.jsx$": "babel-jest"
  },
  "moduleFileExtensions": [
    "js",
    "jsx",
    "json",
    "es6",
    "node"
  ],
  "setupFiles": ["./src/setupTests.js"],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "clearMocks": true,
};

