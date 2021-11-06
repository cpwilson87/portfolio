<header>
	<a href="#">CP. Wilson</a>
	<nav>
		<a href="/projects">Projects</a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a>
	</nav>
</header>

<main>
	<slot />
</main>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2rem;
		border-bottom: 1px solid gray;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	main {
		padding: 1rem 2rem;
	}
</style>
