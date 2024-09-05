import React from 'react';
import { motion } from 'framer-motion';
import developer from '../../images/home/developer.svg';
import SecondaryButton from '../reusable/SecondaryButton';
import PrimaryButton from '../reusable/PrimaryButton';

const HomeBanner = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="
				flex
				flex-col
				sm:justify-between
				items-center
				sm:flex-row
				mt-12
				md:mt-2
				"
		>
			<div
				className="
					w-full
					md:w-1/3
					text-left
					"
			>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="
						font-general-semibold
						text-2xl
						lg:text-3xl
						xl:text-4xl
						text-center
						sm:text-left
						text-ternary-dark
						dark:text-primary-light
						"
				>
					Hi, I'm&nbsp;
					<span
						className="
							text-primary-dark
							dark:text-primary-light
							"
					>
						syc
					</span>
					<span className="text-emerald-500">
						Dev
					</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="
						font-general-medium
						mt-4
						text-md
						md:text-lg
						lg:text-xl
						xl:text-2xl
						text-center
						sm:text-left
						leading-normal
						text-gray-500
						dark:text-gray-200
						"
				>
					A Year 3 Software Engineering
					<br />
					DiGiT Student
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="
						flex
						justify-center
						sm:block
						"
				>
					<div
						className="
							mt-6
							space-x-3
							md:space-x-0
							lg:space-x-3
							"
					>
						<PrimaryButton
							title="Get to Know Me"
							link="/about"
							className="
								px-3
								py-2
								"
						/>
						<SecondaryButton
							title="My Skills"
							link="/skills"
							className="
								md:mt-3
								px-8
								py-2
								"
						/>
					</div>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="
					w-full
					sm:w-2/3
					text-right
					float-right
					mt-8
					sm:mt-0
					"
			>
				<img src={developer} alt="Developer" />
			</motion.div>
		</motion.section>
	);
};

export default HomeBanner;
