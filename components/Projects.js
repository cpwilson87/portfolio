const projects = [
	{
		id: 1,
		link: '#',
		title: 'Project 1',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime libero modi et eaque omnis! Assumenda architecto obcaecati dicta molestias? Natus.',
		tags: ['React', 'Tailwind']
	},
	{
		id: 2,
		link: '#',
		title: 'Project 2',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime libero modi et eaque omnis! Assumenda architecto obcaecati dicta molestias? Natus.',
		tags: ['React', 'Tailwind']
	},
	{
		id: 3,
		link: '#',
		title: 'Project 3',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime libero modi et eaque omnis! Assumenda architecto obcaecati dicta molestias? Natus.',
		tags: ['React', 'Tailwind']
	},
	{
		id: 4,
		link: '#',
		title: 'Project 4',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime libero modi et eaque omnis! Assumenda architecto obcaecati dicta molestias? Natus.',
		tags: ['React', 'Tailwind']
	},
	{
		id: 5,
		link: '#',
		title: 'Project 5',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime libero modi et eaque omnis! Assumenda architecto obcaecati dicta molestias? Natus.',
		tags: ['React', 'Tailwind']
	},
	{
		id: 6,
		link: '#',
		title: 'Project 6',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime libero modi et eaque omnis! Assumenda architecto obcaecati dicta molestias? Natus.',
		tags: ['React', 'Tailwind']
	}
];

export default function Projects() {
	return (
		<section id="projects">
			<h2 className="title">Projects</h2>
			<div className="grid">
				{projects.map((project) => (
					<article key={project.id}>
						<header>
							<h3 className="h4">{project.title}</h3>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-arrow-up-right"
							>
								<line x1="7" y1="17" x2="17" y2="7"></line>
								<polyline points="7 7 17 7 17 17"></polyline>
							</svg>
						</header>
						<p>{project.description}</p>
						<footer>
							<div>
								<small>React</small>
								<small>Tailwind</small>
							</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-github"
							>
								<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
							</svg>
						</footer>
					</article>
				))}
			</div>
		</section>
	);
}
