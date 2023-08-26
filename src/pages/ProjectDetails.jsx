import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import TabTitle from '../components/common/TabTitle';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';

const ProjectDetails = () => {
	const { id } = useParams();

	return (
		<>
			<TabTitle title="sycDev&#127808; | Project Details" />
				<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.6,
					delay: 0.15,
				}}
				className="container mx-auto mt-5 sm:mt-10"
			>
				<SingleProjectProvider projectId={id}>
					<ProjectHeader />
					<ProjectGallery />
					<ProjectInfo />
				</SingleProjectProvider>
			</motion.div>
		</>
	);
};

export default ProjectDetails;
