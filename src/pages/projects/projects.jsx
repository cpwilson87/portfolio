import { Link } from 'react-router-dom';
import styles from '@/styles/projects.module.css';

import { ArrowIcon } from '@/assets/icons';

const Projects = () => {
	return (
		<div>
			<h1>Projects</h1>
			<p>Here are a few project samples I've worked on in the past year.</p>
			<section className={styles.layout}>
				{/* Project 1 */}
				<img src="/project-example.png" alt="Project Screenshot" />
				<div>
					<Link to="/projects/project-1" className="h2 link">
						<p>Project 1</p>
						<ArrowIcon className="text-green" />
					</Link>
					<p>Summary of project.</p>
					<Link to="/projects/project-1">More Info</Link>
				</div>
				{/* Project 2 */}
				<img src="/project-example.png" alt="Project Screenshot" />
				<div>
					<Link to="/projects/project-2" className="h2 link">
						<p>Project 2</p>
						<ArrowIcon className="text-green" />
					</Link>
					<p>Summary of project.</p>
					<Link to="/projects/project-2">More Info</Link>
				</div>
				{/* Project 3 */}
				<img src="/project-example.png" alt="Project Screenshot" />
				<div>
					<Link to="/projects/project-3" className="h2 link">
						<p>Project 3</p>
						<ArrowIcon className="text-green" />
					</Link>
					<p>Summary of project.</p>
					<Link to="/projects/project-3">More Info</Link>
				</div>
			</section>
		</div>
	);
};
export default Projects;
