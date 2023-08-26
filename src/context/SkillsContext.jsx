import React, { createContext, useMemo, useState } from 'react';
import { skillsData as skillsDataJson } from '../data/skillsData';

const SkillsContext = createContext();

export const SkillsProvider = ({ children }) => {
	const [skillsData, setSkillsData] = useState(skillsDataJson);

    const memoizedValue = useMemo(() => {
        return {
            skillsData, setSkillsData,
        };
    }, [skillsData, setSkillsData]);

    return (
        <SkillsContext.Provider value={memoizedValue}>
            {children}
        </SkillsContext.Provider>
    );
};

export default SkillsContext;
