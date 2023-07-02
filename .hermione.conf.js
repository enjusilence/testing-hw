module.exports = {
  sets: {
    desktop: {
      files: "test/hermione",
    },
  },

  browsers: {
    chrome: {
      automationProtocol: "devtools",
      desiredCapabilities: {
        browserName: "chrome",
      },
      screenshotDelay: 1000,
    },
  },
  plugins: {
    "html-reporter/hermione": {
      enabled: true,
    },
  },
};
