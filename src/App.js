import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AppHeader from './components/common/AppHeader';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/about" element={<About />} />
							<Route path="/skills" element={<Skills />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</Suspense>
				</Router>
			</div>
		</AnimatePresence>
	);
}

export default App;
