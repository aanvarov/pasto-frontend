const CracoLessPlugin = require("craco-less");
const { default: COLORS } = require("./src/constants/colors");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": COLORS.main,
              "@success-color": COLORS.success,
              "@error-color": COLORS.danger,
              "@text-color": COLORS.black,
              "@border-radius-base": "5px",
              "@border-color-base": COLORS.border,
              "@primary-color-outline": COLORS.main,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
