const debug = process.env.NODE_ENV !== "production";

module.exports = {
  // basePath: '/crisp',
  basePath: !debug ? "/hype" : "",
};
