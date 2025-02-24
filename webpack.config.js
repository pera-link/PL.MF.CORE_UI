const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "peralink",
    projectName: "core-ui",
    webpackConfigEnv,
    argv,
    outputSystemJS: false,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.scss$/, // Match SCSS files
          use: [
            "style-loader", // Inject styles into the DOM
            "css-loader", // Resolves CSS imports
            "sass-loader", // Compiles SCSS to CSS
          ],
        },
      ],
    },
    resolve: {
      extensions: [".scss"], // Add .scss as a resolve extension
    },
  });
};
