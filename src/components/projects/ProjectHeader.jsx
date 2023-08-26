import React, { useContext } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectSingleHeader = () => {
	const { project } = useContext(SingleProjectContext);

	if (!project) {
		return null; // Handle case when project is not found
	}

	const projectHeader = project.ProjectHeader;

	return (
		<div>
			<p
				className="
					font-general-medium
					text-left
					text-3xl
					sm:text-4xl
					font-bold
					text-primary-dark
					dark:text-primary-light
					mt-14
					sm:mt-20
					mb-7
					"
			>
				{projectHeader.title}
			</p>
			<div className="flex">
				<div
					className="
						flex
						items-center
						mr-10
						"
				>
					<FiClock							
						className="
							text-lg
							text-ternary-dark
							dark:text-ternary-light
							"
					/>
					<span
						className="
							font-general-regular
							ml-2
							leading-none
							text-primary-dark
							dark:text-primary-light
							"
					>
						{projectHeader.timeline}
					</span>
				</div>
				<div
					className="
						flex
						items-center
						"
				>
					<FiTag
						className="
							text-lg
							text-ternary-dark
							dark:text-ternary-light
							"
					/>
					<span
						className="
							font-general-regular
							ml-2
							leading-none
							text-primary-dark
							dark:text-primary-light
							"
					>
						{projectHeader.category}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectSingleHeader;
