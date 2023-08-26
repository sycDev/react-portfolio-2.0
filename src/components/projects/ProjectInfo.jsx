import React, { useContext } from 'react';
import { FiEye, FiGithub } from 'react-icons/fi';
import SingleProjectContext from '../../context/SingleProjectContext';
import ActionButton from '../reusable/ActionButton';

const ProjectInfo = () => {
	const { project } = useContext(SingleProjectContext);

	if (!project) {
		return null; // Handle case when project is not found
	}

	const projectInfo = project.ProjectInfo;

	return (
		<div 
			className="
				block
				sm:flex
				gap-0
				sm:gap-10
				mt-0
				sm:mt-14
				"
		>
			<div
				className="
					w-full
					sm:w-1/3
					text-left
					"
			>
				{/* Single project view source code button */}
				{projectInfo.GithubLink ?
					(
						<div
							className="
								flex
								items-center
								gap-3
								mb-0
								sm:mb-5
								"
						>
							<ActionButton
								openInNewTab={true}
								link={projectInfo.GithubLink}
								title={
									<div className="flex items-center">
										<FiGithub className="mr-1" />
										<span>
											View Source Code
										</span>
									</div>
								}
								className="w-full"
							/>
						</div>
					)
					: null
				}

				{/* Single project view demo button */}
				{projectInfo.DemoLink ?
					(
						<div
							className="
								flex
								items-center
								gap-3
							"
						>
							<ActionButton
								openInNewTab={true}
								link={projectInfo.DemoLink}
								title={
									<div className="flex items-center">
										<FiEye className="mr-1" />
										<span>
											View Demo
										</span>
									</div>
									}
								className="w-full"
							/>
						</div>
					)
					: null
				}

				{/* Single project technologies */}
				<div className="mt-7">
					<p
						className="
							font-general-regular
							text-2xl
							font-semibold
							text-ternary-dark
							dark:text-ternary-light
							mb-2
							"
					>
						{projectInfo.Technologies[0].title}
					</p>
					<div className="mt-3">
						{projectInfo.Technologies[0].techs.map((tag, tagIndex) => (
							<span
								key={tagIndex}
								className="
									inline-block
									bg-gray-200
									rounded-full
									px-3
									py-1
									text-sm
									font-semibold
									text-gray-700
									mr-2
									mb-2
									"
								>
									{tag}
							</span>
						))}
					</div>
				</div>
			</div>

			{/*  Single project right section */}
			<div
				className="
					w-full
					sm:w-2/3
					text-left
					mt-7
					sm:mt-0
					"
			>
				{/* Single project about details */}
				<div className="mb-7">
					<p
						className="
							font-general-regular
							text-2xl
							font-semibold
							text-secondary-dark
							dark:text-secondary-light
							mb-2
							"
					>
						{projectInfo.AboutHeading}
					</p>
					{projectInfo.AboutDetails.map((detail) => (
						<p 
							className="
								mb-4
								text-ternary-dark
								dark:text-ternary-light
								text-lg
								text-justify
								"
							key={detail.id}
						>
							{detail.paragraph}
						</p>
					))}
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
					<p
						className="
							font-general-regular
							text-2xl
							font-semibold
							text-ternary-dark
							dark:text-ternary-light
							mb-2
							"
					>
						{projectInfo.ObjectivesHeading}
					</p>
					{projectInfo.ObjectivesDetails.map((detail) => (
						<p 
							className="
								text-ternary-dark
								dark:text-ternary-light
								text-lg
								"
							key={detail.id}
						>
							{detail.point}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectInfo;
