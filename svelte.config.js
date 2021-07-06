import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
/**
 * This will add autocompletion if you're working with SvelteKit
 *
 * @type {import('@sveltejs/kit').Config}
 */
export default {
	kit: {
		adapter: adapter(), // currently the adapter does not take any options
		target: '#svelte'
	},
	preprocess: preprocess({
		// ...svelte-preprocess options
	})
};
