import classNames from 'classnames';
import React, { FC } from 'react';

interface ResponsiveImageProps {
    desktopSrc: string;
    mobileSrc: string;
    alt: string;
    className?: string;
}

const ResponsiveImage: FC<ResponsiveImageProps> = ({ alt, desktopSrc, mobileSrc, className }) => {
    return (
        <picture>
            <source media={'(max-width: 1024px)'} srcSet={mobileSrc} />
            <img alt={alt} className={classNames('w-full h-auto', className)} src={desktopSrc} />
        </picture>
    );
};

export default ResponsiveImage;
