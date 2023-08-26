import React, { useContext, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';
import ProjectSingle from './ProjectSingle';

const ProjectsGrid = () => {
	const {
		projects,
		selectProject,
		setSelectProject,
		selectProjectsByCategory,
		searchProject,
		setSearchProject,
		searchProjectsByTitle,
	} = useContext(ProjectsContext);

	const [displayCount, setDisplayCount] = useState(5); // Initial number of projects to display
	const step = 5; // Number of projects to add on each "Show More" click

	const handleShowMoreClick = () => {
		setDisplayCount(displayCount + step);
	};

	const renderProjectSingle = (project) => (
		<ProjectSingle
			id={project.id}
			title={project.ProjectHeader.title}
			timeline={project.ProjectHeader.timeline}
			category={project.ProjectHeader.category}
			summary={project.ProjectHeader.summary}
			thumbnail={project.ProjectHeader.thumbnail}
			github={project.ProjectInfo.GithubLink}
			demo={project.ProjectInfo.DemoLink}
			key={project.id}
		/>
	);

	let displayedProjects = projects;
	if (searchProject) {
		displayedProjects = searchProjectsByTitle;
	} else if (selectProject) {
		displayedProjects = selectProjectsByCategory;
	}

	return (
		<section>
			{/* Search and Filter Projects */}
			<div className="my-8 w-full">
				<div
					className="
						sm:flex
                        sm:justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
				>
					<div className="flex justify-between gap-2">
						<input
							onChange={(e) => {
								setSearchProject(e.target.value);
							}}
							className="
								font-general-medium
								w-full
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                              border-gray-200
                                dark:border-secondary-dark
								focus:border-emerald-500
								focus:ring-emerald-500
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Projects"
							aria-label="Name"
						/>
						<span
							className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
						>
							<FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5" />
						</span>
					</div>

					<ProjectsFilter setSelectProject={setSelectProject} />
				</div>
			</div>

			{/* Project Listing */}
			<div
				className="
					space-y-8
					relative
					before:absolute
					before:inset-0
					before:ml-5
					before:-translate-x-px
					md:before:ml-[8.75rem]
					md:before:translate-x-0
					before:h-full
					before:w-0.5
					before:bg-gradient-to-b
					before:from-transparent
					before:via-slate-300
					before:to-transparent
					"
			>
				{displayedProjects.slice(0, displayCount).map((project) =>
					renderProjectSingle(project)
				)}
			</div>

			{/* Show More Button */}
			{displayCount < displayedProjects.length && (
				<div className="flex justify-center mt-4">
					<button
						className="
							bg-primary-light
							dark:bg-ternary-dark
							text-primary-dark
							dark:text-ternary-light
							mt-5
							px-6
							py-3
							rounded-lg
							shadow-md
							hover:shadow-lg
							transition duration-300
							focus:outline-none
							"
						onClick={handleShowMoreClick}
					>
						Show More
					</button>
				</div>
			)}
		</section>
	);
};

export default ProjectsGrid;
