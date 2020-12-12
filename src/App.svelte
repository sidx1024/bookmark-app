<script>
	import Emulator from './Emulator.svelte';

	export let is_pwa;
	export let share_mode;
	export let emulation_mode;
	export let dev_mode;
	export let query_params;
</script>

{#if emulation_mode}
	<Emulator />
{:else}
	<div>PWA: {is_pwa}</div>
	<div>Share Mode: {share_mode}</div>
	<div>
		Query Params:
		<pre>{JSON.stringify(query_params, null, 2)}</pre>
	</div>
	<div>Location Href: {location.href}</div>
	<div>Share Mode: {share_mode}</div>

	{#if dev_mode}
		{#if !share_mode}<a href="?emulate=1">Emulate PWA</a>{/if}
	{/if}
{/if}
