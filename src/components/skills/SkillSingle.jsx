import React from 'react';

const SkillSingle = ({ title, image, link }) => {
	return (
		<a
            href={link}
            target="_blank"
            rel="noreferrer"
        >
			<img
				src={image}
				className="
					w-64
					py-5
					px-10
					border
					bg-secondary-light
					dark:bg-ternary-dark
					border-ternary-light
					dark:border-ternary-dark
					shadow-sm
					hover:shadow-xl
					hover:bg-ternary-light
					hover:duration-[500ms]
					dark:hover:bg-ternary-light
					rounded-lg
					mb-8
					"
				alt={title}
				title={title}
			/>
		</a>
	);
};

export default SkillSingle;
