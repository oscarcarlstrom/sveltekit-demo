<script lang="ts" context="module">
	export interface NavItem {
		href: string;
		text: string;
	}
</script>

<script lang="ts">
	import Nav from './nav.svelte';
	export let navItems: NavItem[] = [];
</script>

<header>
	<h1>
		<slot />
	</h1>
	<Nav links={navItems} />
</header>

<style>
	header {
		padding: var(--spacing-l);
		background-color: var(--color-primary);
		color: var(--color-white);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	h1 {
		margin: 0;
		font-size: 1rem;
	}

	@media screen and (min-width: 25rem) {
		h1 {
			font-size: 1.5rem;
		}
	}

	@media screen and (min-width: 45rem) {
		h1 {
			font-size: 2rem;
		}
	}
</style>
