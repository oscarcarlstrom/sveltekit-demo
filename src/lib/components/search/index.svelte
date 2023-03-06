<script lang="ts">
	import Input from '../input.svelte';
	import Results from './results.svelte';
	let searchString = '';
	let timer: ReturnType<typeof setTimeout> | undefined;

	const inputHandler = (event: Event) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			searchString = (event.target as HTMLInputElement).value;
		}, 200);
	};
</script>

<Input on:input={inputHandler} placeholderText="Search for artists..." />
<hr />
<Results {searchString} />

<style>
	hr {
		border: none;
		background-color: var(--color-primary);
		height: 2px;
		border-radius: var(--border-radius-s);
		opacity: 0.5;
		margin-bottom: 20px;
	}
</style>
