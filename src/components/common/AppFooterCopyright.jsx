import React from 'react';

const AppFooterCopyright = () => {
	return (
		<div
			className="
				font-general-regular
				flex
				justify-center
				items-center
				text-center
				"
		>
			<div
				className="
					text-lg
					text-ternary-dark
					dark:text-ternary-light
					"
			>
				&copy; {new Date().getFullYear()} sycDev
				<br/>
				<small>
					Design: 
					<a
						href="https://github.com/realstoman/react-tailwindcss-portfolio"
						target="__blank"
						className="
							hover:underline
							hover:text-emerald-600
							dark:hover:text-emerald-300
							ml-1
							duration-500
							"
					>
						React & Tailwind CSS Portfolio
					</a>
				</small>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
