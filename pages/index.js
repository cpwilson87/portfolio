import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>CP. Wilson</title>
				<meta name="description" content="CP Wilson Portfolio Site" />
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<main className={styles.main}>
				<p>Hero</p>
				<hr />

				<p>About</p>
				<hr />

				<p>Jobs</p>
				<hr />

				<p>Featured</p>
				<hr />

				<p>Projects</p>
				<hr />

				<p>Contact</p>
				<hr />
			</main>
		</div>
	);
}
