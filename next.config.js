/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

const plugins = [];

const nextConfig = withPlugins(plugins, {});

module.exports = nextConfig;
