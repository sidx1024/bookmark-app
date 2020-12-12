<script>
	import { obj2query } from './utils.js';

	let origin;
	let hash;
	let search;

	$: iframe_url = origin + '?' + search + '#' + hash;

	function handle_share_click() {
		const content = {
			share: 1,
			text: 'Some Random Text',
		};
		search = obj2query(content);
	}

	function handle_reset_click() {
		origin = location.origin;
		hash = 'standalone';
		search = '';
	}

	handle_reset_click();
</script>

<iframe src={iframe_url} title="Emulation Window" />

<div>
	<button on:click={handle_reset_click}>Reset</button>
	<button on:click={handle_share_click}>Share</button>
</div>

<style>
	iframe {
		border: 1px solid blue;
		margin: 2px;
		width: 320px;
		height: 568px;
	}
	button {
		min-width: 90px;
	}
</style>
