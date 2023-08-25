import React from 'react';

const PrimaryButton = ({ openInNewTab, link, title, className }) => {
    const target = openInNewTab ? '_blank' : '_self';

    return (
        <a
			href={link}
            target={target}
			rel="noreferrer"
			type="button"
			className={`
				px-4
				pb-[5px]
				pt-[6px]
				text-center
				inline-block
				rounded
				border-2
				border-transparent
				bg-emerald-500
				text-xs
				font-medium
				uppercase
				leading-normal
				text-white
				shadow-[0_4px_9px_-4px_#10b981]
				transition
				duration-150
				ease-in-out
				hover:bg-emerald-60
				hover:shadow-[0_8px_9px_-4px_rgba(16, 185, 129, 0.3),0_4px_18px_0_rgba(16, 185, 129, 0.2)]
				focus:bg-emerald-600
				focus:shadow-[0_8px_9px_-4px_rgba(16, 185, 129, 0.3),0_4px_18px_0_rgba(16, 185, 129, 0.2)]
				focus:outline-none
				focus:ring-0
				active:bg-emerald-700
				active:shadow-[0_8px_9px_-4px_rgba(16, 185, 129, 0.3),0_4px_18px_0_rgba(16, 185, 129, 0.2)]
				dark:shadow-[0_4px_9px_-4px_rgba(16, 185, 129, 0.5)]
				dark:hover:shadow-[0_8px_9px_-4px_rgba(16, 185, 129, 0.2),0_4px_18px_0_rgba(16, 185, 129, 0.1)]
				dark:focus:shadow-[0_8px_9px_-4px_rgba(16, 185, 129, 0.2),0_4px_18px_0_rgba(16, 185, 129, 0.1)]
				dark:active:shadow-[0_8px_9px_-4px_rgba(16, 185, 129, 0.2),0_4px_18px_0_rgba(16, 185, 129, 0.1)]
				${className}
				`}
			data-te-ripple-init
			data-te-ripple-color="light"
		>
			{title}
		</a>
    );
};

export default PrimaryButton;
