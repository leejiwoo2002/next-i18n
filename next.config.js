/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['default','ko','en','ja'],
    defaultLocale: 'default',
  },
}

module.exports = nextConfig
