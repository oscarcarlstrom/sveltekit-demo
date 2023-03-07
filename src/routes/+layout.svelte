<script lang="ts">
	import { Header, Footer } from '$lib/components';
</script>

<svelte:head>
	<style>
		:root {
			--color-primary: crimson;
			--color-primary-dark: #8b142c;
			--color-primary-light: #dc143ca1;
			--color-white: white;
			--color-black: #333;

			--font-body: 'Kiwi Maru', serif;

			--spacing-xs: 6px;
			--spacing-s: 10px;
			--spacing-m: 12px;
			--spacing-l: 20px;
			--spacing-xl: 50px;

			--border-width: 2px;
			--border-style: var(--border-width) solid;
			--border-radius-xs: 1px;
			--border-radius-s: 2px;
			--border-radius-m: 5px;
			--border-radius-l: 10px;
			--border-radius-xl: 15px;
		}

		html,
		body {
			position: relative;
			width: 100%;
			height: 100%;
		}

		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			font-family: var(--font-body);
			color: var(--color-black);
			display: flex;
			flex-direction: column;
		}

		a {
			text-decoration: none;
		}

		a:hover {
			text-decoration: underline;
		}

		label {
			display: block;
		}

		input,
		button,
		select,
		textarea {
			font-family: inherit;
			font-size: inherit;
		}

		ul {
			list-style: none;
			padding: 0;
			margin: 0;
		}

		::placeholder {
			/* Chrome, Firefox, Opera, Safari 10.1+ */
			color: var(--color-primary);
			opacity: 1; /* Firefox */
		}

		:-ms-input-placeholder {
			/* Internet Explorer 10-11 */
			color: var(--color-primary);
		}

		::-ms-input-placeholder {
			/* Microsoft Edge */
			color: var(--color-primary);
		}

		.nav-link {
			color: var(--color-white);
			font-size: 1.2rem;
			font-weight: 300;
			outline: none;
			padding: var(--spacing-xs);
		}

		.nav-link:focus {
			background-color: var(--color-primary-dark);
			border-radius: var(--border-radius-m);
		}
	</style>
</svelte:head>

<Header
	navItems={[
		{
			href: '/',
			text: 'Search'
		},
		{
			href: '/login',
			text: 'Login'
		},
		{
			href: '/about',
			text: 'About'
		}
	]}
>
	My Svelte App
</Header>
<main>
	<slot />
</main>
<Footer>
	<p>Powered by the Spotify API</p>
</Footer>

<style>
	main {
		padding: var(--spacing-l);
		flex-grow: 1;
	}
</style>
