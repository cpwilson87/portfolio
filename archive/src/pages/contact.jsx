import { useState } from 'react';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submit form');
		console.log({ name, email, message });
	};
	return (
		<section>
			<h1>Contact</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, accusamus minus. Repellendus
				doloremque iure error eaque eligendi recusandae optio iste?
			</p>
			<form onSubmit={handleSubmit}>
				{/* Name */}
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					required
					placeholder="Enter Your Name"
					value={name}
					id="name"
					onChange={(e) => setName(e.target.value)}
				/>

				{/* Email */}
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					required
					placeholder="Enter Your Email"
					value={email}
					id="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				{/* Message */}
				<label htmlFor="message">Message:</label>
				<textarea
					required
					placeholder="Enter Your Message"
					value={message}
					id="message"
					onChange={(e) => setMessage(e.target.value)}
				/>
				{/* Submit */}
				<button type="submit">Submit</button>
			</form>
		</section>
	);
};
export default Contact;
