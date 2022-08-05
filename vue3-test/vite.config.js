import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// import styleImport ,{VantResolve} from "vite-plugin-style-import"
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    // styleImport({
    //   resolves:[VantResolve()],
    //   libs:[
    //     {
    //       libraryName:"vant",
    //       esModule:true.valueOf,
    //       resolveStyle:(name)=>{
    //         return `../es/${name}/style/index`
    //       }
    //     }
    Components({
      resolvers:[VantResolver()]
    })
      ],
  // Components({
  //   resolvers:[VantResolver()]
  // })
  define:{
    'process.env':{}
  }
})
