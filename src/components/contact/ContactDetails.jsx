import React from 'react';
import { FiMapPin, FiMail } from 'react-icons/fi';
import ContactImg from '../../images/contact/contact.svg';

const contacts = [
	{
		id: 1,
		name: 'Penang, Malaysia',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'sinyi.20028@gmail.com',
		icon: <FiMail />,
	},
];

const ContactDetails = () => {
	return (
		<div
            className="
                w-full
                lg:w-1/2
                "
        >
			<div
                className="
                    text-left
                    max-w-xl
                    px-6
                    "
            >
				<img     
                    src={ContactImg}
                    alt="Contact"
                />
				<h2
                    className="
                        mt-12
                        mb-8
                        font-general-medium
                        text-2xl
                        text-primary-dark
                        dark:text-primary-light
                        "
                >
					Contact details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li
                            className="flex "
                            key={contact.id}
                        >
							<i
                                className="
                                    mr-4
                                    text-2xl
                                    text-gray-500
                                    dark:text-gray-400
                                    "
                            >
								{contact.icon}
							</i>
							<span
                                className="
                                    mb-4
                                    text-lg
                                    text-ternary-dark
                                    dark:text-ternary-light
                                    "
                            >
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
