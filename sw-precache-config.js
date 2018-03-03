module.exports = {
  root: 'public',
  staticFileGlobs: [
    'public/index.html',
    'public/manifest.json',
    'public/sources/**/**',
    'public/webfonts/**'
  ],
  stripPrefix: 'public/',
  runtimeCaching: [{
    urlPattern: '**',
    handler: 'cacheFirst'
  }]
};
