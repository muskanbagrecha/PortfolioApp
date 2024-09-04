import type { Metadata } from 'next';
// import './globals.css';
import './styles.css';
import Link from 'next/link';
import Image from 'next/image';
import { NavigationBar } from '@/components/nav';

export const metadata: Metadata = {
	title: 'Muskan bagrecha - Software Development Engineer',
	description: 'a developer, writer and product gal',
	keywords: [
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
	openGraph: {
		title: 'Muskan bagrecha - Software Development Engineer',
		description: 'a developer, writer and product gal',
		type: 'website',
		locale: 'en_US',
		url: 'https://muskanbagrecha.com',
		siteName: 'Muskan bagrecha',
		images: [
			{
				url: '/me.jpeg',
				width: 1200,
				height: 630,
				alt: 'Muskan bagrecha',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Muskan bagrecha - Software Development Engineer',
		description: 'a developer, writer and product gal',
		images: {
			url: '/me.jpeg',
			width: 1200,
			height: 630,
			alt: 'Muskan bagrecha',
		},
	},
};

interface LayoutProps {
	children: React.ReactNode;
}

export default function RootLayout(props: LayoutProps) {
	const { children } = props;
	return (
		<html lang='en' className='scroll-smooth'>
			<body className={`!min-h-screen`}>
				<NavigationBar />
				{children}
				<footer>
					<p>&copy; Muskan Bagrecha, 2021</p>
					<p>Connect with me!</p>
					<Link href='https://github.com/muskanbagrecha' target='_blank'>
						<Image src='/github-logo.png' alt='Github-profile' id='logo' width={512} height={512} />
					</Link>
					<Link href='https://twitter.com/HoejackBorseman' target='_blank'>
						<Image src='/twitter-sign.png' alt='Twitter-profile' id='logo' width={512} height={512} />
					</Link>
					<Link href='https://www.linkedin.com/in/muskan-bagrecha-82bbb8176' target='_blank'>
						<Image src='/linkedin-logo.png' alt='Linkedin-profile' id='logo' width={512} height={512} />
					</Link>
				</footer>
			</body>
		</html>
	);
}
