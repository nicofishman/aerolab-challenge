import classNames from 'classnames';
import Image from 'next/image';
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
            <Image alt={alt} className={classNames('w-full h-auto', className)} height={1000} src={desktopSrc} width={1000} />
        </picture>
    );
};

export default ResponsiveImage;
