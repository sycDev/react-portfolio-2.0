import React, { useState, createContext, useMemo } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children, projectId }) => {
	const [singleProjectData, setSingleProjectData] = useState(singleProjectDataJson);

	// Function to find a project by id
	const findProjectById = (id) => {
		return singleProjectData.find(project => project.id === parseInt(id));
	};

	// Get the project data based on the projectId
	const project = findProjectById(projectId);

	const memoizedValue = useMemo(() => {
		return {
			singleProjectData, setSingleProjectData,
			project
		};
	}, [singleProjectData, setSingleProjectData,
		project
	]);

	return (
		<SingleProjectContext.Provider value={memoizedValue}>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
