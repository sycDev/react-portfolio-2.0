import React from 'react';
import { Link } from 'react-router-dom';
import TabTitle from '../components/common/TabTitle';
import HomeBanner from '../components/home/HomeBanner';
import FeaturedProjects from '../components/home/FeaturedProjects';
import { FeaturedProjectsProvider } from '../context/FeaturedProjectsContext';

const Home = () => {
	return (
		<>
			<TabTitle title="sycDev&#127808;" />
			<div
				className="
					container
					mx-auto
					"
			>
				<HomeBanner />

				<FeaturedProjectsProvider>
					<FeaturedProjects />
				</FeaturedProjectsProvider>

				<div className="flex justify-center">
					<Link
						to="/projects"
						className="
							font-general-medium
							flex
							items-center
							px-6
							py-3
							rounded-lg
							shadow-lg
							hover:shadow-xl
							bg-emerald-500
							hover:bg-emerald-600
							focus:ring-1
							focus:ring-emerald-900
							text-white
							text-lg
							sm:text-xl
							duration-300
							"
						aria-label="More Projects"
					>
						<button>More Projects</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Home;
