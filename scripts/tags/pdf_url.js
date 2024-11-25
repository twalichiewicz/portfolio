const path = require('path');

hexo.extend.tag.register('pdf_url', function(args) {
  const pdfPath = args[0];
  const url = path.join(hexo.config.root, pdfPath);
  return url;
});