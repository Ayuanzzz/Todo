import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
// path.resolve('a') 返回的是当前绝对路径拼接现在的参数/Users/xxxx/a
import { resolve } from 'path'

export default ({ command }) => {
  let prodMock = true
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: './src/mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        //  这样可以控制关闭mock的时候不让mock打包到最终代码内
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
        injectFile: resolve("src/main.js")
      }),
    ],
    base: '/Todo/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      chunkSizeWarningLimit: 1500
    }
  }
}


