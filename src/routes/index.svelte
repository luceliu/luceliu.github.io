<script context="module">
	export const prerender = true;
</script>

<script>
	import IconifyIcon from '@iconify/svelte';
	import githubIcon from '@iconify-icons/simple-icons/github';
	import linkedinIcon from '@iconify-icons/simple-icons/linkedin';
	import emailIcon from '@iconify-icons/fa-solid/at';
	import paperclipIcon from '@iconify-icons/fa-solid/paperclip';
	import warningIcon from '@iconify-icons/emojione-v1/warning';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Luce Liu</h1>
	<div class="taglines">
		<p>
			Incoming software engineer at <a href="https://www.mark43.com/">Mark43</a>. Previously an
			intern at
			<a href="https://www.nuance.com/">Nuance Communications</a>
			and <a href="https://www.paypal.com/">PayPal</a>. Recent graduate of
			<a href="https://cogsys.ubc.ca/">UBC Cognitive Systems</a>.
		</p>
	</div>
	<div class="currently">
		<p>
			Currently exploring <a href="https://svelte.dev/">Svelte</a>, learning about
			<a
				href="https://www.opendemocracy.net/en/degrowth-case-for-constructing-new-economic-paradigm/"
				>degrowth</a
			>
			and <a href="https://www.rosalux.de/en/o4p">organizing</a>, and happily living in Toronto
			again.
		</p>
	</div>
	<hr />
	<div class="links">
		<a href="https://github.com/luceliu">
			<IconifyIcon icon={githubIcon} />
		</a>
		<a href="https://www.linkedin.com/in/luceliu">
			<IconifyIcon icon={linkedinIcon} />
		</a>
		<a
			href="https://drive.google.com/file/d/1RY36-G9ociFTbfaFHUEVdpTuQH-B4EM7/view?usp=sharing"
			target="_blank"
		>
			<IconifyIcon icon={paperclipIcon} />
		</a>
		<a href="mailto:thisisluce@gmail.com">
			<IconifyIcon icon={emailIcon} />
		</a>
	</div>
	<p>
		<IconifyIcon height={16} icon={warningIcon} /> site under construction <IconifyIcon
			height={16}
			icon={warningIcon}
		/>
	</p>
</section>

<style lang="scss">
	@import './src/styles/_mixins.scss';
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1;
		margin: 2em;

		@include for-size(tablet-landscape-up) {
			margin: 5em;
		}
	}

	p {
		margin: 0 0 2em 0;
		font-size: 18px;

		@include for-size(tablet-landscape-up) {
			margin: 0 0 1em 0;
			font-size: 20px;
		}
	}

	h1 {
		width: 100%;
		margin-bottom: 0.5em;

		@include for-size(tablet-landscape-up) {
			margin-bottom: 0.3em;
		}
	}

	.links {
		display: flex;
		flex-direction: row;
		margin-bottom: 1em;
	}

	.links a {
		margin-right: 0.6em;
	}

	hr {
		width: 200px;
		border: none;
		border-top: 1px solid var(--primary-color);
		margin: 0 0 1em 0;
	}
</style>
