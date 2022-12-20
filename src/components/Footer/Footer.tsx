import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { tw } from '../../utils/tw';

interface FooterProps {

}

const Footer: FC<FooterProps> = () => {
    return (
        <FooterContainer>
            <Link prefetch className='flex items-center gap-4' href={'https://github.com/nicofishman/aerolab-challenge'} target='_blank'>
                <Image alt='Github Logo' className='w-7 h-7' height={24} src='/img/icons/Icons-4.png' width={24} />
                <p className='text-l1 text-neutral-600'>View this repository</p>
            </Link>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = tw.footer`
    w-full h-28 md:h-[200px] flex justify-center bg-white mt-20 border border-t-neutral-300
`;