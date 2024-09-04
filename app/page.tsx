import Image from 'next/image';

export default function Home() {
	const jsonLd = {
		'@context': 'http://schema.org',
		'@type': 'Person',
		name: 'Muskan Bagrecha',
		jobTitle: 'Software Development Engineer',
		email: 'muskanbagrecha04@gmail.com',
		alternateName: 'Muskan',
		sameAs: [
			'https://www.linkedin.com/in/muskan-bagrecha',
			'https://github.com/muskanbagrecha',
			'https://x.com/HoejackBorseman',
			'https://hashnode.com/@muskanbagrecha',
			'https://www.wellsfargo.com/',
			'https://www.instagram.com/muskan_bagrecha/',
			'https://peerlist.io/muskanbagrecha',
			'https://leetcode.com/u/muskan_bagrecha/',
			'https://fashgram-media-react.netlify.app/',
		],
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Bangalore',
			addressRegion: 'Karnataka',
			addressCountry: 'India',
		},
		alumniOf: {
			'@type': 'CollegeOrUniversity',
			name: 'Ramaiah University of Applied Sciences',
			sameAs: 'https://www.msruas.ac.in/',
		},
		worksFor: {
			'@type': 'Organization',
			name: 'Wells Fargo',
			sameAs: 'https://www.wellsfargo.com/',
		},
		knowsAbout: [
			'Java',
			'Springboot',
			'React',
			'Redux',
			'Javascript',
			'jQuery',
			'Typescript',
			'Spring MVC',
			'MySQL',
			'MongoDB',
			'Nodejs',
			'Git',
			'Jenkins',
			'Kafka',
			'Redis',
			'Harness',
			'React Native',
		],
		hasOccupation: {
			'@type': 'Occupation',
			name: 'Software Development Engineer',
			occupationLocation: [
				{
					'@type': 'City',
					name: 'Bangalore',
				},
				{
					'@type': 'City',
					name: 'Hyderabad',
				},
			],
			estimatedSalary: {
				'@type': 'MonetaryAmountDistribution',
				name: 'Estimated Salary',
				currency: 'INR',
				median: 0,
				unitText: 'YEAR',
			},
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': 'https://www.wellsfargo.com/',
				url: 'https://www.wellsfargo.com/',
				lastReviewed: '2024-09-02',
			},
		},
		mainEntityOfPage: [
			{
				'@type': 'WebPage',
				url: 'https://fashgram-media-react.netlify.app/',
				name: 'Fashgram Media',
				description:
					'A social media application inspired by Instagram where users can add/delete posts, follow/unfollow other users, and chat with them, among others',
			},
		],
	};

	return (
		<>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<Image id='Greet' src='/product.svg' alt='person' width={860} height={609} />
			<h1 id='Muskan-main'>I&lsquo;m Muskan</h1>
			<h2 id='designation'>a developer, writer and product gal.</h2>
			<hr />
			<div className='middle-container'>
				<div className='profile'>
					<h2>Hello.</h2>
					<p>I study in Ramaiah University of Applied Sciences, Bangalore. I love breaking down problems and building new things.</p>
				</div>
				<hr />
				<div className='interests'>
					<h2>My Interests</h2>
					<div className='interest-row'>
						<Image className='code-image' src='/code.png' alt='Code illustration' width={562} height={562} />
						<h3>Development</h3>
						<p>I love building things from scratch. I&lsquo;m comfortable with HTML, CSS, JavaScript, React, Python and Flutter.</p>
					</div>
					<div className='interest-row'>
						<Image className='content-img' src='/content.png' alt='content-illustration' width={562} height={562} />
						<h3>Content writing</h3>
						<p>
							I am a freelance content writer with an experience of 3 years in developing compelling technical and non-technical content
							for different websites. I have a diligent eye for accuracy and I am always open to the vast realm of learning.
						</p>
					</div>
					<br />
					<br />
					<br />
					<div className='interest-row'>
						<Image className='product-img' src='/product-2.svg' alt='product-illustration' width={741} height={608} />
						<h3>Product Management</h3>
						<p>Learning the nuances of product management to build and ship great products and focus on the metrics that truly matter.</p>
					</div>
					<hr />
					<div className='contact-me'>
						<h2>Get In Touch</h2>
						<h3>Do you like pizza?</h3>
						<p className='contact-message'>Let&lsquo;s get in touch and talk about pizza. We can code while eating it.</p>
					</div>
				</div>
				<br />
				<br />
				<a className='btn' href='mailto:muskanbagrecha04@gmail.com'>
					CONTACT ME
				</a>
				<br />
			</div>
		</>
	);
}
