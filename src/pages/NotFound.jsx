import React from 'react';
import NotFoundImg from '../images/404.svg';
import TabTitle from '../components/common/TabTitle';
import SecondaryButton from '../components/reusable/SecondaryButton';

const NotFound = () => {
    return (
        <>
            <TabTitle title="sycDev&#127808; | 404 Not Found" />
            <div
                className="
                container
                flex-row
                text-center
                items-center
                mx-auto
                py-5
                lg:py-10
                lg:mt-10
                "
            >
                <img
                    src={NotFoundImg}
                    alt="Page Not Found"
                    className="
                        object-contain
                        h-64
                        w-96
                        mx-auto
                        mb-8
                        " 
                />
                <p
                    className="
                        mb-8
                        text-primary-dark
                        dark:text-primary-light
                        "
                >
                    Sorry, page not found
                </p>
                <SecondaryButton
                    link="/"
                    title="Back to Home"
                />
            </div>
        </>
    );
};

export default NotFound;
