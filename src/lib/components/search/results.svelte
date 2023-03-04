<script lang="ts">
	import ErrorComponent from '../error.svelte';
	import Result from './result.svelte';
	import { token } from '../../../stores';

	export let searchString = '';

	interface Results {
		name: string;
		genres: string[];
		url: string;
		imgSrc: string;
		followers: 0;
	}
	let results: Results[] = [];
	let error = '';
	function search(query: string) {
		if (query === '') {
			results = [];
			return;
		}
		fetch(`https://api.spotify.com/v1/search?q=${encodeURI(query)}&type=artist`, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: $token ? `${$token['token_type']} ${$token['access_token']}` : ''
			}
		})
			.then((response) => response.json())
			.then((json) => {
				if (json.artists) {
					return (results = json.artists.items.map((item: any) => ({
						name: item.name as string,
						genres: item.genres as string[],
						url: item.external_urls.spotify as string,
						imgSrc: item.images[0]?.url as string,
						followers: item.followers.total as number
					})));
				}
				results = [];
				throw new Error(`${json.error.status} - ${json.error.message}`);
			})
			.catch((e) => (error = e.message));
	}
	$: search(searchString);
</script>

{#if error}
	<ErrorComponent message={error} />
{:else}
	<ul class="results">
		{#each results as result}
			<Result {...result} />
		{/each}
	</ul>
{/if}

<style>
	@media screen and (min-width: 45rem) {
		.results {
			column-count: 2;
			column-gap: 10px;
		}
	}

	@media screen and (min-width: 63rem) {
		.results {
			column-count: 3;
		}
	}

	@media screen and (min-width: 100rem) {
		.results {
			column-count: 4;
		}
	}

	@media screen and (min-width: 112rem) {
		.results {
			column-count: 5;
		}
	}
</style>
