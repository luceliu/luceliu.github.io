<script>
	import Header from '$lib/Header/index.svelte';
	import '../styles/app.scss';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>© 2021 Luce Liu</p>
</footer>

<style lang="scss">
	@import '../src/styles/_mixins.scss';
	main {
		padding: 1rem;
		width: 100%;
		height: 85vh;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;

		// @include for-size(tablet-landscape-up) {
		// 	height: 85vh;
		// }
	}

	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0px;
		font-size: 16px;
		height: 10vh;
		box-sizing: border-box;

		@include for-size(tablet-landscape-up) {
			padding: 40px 0;
			justify-content: center;
		}
	}

	footer p {
		margin: 0;
	}
</style>
