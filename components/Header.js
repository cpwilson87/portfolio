import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<Link href="#home">
				<a>CP. Wilson</a>
			</Link>
			<nav>
				<Link href="#about">
					<a>About</a>
				</Link>
				<Link href="#projects">
					<a>Projects</a>
				</Link>
				<Link href="#contact">
					<a>Contact</a>
				</Link>
			</nav>
		</header>
	);
}
