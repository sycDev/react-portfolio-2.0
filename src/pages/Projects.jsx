import React from 'react';
import { ProjectsProvider } from '../context/ProjectsContext';
import TabTitle from '../components/common/TabTitle';
import ProjectsGrid from '../components/projects/ProjectsGrid';

const Projects = () => {
	return (
		<>
			<TabTitle title="sycDev&#127808; | Projects" />
			<ProjectsProvider>
				<div className="container mx-auto">
					<ProjectsGrid />
				</div>
			</ProjectsProvider>
		</>
	);
};

export default Projects;
