const debug = process.env.NODE_ENV !== "production";

module.exports = {
  basePath: !debug ? "/hype" : "",
  assetPrefix: !debug ? "/hype" : "",
};
