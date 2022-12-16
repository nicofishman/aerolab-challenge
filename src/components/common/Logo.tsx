import React, { FC } from 'react';

interface LogoProps {

}

const Logo: FC<LogoProps> = () => {
    return (
        <picture>
            <source media={'(min-width: 1024px)'} srcSet={'/img/logoDesktop.svg'} />
            <source media={'(max-width: 500px)'} srcSet={'/img/logoResponsive.svg'} />
            <img alt={'logo'} className='w-auto h-full' src={'/img/logoDesktop.svg'} />
        </picture>
    );
};

export default Logo;
