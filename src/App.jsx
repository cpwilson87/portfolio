import { Routes, Route } from 'react-router-dom';
// pages
import Layout from './pages/__layout';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

import Projects from './pages/projects/projects';
import ProjectOne from './pages/projects/projectOne';
import ProjectTwo from './pages/projects/projectTwo';
import ProjectThree from './pages/projects/projectThree';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />

				<Route path="projects" element={<Projects />} />
				<Route path="projects/project-1" element={<ProjectOne />} />
				<Route path="projects/project-2" element={<ProjectTwo />} />
				<Route path="projects/project-3" element={<ProjectThree />} />

				<Route path="*" element={<p>404</p>} />
			</Route>
		</Routes>
	);
}

export default App;
