import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import CustomNavLink from './CustomNavLink';

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="
                sm:container
                sm:mx-auto
                "
		>
			<div
                className="
                    z-10
                    max-w-screen-lg
                    xl:max-w-screen-xl
                    block
                    sm:flex
                    sm:justify-between
                    sm:items-center
                    py-6
                    "
            >
				<div
                    className="
                        flex
                        justify-between
                        items-center
                        px-4
                        sm:px-0
                        "
                >
					<div>
						<Link
							to="/"
							aria-label="sycDev"
						>
							<div
                                className="
                                    flex
                                    items-center
                                    "
                            >
								<div className="mr-3">
									<img src="/logo192.png" alt="Logo" width="40px" />
								</div>
								<div
                                    className="
                                        title-font
                                        font-semibold
                                        text-xl
                                        dark:hover:text-secondary-light
                                        "
                                >
									<span
                                        className="
                                            text-primary-dark
                                            dark:text-primary-light
                                            "
                                    >
                                        syc
                                    </span>
									<span
                                        className="
                                            text-emerald-500
                                            hover:text-emerald-600
                                            "
                                    >
                                        Dev
                                    </span>
								</div>
							</div>
						</Link>
					</div>

					<div
                        className="
                            sm:hidden
                            flex
                            "
                    >
						{/* Theme Switcher (Mobile View) */}
						<div
							onClick={() => setTheme(activeTheme)}
							aria-label="Theme Switcher"
							className="
                                block
                                me-5
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-3
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
						>
							{activeTheme === 'dark' ?
                                (
                                    <FiMoon
                                        className="
                                            text-ternary-dark
                                            hover:text-gray-400
                                            dark:text-ternary-light
                                            dark:hover:text-primary-light
                                            text-xl
                                            "
                                    />
                                ) : (
                                    <FiSun
                                        className="
                                            text-gray-200
                                            hover:text-gray-50
                                            text-xl
                                            "
                                    />
                                )
                            }
						</div>

						{/* Hamburger Menu (Mobile View) */}
						<button
							onClick={toggleMenu}
							type="button"
							aria-label="Hamburger Menu"
                            className="focus:outline-none"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 30"
								className="
                                    h-7
                                    w-7
                                    fill-current
                                    text-secondary-dark
                                    dark:text-ternary-light
                                    "
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header Links (Mobile View) */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<CustomNavLink to="/projects" label="Projects" />
					<CustomNavLink to="/about" label="About" />
					<CustomNavLink to="/skills" label="Skills" />
					<CustomNavLink to="/contact" label="Contact" />
				</div>

				{/* Header Links (Desktop View) */}
				<div
                    className="
                        font-general-medium
                        hidden
                        m-0
                        sm:ml-4
                        mt-5
                        sm:mt-3
                        sm:flex
                        p-5
                        sm:p-0
                        justify-center
                        items-center
                        shadow-lg
                        sm:shadow-none
                        "
                >
					<CustomNavLink to="/projects" label="Projects" />
					<CustomNavLink to="/about" label="About" />
					<CustomNavLink to="/skills" label="Skills" />
					<CustomNavLink to="/contact" label="Contact" />
				</div>

				{/* Header Right Section */}
				<div
                    className="
                        hidden
                        sm:flex
                        justify-between
                        items-center
                        flex-col
                        md:flex-row
                        "
                >
					{/* Theme Switcher (Desktop View) */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="
                            ml-8
                            bg-primary-light
                            dark:bg-ternary-dark
                            p-3
                            shadow-sm
                            rounded-xl
                            cursor-pointer
                            "
					>
						{activeTheme === 'dark' ? (
							<FiMoon
                                className="
                                    text-ternary-dark
                                    hover:text-gray-400
                                    dark:text-ternary-light
                                    dark:hover:text-primary-light
                                    text-xl
                                    "
                            />
						) : (
							<FiSun
                                className="
                                    text-gray-200
                                    hover:text-gray-50
                                    text-xl
                                    "
                            />
						)}
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default AppHeader;
