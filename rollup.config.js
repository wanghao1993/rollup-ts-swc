// rollup.config.js
import typescript from '@rollup/plugin-typescript' // 解析ts的插件
import commonjs from '@rollup/plugin-commonjs' // 转换cjs为esm，因为rollup默认只支持esm
import resolvejs from '@rollup/plugin-node-resolve' // 让rollup找到外部模块
import teser from '@rollup/plugin-terser' // 压缩，格式化，优化
import pkg from './package.json' assert { type: 'json' }
import swc from '@rollup/plugin-swc' // 类似babel编译现代js代码，兼容低版本
import os from 'os'
// import { swc, defineRollupSwcOption } from 'rollup-plugin-swc3'
const env = process.env.NODE_ENV // 当前运行环境，可通过 cross-env 命令行设置
const { name } = pkg
const config = {
  input: 'src/main.ts',
  // 输出三种格式commonjs,esmodule,umd
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    },
    {
      // umd 导出文件的全局变量
      name,
      file: pkg.umd,
      format: 'umd'
    }
  ],
  plugins: [
    commonjs(),
    resolvejs(),
    typescript(),
    // babel({
    //   extensions: ['.js', '.ts']
    // })
    // 此处使用swc编译，比babel快的多，据说大型项目有bug，不过我这个小项目可以用
    swc({
      include: ['src/*.ts'],
      exclude: ['node_modules'],
      swc: {
        jsc: {
          parser: {
            syntax: 'typescript'
          },
          target: 'es3'
        }
      }
    })
  ]
}

// 如果是生产环境就增加压缩和混淆，使用多线程打包
if (env === 'production') {
  config.plugins.push(
    ...[
      teser({
        compress: true,
        maxWorkers: os.cpus().length,
        mangle: {
          toplevel: true
        }
      })
    ]
  )
}

console.log(JSON.stringify(config))
export default config
