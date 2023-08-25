import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CustomNavLink = ({ to, label }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            aria-label={label}
        >
            <div 
                className={`
                    block
                    sm:mx-4
                    mb-2
                    sm:py-2
                    text-left
                    text-lg 
                    ${isActive ? 
                        'text-emerald-600' : 
                        'text-primary-dark dark:text-ternary-light'
                    }
                    dark:text-emerald-600
                    hover:text-emerald-600
                    dark:hover:text-emerald-600
                    `}
            >
                {label}
            </div>
        </Link>
    );
};

export default CustomNavLink;
