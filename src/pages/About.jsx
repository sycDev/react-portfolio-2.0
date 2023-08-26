import React from 'react';
import TabTitle from '../components/common/TabTitle';
import { motion } from 'framer-motion';
import { AboutProvider } from '../context/AboutContext';
import AboutBio from '../components/about/AboutBio';
import AboutGallery from '../components/about/AboutGallery';

const About = () => {
	return (
		<>
			<TabTitle title="sycDev&#127808; | About Me" />
			<AboutProvider>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, delay: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.7,
						delay: 0.15,
					}}
					exit={{ opacity: 0 }}
					className="
						container
						mx-auto
						"
				>
					<AboutBio />
					<AboutGallery />
				</motion.div>
			</AboutProvider>
		</>
	);
};

export default About;
