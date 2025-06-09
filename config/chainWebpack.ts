
// ⭐ 核心：文件分类配置
const chainWebpack = (config: any) => {
  // 1️⃣ JS 文件 → /js 目录
  config.output
    .filename('js/[name].[hash:8].js')
    .chunkFilename('js/[name].[contenthash:8].chunk.js');

  // 2️⃣ CSS 文件 → /styles 目录
  config.plugin('extract-css').tap(() => [{
    filename: 'styles/[name].[contenthash:8].css',
    chunkFilename: 'styles/[name].[contenthash:8].chunk.css'
  }]);

  // 3️⃣ 图片资源 → /assets/images 目录
  config.module.rule('images')
    .test(/\.(png|jpe?g|gif|webp|ico)$/i)
    .use('url-loader')
    .loader('url-loader')
    .options({
      limit: 8192,
      name: 'assets/images/[name].[hash:8].[ext]' // 路径模板
    });

  // 4️⃣ 字体文件 → /assets/fonts 目录
  config.module.rule('fonts')
    .test(/\.(woff2?|eot|ttf|otf)$/i)
    .use('file-loader')
    .loader('file-loader')
    .options({
      name: 'assets/fonts/[name].[hash:8].[ext]'
    });

  // 5️⃣ 媒体文件 → /assets/media 目录
  config.module.rule('media')
    .test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i)
    .use('file-loader')
    .loader('file-loader')
    .options({
      name: 'assets/media/[name].[hash:8].[ext]'
    });
}


export default chainWebpack
