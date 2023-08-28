import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Ripple, initTE } from 'tw-elements';
import PrimaryButton from '../reusable/PrimaryButton';
import SecondaryButton from '../reusable/SecondaryButton';

const ProjectSingle = ({
    id,
    title,
    timeline,
    category,
    summary,
    thumbnail,
    github,
    demo
}) => {
	useEffect(() => {
		initTE({ Ripple });
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<div className="relative">
				<div
                    className="
                        mb-3
                        md:flex
                        items-center
                        md:space-x-4
                        "
                >
					<div
                        className="
                            flex
                            items-center
                            space-x-4
                            md:space-x-2 
                            d:space-x-reverse
                            "
                    >
						<div
                            className="
                                flex
                                items-center
                                justify-center
                                w-10
                                h-10
                                rounded-full
                                bg-white
                                shadow
                                md:order-1
                                "
                        >
							<svg 
                                className="fill-emerald-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                            >
								<path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
							</svg>
						</div>
						<time
                            className="
                                font-caveat
                                font-medium
                                text-lg
                                text-emerald-500
                                md:w-28
                                "
                        >
							{timeline}
						</time>
					</div>
					<div
                        className="
                            text-slate-500
                            dark:text-slate-200
                            ml-14
                            "
                    >
						<div
                            className="
                                hidden
                                md:flex
                                md:items-center
                                "
                        >
							<span
                                className="
                                    text-xl
                                    text-slate-900
                                    dark:text-neutral-50
                                    font-bold
                                    "
                            >
								{title}
							</span>
							<span
								className="
									ml-2
									inline-block
									whitespace-nowrap
									rounded-full
									bg-success-100
									px-[0.65em]
									pb-[0.25em]
									pt-[0.35em]
									text-center
									align-baseline
									text-[0.75em]
									font-bold
									leading-none
									text-success-700
									"
							>
								{category}
							</span>
						</div>
						<div
                            className="
                                block
                                md:hidden
                                items-center
                                mb-2
                                "
                        >
							<span
                                className="
                                    text-xl
                                    text-slate-900
                                    dark:text-neutral-50
                                    font-bold
                                    "
                            >
								{title}
							</span>
							<br/>
							<span
								className="
									whitespace-nowrap
									rounded-full
									bg-success-100
									px-[0.65em]
									pb-[0.25em]
									pt-[0.35em]
									text-center
									text-[0.75em]
									font-bold
									leading-none
									text-success-700
									"
							>
								{category}
							</span>
						</div>
						{summary}
					</div>
				</div>
				<div
					className="
						bg-white
						dark:bg-secondary-dark
						p-4
						rounded
						border
						border-slate-200
						dark:border-ternary-dark
						text-slate-500
						shadow
						ml-14
						md:ml-44
						"
				>
					<div>
						<img
							src={thumbnail}
							className="
                                border-none
                                w-full
                                "
							alt={title}
						/>
					</div>
					<div
                        className="
                            flex
                            justify-center
                            mt-2
							p-2
                            "
                    >
						<PrimaryButton
							link={"/projects/details/" + id}
							title="Details"
							className="
                                w-full
								p-2
                                "
						/>

						{github ?
							(
								<SecondaryButton
									openInNewTab
									link={github}
									title="GitHub"
									className="
                                        w-full
                                        p-2
                                        ms-3
                                        "
								/>
							)
							: null
						}

						{demo ?
							(
								<SecondaryButton
									openInNewTab
									link={demo}
									title="Demo"
									className="
                                        w-full
                                        p-2
                                        ms-3
                                        "
								/>
							)
							: null
						}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectSingle;
