import React, { useContext } from 'react';
import AboutContext from '../../context/AboutContext';

const AboutBio = () => {
	const { about } = useContext(AboutContext);

	return (
		<div
			className="
				block
				sm:flex
				sm:gap-10
				mt-10
				sm:mt-20
				"
		>
			{/* Left Section */}
			<div
				className="
					w-full
					sm:w-1/4
					mb-7
					sm:mb-0
					"
			>
				<img src={about.Image} alt="About Me" />
				<div className="mt-2">
					{about.Quotes.map((quote) => (
						<p
							className="
								mb-1
								text-ternary-dark
								dark:text-ternary-light
								text-lg
								font-serif
								"
							key={quote.id}
						>
							{quote.text}
						</p>
					))}
				</div>
			</div>
			{/* Right Section */}
			<div
				className="
					font-general-regular
					w-full
					sm:w-3/4
					text-left
					"
			>
				<div>
					<p 
						className="
							text-3xl 
							font-general-semibold
							leading-relaxed
							text-ternary-dark
							dark:text-ternary-light
							"
					>
						{about.Openings.heading}
					</p>
					<p
						className="
							mb-4
							text-ternary-dark
							dark:text-ternary-light
							text-lg
							text-justify
							"
					>
						{about.Openings.paragraph}
					</p>
				</div>
				{about.Bio.map((bio) => (
					<div key={bio.id}>
						<p
							className="
								text-xl
								font-general-semibold
								leading-relaxed
								text-ternary-dark
								dark:text-ternary-light
								"
						>
							{bio.heading}
						</p>
						<p
							className="
								mb-4
								text-ternary-dark
								dark:text-ternary-light
								text-lg
								text-justify
								"
						>
							{bio.paragraph}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default AboutBio;
