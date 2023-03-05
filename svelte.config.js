import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-cloudflare';
/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
		adapter: adapter(),
		vite: {
			optimizeDeps:{
        			exclude: ['setKV.js']
      			},
		}
	},

    preprocess: [preprocess({
        postcss: true
    })]
};
export default config;
