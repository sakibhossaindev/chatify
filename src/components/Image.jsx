import React from 'react';

const Image = ({ src, alt = 'image', className = '', ...props }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            {...props}
        />
    );
};

export default Image;
