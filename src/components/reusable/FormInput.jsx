import React from 'react';

const FormInput = ({
	inputLabel,
	labelFor,
	inputType,
	inputId,
	inputName,
	placeholderText,
	ariaLabelName,
}) => {
	return (
		<div
            className="
                mb-4
                font-general-regular
                "
        >
			<label
				className="
                    block
                    mb-1
                    text-lg
                    text-primary-dark
                    dark:text-primary-light
                    "
				htmlFor={labelFor}
			>
				{inputLabel}
			</label>
			<input
				className="
					w-full
					px-5
					py-2
					border
					border-gray-300
					border-opacity-50
					dark:border-primary-dark
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
				type={inputType}
				id={inputId}
				name={inputName}
				placeholder={placeholderText}
				aria-label={ariaLabelName}
				required
			/>
		</div>
	);
};

export default FormInput;
