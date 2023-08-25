import React, { useState, createContext, useMemo } from 'react';
import { featuredProjectsData } from '../data/featuredProjectsData';

// Create featured projects context
export const FeaturedProjectsContext = createContext();

// Create the featured projects context provider
export const FeaturedProjectsProvider = (props) => {
	const [projects, setProjects] = useState(featuredProjectsData);
	
	const memoizedValue = useMemo(() => {
		return {
            projects, setProjects
        };
	}, [projects, setProjects]);

	return (
		<FeaturedProjectsContext.Provider value={memoizedValue}>
			{props.children}
		</FeaturedProjectsContext.Provider>
	);
};
