// import { defineConfig } from "umi";
// import proxy from './proxy';

// import chainWebpack from "./chainWebpack";

//不使用defineConfig则能在其他地方获取这些配置
export default {
  mpa: {}, // 启用 MPA
  alias: { '@': 'src' }, // 路径别名
  plugins: [
    '@umijs/plugins/dist/dva'
  ],
  // proxy,
  dva: {},
  title: 'UMI4 Admin',
  favicons: [
    '/favicon.svg'
  ],
  // chainWebpack
};
