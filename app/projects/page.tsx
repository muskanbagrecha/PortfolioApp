import { projects } from '@/constants/projects';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Muskan Bagrecha - Projects',
	description: "Muskan bagrecha's projects are here",
};

export default function Projects() {
	return (
		<div className='projects'>
			<h1>My Projects</h1>
			{projects.map((project, index) => (
				<div className='project-row' key={index}>
					<h2>{project.title}</h2>
					<p>{project.description}</p>
					{project.technicalDetails && (
						<>
							<h4>Technical details: </h4>
							<ul>
								{project.technicalDetails.map((detail, i) => (
									<li key={i}>{detail}</li>
								))}
							</ul>
						</>
					)}
					{project.liveLink && (
						<Link className='project-btn' href={project.liveLink} target='_blank'>
							Live Project
						</Link>
					)}
					{project.sourceCodeLink && (
						<Link className='project-btn-sourcecode' href={project.sourceCodeLink} target='_blank'>
							Source code
						</Link>
					)}
				</div>
			))}
		</div>
	);
}
