import { Outlet, NavLink } from 'react-router-dom';

function Layout() {
	return (
		<>
			<header>
				<h1>CP. Wilson</h1>
				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/projects">Projects</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/contact">Contact</NavLink>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default Layout;
