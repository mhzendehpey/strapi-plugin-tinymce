const pluginPkg = require("../../package.json");

const pluginId = pluginPkg.name.replace(/^(@kookaat\/strapi-)plugin-/i, "");

module.exports = pluginId;
