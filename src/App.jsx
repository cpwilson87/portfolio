import { Routes, Route } from 'react-router-dom';
// pages
import Layout from './pages/__layout';
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="projects" element={<Projects />} />
				<Route path="*" element={<p>404</p>} />
			</Route>
		</Routes>
	);
}

export default App;
