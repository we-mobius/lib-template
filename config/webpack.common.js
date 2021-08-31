
import { rootResolvePath } from '../scripts/utils.js'

export const getCommonConfig = () => ({
  output: {
    filename: '[name].js',
    publicPath: './'
  },
  module: {
    rules: []
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      ES: rootResolvePath('src/es/'),
      ES$: rootResolvePath('src/es/index.js'),
      CJS: rootResolvePath('src/cjs/'),
      CJS$: rootResolvePath('src/cjs/index.cjs'),
      TS: rootResolvePath('src/ts/'),
      TS$: rootResolvePath('src/es/index.ts'),
      Statics: rootResolvePath('src/statics/'),
      Images: rootResolvePath('src/statics/images/'),
      Styles: rootResolvePath('src/statics/styles/')
    },
    symlinks: false
  }
})
