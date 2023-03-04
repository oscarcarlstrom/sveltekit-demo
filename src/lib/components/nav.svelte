<script lang="ts">
	import type { NavItem } from './header.svelte';
	export let links: NavItem[] = [];
</script>

<nav>
	<ul>
		{#each links as link}
			<li>
				<a class="nav-link" href={link.href}>
					{link.text}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	ul {
		display: flex;
	}

	li {
		padding-left: var(--spacing-m);
	}
</style>
