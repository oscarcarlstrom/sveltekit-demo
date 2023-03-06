<script lang="ts">
	import { goto } from '$app/navigation';
	import { token } from '../../stores';
	import ErrorComponent from '../../lib/components/error.svelte';
	import Button from '../../lib/components/button.svelte';

	let error = '';
	function requestNewToken() {
		const clientId = '238400ff9c1548809724843cff160c7b';
		const clientSecret = '1326ac04d2f543f2a4793bda3e81768e';
		fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: 'grant_type=client_credentials'
		})
			.then((response) => response.json())
			.then((json) => {
				token.set(json);
				setTimeout(() => {
					token.set(null);
				}, json['expires_in'] * 1000);
				// navigate("/", { replace: true });
				goto(`/`);
			})
			.catch((e) => {
				error = e.message;
			});
	}
</script>

<h2>Request a new token</h2>
<p>
	In order to search for artists on Spotify you need a valid token. Click on the button to get a
	fresh, valid token. And continue searching for artists.
</p>
<Button on:click={requestNewToken}>New token</Button>
{#if error}
	<ErrorComponent message={error} />
{/if}

<style>
	h2 {
		margin: 0 0 var(--spacing-m);
		color: var(--color-primary);
	}
</style>
