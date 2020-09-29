import { defineConfig } from 'dumi';

export default defineConfig({
  title: '数据资产目录系统组件库',
  //favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  //logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // navs:[
  //   {
  //     title:"组件",
  //     path:"/docs"
  //   }
  // ],
  // more config: https://d.umijs.org/config
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
});
