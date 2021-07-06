<script>
	import Header from '$lib/Header/index.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>© 2021 Luce Liu</p>
</footer>

<style>
	main {
		padding: 1rem;
		width: 100%;
		height: 85vh;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0px;
		font-size: 16px;
		height: 10vh;
		box-sizing: border-box;
	}

	footer p {
		margin: 0;
	}

	@media only screen and (min-width: 768px) {
		footer {
			padding: 40px 0;
			justify-content: center;
		}
	}
</style>
