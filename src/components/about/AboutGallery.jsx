import React, { useContext } from 'react';
import AboutContext from '../../context/AboutContext';
import AboutSingleImage from '../reusable/Image';

const AboutGallery = () => {
	const { about } = useContext(AboutContext);

	return (
		<>
			<p
                className="
                    font-medium
                    text-lg
                    sm:text-3xl
                    text-center
                    mt-5
                    text-ternary-dark
                    dark:text-ternary-light
                    "
            >
				Some Sceneries Captured by Me
			</p>
			{/* Mobile View */}
			<div
                className="
                    block
                    md:hidden
                    container
                    mx-auto
                    py-4
                    px-5
                    lg:px-32
                    "
            >
				<div
                    className="
                        w-full
                        p-1
                        md:p-2
                        "
                >
					<AboutSingleImage
                        image={about.Gallery[0]}
                        alt="Scenery Photo 1"
                    />
				</div>
				<div
                    className="
                        w-full
                        p-1
                        md:p-2
                        "
                >
					<AboutSingleImage
                        image={about.Gallery[1]}
                        alt="Scenery Photo 2"
                    />
				</div>
				<div
                    className="
                        w-full
                        p-1
                        md:p-2
                        "
                >
					<AboutSingleImage
                        image={about.Gallery[2]}
                        alt="Scenery Photo 3"
                    />
				</div>
				<div
                    className="
                        w-full
                        p-1
                        md:p-2
                        "
                >
					<AboutSingleImage
                        image={about.Gallery[3]}
                        alt="Scenery Photo 4"
                    />
				</div>
				<div
                    className="
                        w-full
                        p-1
                        md:p-2
                        "
                >
					<AboutSingleImage
                        image={about.Gallery[4]}
                        alt="Scenery Photo 5"
                    />
				</div>
				<div
                    className="
                        w-full
                        p-1
                        md:p-2
                        "
                >
					<AboutSingleImage
                        image={about.Gallery[5]}
                        alt="Scenery Photo 6"
                    />
				</div>
			</div>
			{/* Desktop View */}
			<div
                className="
                    hidden
                    md:block
                    container
                    mx-auto
                    py-4
                    px-5
                    lg:px-32
                    "
            >
				<div
                    className="
                        -m-1
                        flex
                        flex-wrap
                        md:-m-2
                        "
                >
					<div
                        className="
                            flex
                            w-1/2
                            flex-wrap
                            "
                    >
						<div
                            className="
                                w-1/2
                                p-1
                                md:p-2
                                "
                        >
							<AboutSingleImage
                                image={about.Gallery[0]}
                                alt="Scenery Photo 1"
                            />
						</div>
						<div
                            className="
                                w-1/2
                                p-1
                                md:p-2
                                "
                        >
							<AboutSingleImage
                                image={about.Gallery[1]}
                                alt="Scenery Photo 2"
                            />
						</div>
						<div
                            className="
                                w-full
                                p-1
                                md:p-2
                                "
                        >
							<AboutSingleImage
                                image={about.Gallery[2]}
                                alt="Scenery Photo 3"
                            />
						</div>
					</div>
					<div
                        className="
                            flex
                            w-1/2
                            flex-wrap
                            "
                    >
						<div
                            className="
                                w-full
                                p-1
                                md:p-2
                                "
                        >
							<AboutSingleImage
                                image={about.Gallery[3]}
                                alt="Scenery Photo 4"
                            />
						</div>
						<div
                            className="
                                w-1/2
                                p-1
                                md:p-2
                                "
                        >
							<AboutSingleImage
                                image={about.Gallery[4]}
                                alt="Scenery Photo 5"
                            />
						</div>
						<div
                            className="
                                w-1/2
                                p-1
                                md:p-2
                                "
                        >
							<AboutSingleImage
                                image={about.Gallery[5]}
                                alt="Scenery Photo 6"
                            />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutGallery;
