import Image from 'next/image';
import { FC } from 'react';

import BrandButton from '../common/BrandButton';

import HeroImage from './HeroImage';



interface MainBannerProps {

}

const MainBanner: FC<MainBannerProps> = () => {
    return (
        <div className='w-full max-w-fill flex flex-col mx-auto md:flex-row'>
            <div className="flex-1 flex-col flex mt-28 items-center md:items-start ml-0 md:ml-5">
                <h3 className='text-l1 tracking-24 uppercase text-neutral-600'>Explore the</h3>
                <h1 className='font-black'>
                    <span className='title-l1 bg-brandGradient bg-clip-text text-transparent'>Tech</span> <br /> 
                    <span className='title-l1'>Zone</span>
                </h1>
                <h3 className='text-l1 mt-6 text-center md:text-left md:w-[80%] w-72 text-neutral-600'>
                Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.
                </h3>
                <div className="mt-16">
                    <BrandButton className='flex items-center px-10 py-6 gap-5 rounded-3xl'>
                        <span className='text-l1 uppercase'>View All Products</span>
                        <Image alt='arrow' className='w-[12px] h-[14px]' height={14} src={'/img/white_arrow.png'} width={12} />
                    </BrandButton>
                </div>
            </div>
            <div className="flex-1">
                <HeroImage />
            </div>
        </div>
    );
};

export default MainBanner;