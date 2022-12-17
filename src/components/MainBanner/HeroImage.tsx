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
                <div className="absolute top-0 left-0 w-full h-full z-[1]">
                    <div className="relative">
                        {
                            [...Array(100)].map((_, i) => (
                                <Image key={i} alt='wave' className='absolute w-full' height={148} src={'/img/wave.svg'} style={{top: i * 10}} width={264} />
                            ))
                        }
                    </div>
                </div>
            </Back>
            <ResponsiveImage alt='hero' className='md:absolute relative w-[100%] bottom-0 z-10' desktopSrc='/img/hero-desktop.png' mobileSrc='/img/hero-responsive.png'/>
        </div>
    );
};

export default HeroImageBackground;

const Back = tw.div`
    w-full h-[90%] md:bg-brandGradient/50 rounded-[100px] bottom-0 absolute bg-white overflow-hidden
`;