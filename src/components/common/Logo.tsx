import React, { FC } from 'react';

import ResponsiveImage from './ResponsiveImage';

interface LogoProps {

}

const Logo: FC<LogoProps> = () => {
    return (
        <ResponsiveImage alt='Logo' desktopSrc={'img/logoDesktop.svg'} mobileSrc={'img/logoResponsive.svg'} />
    );
};

export default Logo;
