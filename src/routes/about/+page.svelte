<script>
	import { Button } from '$lib/components';
	let numberOfClicks = 0;
</script>

<h1>About this app</h1>
<p>This App was created to demonstrate sveltekit</p>
<a href="https://kit.svelte.dev">Learn SvelteKit</a>
<Button on:click={() => (numberOfClicks = numberOfClicks + 1)}>🤍</Button>
<p>{numberOfClicks}</p>

<style>
	a {
		display: inline-block;
		margin-top: var(--spacing-m);
		padding: var(--spacing-m);
		background-color: var(--color-primary);
		border-radius: var(--border-radius-m);
		border: var(--border-style) transparent;
		text-decoration: none;
		color: white;
		font-size: 1.2rem;
	}
</style>
