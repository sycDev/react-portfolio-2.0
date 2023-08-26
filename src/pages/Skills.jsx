import React from 'react';
import { motion } from 'framer-motion';
import { SkillsProvider } from '../context/SkillsContext';
import TabTitle from '../components/common/TabTitle';
import SkillCategory from '../components/skills/SkillCategory';

const Skills = () => {
	const skillsCategories = [
		{ title: 'Programming Languages', skills: 'ProgrammingLanguages' },
		{ title: 'Front-end Development', skills: 'FrontendDevelopment' },
		{ title: 'Back-end Development', skills: 'BackendDevelopment' },
		{ title: 'Databases', skills: 'Databases' },
		{ title: 'Others', skills: 'Others' },
	];

	return (
		<>
			<TabTitle title="sycDev&#127808; | My Skills" />
			<SkillsProvider>
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
					<div
						className="
							mt-10
							sm:mt-20
							"
					>
						<p
							className="
								mb-5
								font-general-medium
								text-2xl
								sm:text-3xl
								text-center
								text-primary-dark
								dark:text-primary-light
                            "
						>
							Technical Skills
						</p>

						{skillsCategories.map((category) => (
							<SkillCategory
								key={category.title}
								title={category.title}
								skills={category.skills}
							/>
						))}
					</div>
				</motion.div>
			</SkillsProvider>
		</>
	);
};

export default Skills;
