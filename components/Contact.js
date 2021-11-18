import { useState } from 'react';

export default function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => setLoading(false), 3000);

		console.log({ name, email, message });
	};
	return (
		<section id="contact">
			<h2 className="title">Contact</h2>
			<p>
				I am currently looking for my first full-time position as a web developer and would love to
				hear from you. If you are interested in hiring me please contact me.
			</p>
			<form onSubmit={handleSubmit}>
				<label>
					Name
					<input
						type="text"
						placeholder="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label>
					Email
					<input
						type="email"
						placeholder="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					Message
					<textarea
						placeholder="name"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</label>
				<button type="submit" aria-busy={loading ? 'true' : 'false'}>
					Send
				</button>
			</form>
		</section>
	);
}
