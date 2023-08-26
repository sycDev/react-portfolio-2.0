import React from 'react';

const SecondaryButton = ({ openInNewTab, link, title, className }) => {
    const target = openInNewTab ? '_blank' : '_self';

    return (
        <a
			href={link}
			target={target}
			rel="noreferrer"
			type="button"
			className={`
				text-center
				inline-block
				rounded
				border-2
				border-emerald
				text-xs
				font-medium
				uppercase
				leading-normal
				text-emerald
				dark:text-neutral-50
				transition
				duration-150
				ease-in-out
				hover:border-emerald-600
				hover:bg-neutral-500
				hover:bg-opacity-10
				hover:text-emerald-600
				focus:border-emerald-600
				focus:text-emerald-600
				focus:outline-none
				focus:ring-0
				active:border-emerald-700
				active:text-emerald-700
				dark:hover:bg-neutral-100
				dark:hover:bg-opacity-10
				${className}
				`}
			data-te-ripple-init
		>
			{title}
		</a>
    );
};

export default SecondaryButton;
