import { Link } from 'react-router-dom';
import styles from '@/styles/projects.module.css';

const Projects = () => {
	return (
		<div>
			<h1>Projects</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi non voluptatem nobis nemo
				perspiciatis quis autem officiis architecto maxime dolorem!
			</p>
			<section className={styles.layout}>
				{/* Project 1 */}
				<img src="/project-example.png" alt="Project Screenshot" />
				<div>
					<h2>Project 1</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempora, ipsam
						praesentium reprehenderit nam quam assumenda corrupti vero quas incidunt.
					</p>
					<Link to="/projects/project-1">More Info</Link>
				</div>
				{/* Project 2 */}
				<img src="/project-example.png" alt="Project Screenshot" />
				<div>
					<h2>Project 2</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempora, ipsam
						praesentium reprehenderit nam quam assumenda corrupti vero quas incidunt.
					</p>
					<Link to="/projects/project-2">More Info</Link>
				</div>
				{/* Project 3 */}
				<img src="/project-example.png" alt="Project Screenshot" />
				<div>
					<h2>Project 3</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempora, ipsam
						praesentium reprehenderit nam quam assumenda corrupti vero quas incidunt.
					</p>
					<Link to="/projects/project-3">More Info</Link>
				</div>
			</section>
		</div>
	);
};
export default Projects;
