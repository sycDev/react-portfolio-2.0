import { useContext } from 'react';
import { motion } from 'framer-motion';
import { FeaturedProjectsContext } from '../../context/FeaturedProjectsContext';
import PrimaryButton from '../reusable/PrimaryButton';
import SecondaryButton from '../reusable/SecondaryButton';

const FeaturedProjects = () => {
    const { projects } = useContext(FeaturedProjectsContext);

    return (
        <section
            className="
                py-5
                sm:py-10
                mt-5
                sm:mt-10
                "
        >
            <div className="text-center">
                <p
                    className="
                        font-general-semibold
                        text-2xl
                        sm:text-4xl
                        mb-10
                        text-ternary-dark
                        dark:text-ternary-light
                        "
                >
                    Featured Projects
                </p>
            </div>

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    mt-6
                    md:mb-0
                    xs:mb-6
                    gap-10
                    "
            >
                {projects.map((project) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, delay: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.7,
                            delay: 0.15,
                        }}
                        key={project.id}
                    >
                        <div
                            className="
                                rounded-xl
                                md:mb-0
                                xs:mb-10
                                bg-ternary-light
                                dark:bg-ternary-dark
                                h-full
                                "
                        >
                            <div>
                                <img
                                    src={project.thumbnail}
                                    className="rounded-t-xl border-none"
                                    alt={project.title}
                                />
                            </div>
                            <div
                                className="
                                    text-center
                                    px-4
                                    py-6
                                    h-[150px]
                                    "
                            >
                                <p
                                    className="
                                        font-general-medium
                                        text-lg
                                        md:text-xl
                                        text-ternary-dark
                                        dark:text-ternary-light
                                        mb-2
                                    "
                                >
                                    {project.title}
                                </p>
                                <p
                                    className="
                                        mb-5
                                        text-large
                                        text-ternary-dark
                                        dark:text-ternary-light
                                        "
                                >
                                    {project.summary}
                                </p>
                            </div>
                            <div 
                                className="
                                    text-center
                                    py-6
                                    "
                            >
                                <PrimaryButton
                                    link={"/projects/details/" + project.id}
                                    title="DETAILS"
                                    className="
                                        px-4
                                        pb-[5px]
                                        pt-[6px]
                                        me-3
                                        "
                                />
                                <SecondaryButton
                                    openInNewTab
                                    link={project.github}
                                    title="GITHUB"
                                    className="
                                        px-4
                                        pb-[5px]
                                        pt-[6px]
                                        "
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProjects;
