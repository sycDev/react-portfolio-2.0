import React from 'react';
import { motion } from 'framer-motion';
import developer from '../../images/home/developer.svg';
import ActionButton from '../reusable/ActionButton';

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
					A Year 2 Software Engineering 
					<br/>
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
					<ActionButton
						link="/about"
						title={
							<span
								className="
									text-sm
									sm:text-lg
									font-general-medium
									duration-100
									"
							>
								Get to Know Me
							</span>
						}
						className="
							w-36
							sm:w-48
							mt-6
							md:mt-12
							"
					/>
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
