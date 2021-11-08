import { Outlet, NavLink } from 'react-router-dom';

function Layout() {
	return (
		<>
			<header>
				<p className="h3">CP. Wilson</p>
				<nav>
					<NavLink to="/" className="underlined h4">
						Home
					</NavLink>
					<NavLink to="/projects" className="underlined h4">
						Projects
					</NavLink>
					<NavLink to="/about" className="underlined h4">
						About
					</NavLink>
					<NavLink to="/contact" className="underlined h4">
						Contact
					</NavLink>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default Layout;
