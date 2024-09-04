'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavigationBar() {
	const pathname = usePathname();
	const isActive = (path: string) => pathname === path;
	return (
		<nav>
			<ul>
				<li>
					<Link href='/' className={isActive('/') ? 'link-active' : ''}>
						Home
					</Link>
				</li>
				<li>
					<Link href='/projects' className={isActive('/projects') ? 'link-active' : ''}>
						Projects
					</Link>
				</li>
				<li>
					<Link href='/blogs' className={isActive('/blogs') ? 'link-active' : ''}>
						Blogs
					</Link>
				</li>
			</ul>
		</nav>
	);
}
