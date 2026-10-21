// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    // Inline the small site stylesheet so it isn't a render-blocking request.
    inlineStylesheets: 'always',
  },
  devToolbar: {
    enabled: false,
  },
});