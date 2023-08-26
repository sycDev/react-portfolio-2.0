import React, { createContext, useMemo, useState } from 'react';
import { aboutData } from '../data/aboutData';

const AboutContext = createContext();

export const AboutProvider = ({ children }) => {
	const [about, setAbout] = useState(aboutData);

	const memoizedValue = useMemo(() => {
		return {
			about, setAbout
		};
	}, [about, setAbout]);

	return (
		<AboutContext.Provider value={memoizedValue}>
			{children}
		</AboutContext.Provider>
	);
};

export default AboutContext;
