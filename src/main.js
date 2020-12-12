/* eslint-disable no-prototype-builtins */
import './pollute.js';
import { query2obj } from './utils';
import App from './App.svelte';

const dev_mode = location.hostname === 'localhost';
const query_params = query2obj(location.search.slice(1));
const is_pwa =
	['fullscreen', 'standalone', 'minimal-ui'].some(
		(displayMode) => window.matchMedia('(display-mode: ' + displayMode + ')').matches
	) || query_params.override_is_pwa;
const share_mode = ['text', 'title', 'url'].some((key) => query_params.hasOwnProperty(key));
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
