import React, { useContext, useEffect } from 'react';
import { Lightbox, initTE } from 'tw-elements';
import ReactPlayer from 'react-player'
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = () => {
	useEffect(() => {
		initTE({ Lightbox });
	}, []);

	const { project } = useContext(SingleProjectContext);

	// When project is not found
	if (!project) {
		return null;
	}

	return (
		<>
			{project.ProjectShowcase ?
				(
					<ReactPlayer
						className="
							mt-5
							top-0
							left-0
							relative
							cursor-pointer
							"
						url={project.ProjectShowcase}
						width='100%'
						height='100%'
						playing
						muted
						loop
						controls
						config={{
							file: {
								attributes: {
									controlsList: 'nodownload'
								}
							}
						}}
					/>
				)
				: null
			}

			<div
				data-te-lightbox-init
				className="
					grid
					grid-cols-1
					sm:grid-cols-3
					sm:gap-10
					mt-12
					"
			>
				{project.ProjectImages.map((project) => {
					return (
						<div
							className="
								mb-10
								sm:mb-0
								"
							key={project.id}
						>
							<img
								src={project.img}
								className="
									rounded-xl
									cursor-pointer
									shadow-lg
									sm:shadow-none
									"
								alt={project.title}
								key={project.id}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ProjectGallery;
