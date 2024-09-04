import { blogs } from '@/constants/blogs';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Muskan Bagrecha - Blogs',
	description: "Muskan bagrecha's blogs are here",
};

export default function Blogs() {
	return (
		<div className='blogs'>
			<div className='blogs-header'>
				<h1>My Blogs</h1>
			</div>
			{blogs.map((blog, index) => (
				<div className='blogs-content' key={index}>
					<h2>{blog.title}</h2>
					<small>Author: {blog.author}</small>
					<p>{blog.description}</p>
					<br />
					<Link className='blog-btn' type='button' target='_blank' href={blog.href}>
						Read Blog
					</Link>
				</div>
			))}
			<div id='blog-portfolio'>
				<p>Check out my other blogs here:</p>
				<Link href='https://builderneed.com/author/muskan-bagrecha/' passHref target='_blank'>
					<button className='blog-btn' type='button'>
						Read Blogs
					</button>
				</Link>
			</div>
		</div>
	);
}
