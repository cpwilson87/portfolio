import Head from 'next/head';
import { Header, Footer, Hero, About, Projects, Contact } from '../components';

export default function Home() {
	return (
		<>
			<Head>
				<title>CP. Wilson</title>
				<meta name="description" content="CP Wilson Portfolio Site" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<Header />
			<main>
				<Hero />
				<About />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
