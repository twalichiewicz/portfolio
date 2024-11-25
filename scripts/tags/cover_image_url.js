const path = require('path');

hexo.extend.tag.register('cover_image_url', function(args) {
  const imageName = args[0];
  return hexo.extend.helper.get('url_for').call(this, 'images/' + imageName);
});

hexo.extend.filter.register('before_post_render', function(data) {
  if (data.cover_image) {
    data.cover_image = hexo.extend.helper.get('url_for').call(hexo, data.cover_image);
  }
  return data;
});