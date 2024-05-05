const { CONFIG } = require("./site.config")

module.exports = {
  siteUrl: CONFIG.link + "/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  exclude: ["\\?tag=*", "/about", "\\?category=*", "/api*"],
  outDir: ".vercel/output/static",
}
