import React from 'react';

const ActionButton = ({ openInNewTab, link, title, className }) => {
    const target = openInNewTab ? '_blank' : '_self';

	return (
		<a
			href={link}
			target={target}
			rel="noreferrer"
			className={`
				font-general-medium
				flex
				justify-center
				items-center
				mb-6
				sm:mb-0
				text-lg
				border
				border-emerald-200
				dark:border-ternary-dark
				py-2.5
				sm:py-3
				shadow-lg
				rounded-lg
				bg-emerald-50
				focus:ring-1
				focus:ring-emerald-900
				hover:bg-emerald-500
				text-gray-500
				hover:text-white
				duration-500
				${className}
				`}
		>
			{title}
		</a>
	);
};

export default ActionButton;
