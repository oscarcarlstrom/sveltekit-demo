<script lang="ts">
	export let name = '';
	export let genres: string[] = [];
	export let url = '';
	export let imgSrc = '';
	export let followers = 0;
</script>

<li class="result">
	<a href={url} target="_blank" rel="noreferrer">
		{#if imgSrc}
			<img src={imgSrc} alt={`Image of ${name}`} />
		{:else}
			<div class="img-placeholder">No image available</div>
		{/if}
		<div class="text-content">
			<h2 class="name">{name}</h2>
			<ul>
				{#each genres as genre}
					<li class="genre">#{genre}</li>
				{/each}
			</ul>
			<hr />
			<p class="followers">
				<span class="follow-number"> {followers.toLocaleString()}</span>
				<span>followers</span>
			</p>
		</div>
	</a>
</li>

<style>
	.result {
		break-inside: avoid;
	}

	a {
		display: flex;
		flex-direction: column;
		margin-bottom: 30px;
		text-decoration: none;
		background-color: var(--color-primary);
		color: var(--color-white);
		border-radius: var(--border-radius-xl);
		overflow: hidden;
		outline: none;
		transition: transform 500ms;
	}

	a:hover,
	a:focus {
		transform: scale(0.9);
	}

	a:focus {
		background-color: var(--color-primary-dark);
	}

	img {
		width: 100%;
		object-fit: fill;
	}

	.img-placeholder {
		background-color: var(--color-black);
		opacity: 0.5;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 25rem;
		font-size: 1.2rem;
	}

	.text-content {
		padding: var(--spacing-s) var(--spacing-m) var(--spacing-m);
	}

	.name {
		margin-bottom: 10px;
		margin-top: 0;
	}

	.genre {
		margin-bottom: 5px;
	}

	hr {
		border: none;
		height: 1px;
		background-color: white;
		border-radius: var(--border-radius-xs);
		margin: 20px 0;
		opacity: 0.3;
	}

	.followers {
		display: flex;
		flex-direction: column;
		text-align: right;
		margin: 0;
	}

	.follow-number {
		font-size: 2rem;
	}
</style>
