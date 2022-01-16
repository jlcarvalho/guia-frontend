const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "/guia-frontend" : "";

module.exports = {
  basePath: prefix,
  assetPrefix: prefix,
};
