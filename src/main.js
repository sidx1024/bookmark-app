import './pollute.js';
import { query2obj } from './utils';
import App from './App.svelte';

const dev_mode = location.hostname === 'localhost';
const is_pwa = location.hash === '#standalone';
const query_params = query2obj(location.search.slice(1));
const share_mode = query_params.share == 1;
const emulation_mode = dev_mode && query_params.emulate == 1;

var app = new App({
	target: document.body,
	props: {
		is_pwa,
		query_params,
		share_mode,
		emulation_mode,
		dev_mode,
	},
});

export default app;
