import React, { useContext } from 'react';
import SkillsContext from '../../context/SkillsContext';
import SkillSingle from './SkillSingle';

const SkillCategory = ({ title, skills }) => {
	const { skillsData } = useContext(SkillsContext);
	const categorySkills = skillsData[skills];

	return (
		<>
			<p
                className="
                    font-general-small
                    text-xl
                    sm:text-2xl
                    text-primary-dark
                    dark:text-primary-light
                    "
            >
				{title}
			</p>
			<div
                className="
                    grid
                    grid-cols-2
                    sm:grid-cols-4
                    mt-3
                    gap-2
                    "
            >
				{categorySkills.map((skill) => (
					<SkillSingle
						key={skill.id}
						title={skill.title}
						image={skill.img}
						link={skill.link}
					/>
				))}
			</div>
		</>
	);
};

export default SkillCategory;
