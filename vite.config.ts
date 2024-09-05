import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// import postCssPxToRem from 'postcss-pxtorem';
import postcsspxtoviewport from "postcss-px-to-viewport"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins:[vue(), AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  })],
  resolve:{//路径别名
    alias:{
      '@': resolve(__dirname,'./src'),
    }
  },
  css:{
    postcss:{
      plugins:[
        postcsspxtoviewport({
          unitToConvert: "px", // 要转化的单位
          viewportWidth:1440, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ["ignore-"], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          landscape: false, // 是否处理横屏情况
        }),
        // postCssPxToRem({
        //   rootValue: 10, // 1rem的大小(设计稿宽度的1/10)
        //   propList: ['*'],
        //   exclude: "/node_modules" // 忽略包文件转换rem
        // })
      ]
    }
  }
})
