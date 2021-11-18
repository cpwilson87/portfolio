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
							<h3 className="h4 text-green">{project.title}</h3>
						</header>
						<p>{project.description}</p>
						<footer>
							<small>React</small>
							<small>Tailwind</small>
						</footer>
					</article>
				))}
			</div>
		</section>
	);
}
