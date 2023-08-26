import React, { useState, createContext, useMemo } from 'react';
import { singleProjectData } from '../data/singleProjectData';

// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export const ProjectsProvider = (props) => {
	// Reverse the order to display from newest to oldest
	let sortedProjectData = singleProjectData.slice().reverse();

	const [projects, setProjects] = useState(sortedProjectData);
	const [selectProject, setSelectProject] = useState('');
	const [searchProject, setSearchProject] = useState('');

	// Select projects by project category
	const selectProjectsByCategory = projects.filter((item) => {
		if (selectProject === '') {
			return true; // Show all projects
		} else {
			let category = item.ProjectHeader.category.charAt(0).toUpperCase() + item.ProjectHeader.category.slice(1);

            return category.includes(selectProject);
		}
	});

	// Search filtered projects by project title
    const searchProjectsByTitle = selectProjectsByCategory.filter((item) => {
		const titleIncludesSearch = item.ProjectHeader.title.toLowerCase()
                                        .includes(searchProject.toLowerCase());
        const isEmptySearch = searchProject === '';

        const result = titleIncludesSearch || isEmptySearch ? item : '';
        
        return result;
	});

	const memoizedValue = useMemo(() => {
		return {
			projects, setProjects,
			selectProject, setSelectProject,
			selectProjectsByCategory,
			searchProject, setSearchProject,
			searchProjectsByTitle,
		};
	}, [projects, setProjects,
		selectProject, setSelectProject,
		selectProjectsByCategory,
		searchProject, setSearchProject,
		searchProjectsByTitle,
	]);

	return (
		<ProjectsContext.Provider value={memoizedValue}>
			{props.children}
		</ProjectsContext.Provider>
	);
};
