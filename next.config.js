
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['s23b6X5Peni2SSsycRvLP7'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  