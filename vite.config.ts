import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import postcssNested from 'postcss-nested';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    postcss: {
      plugins: [postcssNested],
    },
  },
  plugins: [react()],
});
