import React, { useState, useRef } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import FormInput from '../reusable/FormInput';

const FORM_ENDPOINT = process.env.REACT_APP_CONTACT_FORM_URL;

const ContactForm = () => {
	const [loading, setLoading] = useState(false);

	const formRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		const inputs = Array.from(
			e.target.querySelectorAll(
				'input:not([type="submit"]):not([name="_gotcha"]), textarea'
			)
		);
		const data = {};

		let valid = true;
		for (const element of inputs) {
			if (element.name) {
				data[element.name] = element.value;
			}

			if (element.value === "") {
				valid = false;
			}
		}

		if (!valid) {
			toast.error("Please fill in required fields");
		} else {
			submitForm(e, data);
		}
	};

	const submitForm = (e, data) => {
		setLoading(true);

		fetch(FORM_ENDPOINT, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				// It's likely a spam/bot request, so bypass it to validate via captcha
				if (response.status === 422) {
					e.target.setAttribute('target', '_blank');
					e.target.submit();
					// Clear the entire form after success
					if (formRef.current) {
						formRef.current.reset();
					}
					throw new Error('Please finish the captcha challenge');
				}

				if (response.status !== 200) {
					throw new Error(response.statusText);
				}

				return response.json();
			})
			.then(() => {
				toast.success("Thank You! We'll be in touch soon.");

				// Clear the entire form after success
				if (formRef.current) {
					formRef.current.reset();
				}
			})
			.catch((err) => {
				toast.error(err.toString());
			})
			.finally(() => setLoading(false));
	};

	return (
		<div
            className="
                w-full
                lg:w-1/2
                "
        >
			<div className="leading-loose">
				<div>
                    <Toaster />
                </div>
				<form
					ref={formRef}
					action={FORM_ENDPOINT}
					method="POST"
					onSubmit={handleSubmit}
					className="
						max-w-xl
						m-4
						p-6
						sm:p-10
						bg-secondary-light
						dark:bg-secondary-dark
						rounded-xl
						shadow-xl
						text-left
						"
				>
					<p
                        className="
                            font-general-medium
                            text-primary-dark
                            dark:text-primary-light
                            text-2xl
                            mb-8
                            "
                    >
						Get in Touch
					</p>

					<FormInput
						inputLabel="Name *"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>

					<FormInput
						inputLabel="Email *"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your Email"
						ariaLabelName="Email"
					/>

					<FormInput
						inputLabel="Subject *"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
					/>

					<div className="mt-6">
						<label
							className="
                                block
                                text-lg
                                text-primary-dark
                                dark:text-primary-light
                                mb-2
                                "
							htmlFor="message"
						>
							Message *
						</label>
						<textarea
							className="
								w-full
								px-5
								py-2
								border
								border-gray-300
								dark:border-primary-dark
								border-opacity-50
								focus:border-emerald-500
								focus:ring-emerald-500
								text-primary-dark
								dark:text-secondary-light
								bg-ternary-light
								dark:bg-ternary-dark
								rounded-md
								shadow-sm
								text-md
								"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<input
                        type="text"
                        name="_gotcha"
                        tabIndex="-1"
                        autoComplete="off"
                        style={{ display: 'none' }}
                    />

					<div
						className="
							font-general-medium
							w-40
							px-4
							py-2.5
							text-white
							text-center
							font-medium
							tracking-wider
							bg-emerald-500
							hover:bg-emerald-600
							focus:ring-1
							focus:ring-emerald-900
							rounded-lg
							mt-6
							duration-500
							"
					>
						<button
							type="submit"
							aria-label="Send Message"
							disabled={loading}
						>
							{loading ? 'Sending...' : 'Send Message'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
