<script>
	import { obj2query, query2obj } from './utils.js';

	let origin;
	let hash;
	let search;

	$: iframe_url = origin + '?' + search + '#' + hash;

	function update_search(updated_search) {
		search = obj2query(Object.assign(query2obj(search), updated_search));
	}

	function handle_share_click() {
		update_search({
			share: 1,
			text: 'Some Random Text',
		});
	}

	function handle_reset_click() {
		origin = location.origin;
		hash = '';
		search = '';
	}

	function handle_force_pwa_click() {
		update_search({ override_is_pwa: 1 });
	}

	handle_reset_click();
</script>

<iframe src={iframe_url} title="Emulation Window" />

<div>
	<button on:click={handle_reset_click}>Reset</button>
	<button on:click={handle_share_click}>Share</button>
	<button on:click={handle_force_pwa_click}>Force PWA</button>
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
