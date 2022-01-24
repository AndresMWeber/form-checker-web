/** @type {import('next').NextConfig} */
const path = require('path');

module.exports =
{
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      "https://form-checker-videos.s3.amazonaws.com",
      "s3.amazonaws.com",
    ],
  },
}
