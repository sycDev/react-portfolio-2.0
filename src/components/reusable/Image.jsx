import React from 'react';

const Image = ({ image, alt }) => {
    return (
        <img
            src={image}
            alt={alt}
            className="
                block
                h-full
                w-full
                rounded-lg
                object-cover
                object-center
                "
        />
    );
};

export default Image;
