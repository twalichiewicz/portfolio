const path = require('path');

hexo.extend.tag.register('cover_image_url', function(args) {
  const imageName = args[0];
  return hexo.extend.helper.get('url_for').call(this, 'images/' + imageName);
});