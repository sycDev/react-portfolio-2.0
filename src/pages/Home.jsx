import React from 'react';
import TabTitle from '../components/common/TabTitle';
import HomeBanner from '../components/home/HomeBanner';

const Home = () => {
	return (
		<>
			<TabTitle title="sycDev&#127808;" />
			<div className="container mx-auto">
				<HomeBanner />
			</div>
		</>
	);
};

export default Home;
