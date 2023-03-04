<script lang="ts">
	export let message = '';
</script>

<div class="error">
	<h2>Error</h2>
	<p>{message}</p>
</div>

<style>
	.error {
		color: var(--color-white);
		background-color: var(--color-primary);
		padding: var(--spacing-l);
		border-radius: var(--border-radius-l);
	}
</style>
