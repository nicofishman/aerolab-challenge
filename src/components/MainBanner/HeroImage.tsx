import React, { FC } from 'react';
import Image from 'next/image';

import { tw } from '../../utils/tw';
import ResponsiveImage from '../common/ResponsiveImage';

interface HeroImageBackgroundProps {
}

const HeroImageBackground: FC<HeroImageBackgroundProps> = () => {
    return (
        <div className='relative mx-auto md:mx-0 w-full max-w-[580px] md:max-w-none h-full md:mt-20'>
            <Back>
                <div className="top-0 left-0 w-full h-full z-[1]">
                    <ResponsiveImage alt='hero' className='relative w-[100%] md:bottom-40 -bottom-16 z-10' desktopSrc='/img/hero-desktop.png' mobileSrc='/img/hero-responsive.png'/>
                    {
                        [...Array(40)].map((_, i) => (
                            <Image key={i} alt='wave' className='absolute w-full hidden md:block' height={148} src={'/img/wave.svg'} style={{top: i * 10}} width={264} />
                        ))
                    }
                </div>
            </Back>
        </div>
    );
};

export default HeroImageBackground;

const Back = tw.div`
    w-full h-[70%] md:bg-brandGradient/50 rounded-[100px] bottom-0 relative bg-white
`;