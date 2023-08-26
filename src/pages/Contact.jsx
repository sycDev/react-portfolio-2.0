import React from 'react';
import { motion } from 'framer-motion';
import TabTitle from '../components/common/TabTitle';
import ContactForm from '../components/contact/ContactForm';
import ContactDetails from '../components/contact/ContactDetails';

const Contact = () => {
	return (
		<>
			<TabTitle title="sycDev&#127808; | Contact Me" />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.5,
					delay: 0.1,
				}}
				className="
				container
				mx-auto
				flex
				flex-col-reverse
				lg:flex-row
				py-5
				lg:py-10
				lg:mt-6
				"
			>
				<ContactForm />
				<ContactDetails />
			</motion.div>
		</>
	);
};

export default Contact;
