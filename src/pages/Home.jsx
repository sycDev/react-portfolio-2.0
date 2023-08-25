import React from 'react';
import TabTitle from '../components/common/TabTitle';
import HomeBanner from '../components/home/HomeBanner';
import FeaturedProjects from '../components/home/FeaturedProjects';
import { FeaturedProjectsProvider } from '../context/FeaturedProjectsContext';

const Home = () => {
	return (
		<>
			<TabTitle title="sycDev&#127808;" />
			<div className="container mx-auto">
				<HomeBanner />

				<FeaturedProjectsProvider>
					<FeaturedProjects />
				</FeaturedProjectsProvider>
			</div>
		</>
	);
};

export default Home;
