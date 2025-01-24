import React from 'react';

const selectOptions = [
	'Web Application',
	'Windows Application',
	'Static Website',
	'Web Portal',
	'CLI Application',
	'Prototype',
];

const ProjectsFilter = ({ setSelectProject }) => {
	return (
		<div className="relative">
			<select
				onChange={(e) => {
					setSelectProject(e.target.value);
				}}
				className="
					font-general-medium 
					w-full
					px-4
					sm:px-6
					py-2
					sm:mt-0
					mt-2
					border
                    border-gray-200
					dark:border-secondary-dark
                    focus:border-emerald-500
					focus:ring-emerald-500
					rounded-lg
					text-sm
					sm:text-md
					dark:font-medium
					bg-secondary-light
					dark:bg-ternary-dark
					text-primary-dark
					dark:text-ternary-light
                    after::border-emerald-500
					"
				title="Select Project Category"
			>
				<option
					className="
                        text-normal
                        sm:text-md
                        "
					value=""
				>
					All Projects
				</option>

				{selectOptions.map((option) => (
					<option
						className="
                            text-normal
                            sm:text-md
                            "
						value={option}
						key={option}
					>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default ProjectsFilter;
