import styles from '@/styles/home.module.css';

const Home = () => {
	return (
		<section className={styles.container}>
			<p className="text-green font-mono">Hi, my name is</p>
			<p className="h1">Chris Wilson.</p>
			<p className="h1 text-secondary">I build things for the web.</p>
			<p>I am a software engineer specialising in building exceptional digital experiences.</p>
		</section>
	);
};
export default Home;
