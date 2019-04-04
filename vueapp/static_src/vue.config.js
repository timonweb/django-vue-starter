module.exports = {
  publicPath:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : "/static/vueapp/dist/",
  outputDir: "../../static/vueapp/dist"
};
