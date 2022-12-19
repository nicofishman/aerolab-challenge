import Image from 'next/image';
import React, { FC } from 'react';

import { tw } from '../../utils/tw';
import ResponsiveImage from '../common/ResponsiveImage';

import Card from './Card';

interface WalkthroughProps {

}

const Walkthrough: FC<WalkthroughProps> = () => {
    return (
        <Background>
            <Card 
                description='Browse our tech catalog with more than 20 top tech products'
                icon={ <Image alt={'Compass Logo'} className='logo-walkthrough' height={32} src={'/img/icons/Icons-1.png'} width={32}/> }
                image={ <ResponsiveImage alt='Walkthrough 1' desktopSrc='/img/walkthroug-1-desktop.png' mobileSrc='/img/walkthroug-1-responsive.png'/> }
                title='1—browse'
            />
            <Card 
                description='Exchange your hard earned AeroPoints for the item you want'
                icon={ <Image alt={'Cursor Logo'} className='logo-walkthrough' height={32} src={'/img/icons/Icons-2.png'} width={32}/> }
                image={ <ResponsiveImage alt='Walkthrough 2' desktopSrc='/img/walkthroug-2-desktop.png' mobileSrc='/img/walkthroug-2-responsive.png'/> }
                title='2—choose'
            />
            <Card 
                description='All done, you can relax! We’ll take care of delivery of your tech item!'
                icon={ <Image alt={'Star Logo'} className='logo-walkthrough' height={32} src={'/img/icons/Icons-3.png'} width={32}/> }
                image={ <ResponsiveImage alt='Walkthrough 2' desktopSrc='/img/walkthroug-3-desktop.png' mobileSrc='/img/walkthroug-3-responsive.png'/> }
                title='3—enjoy!'
            />
        </Background>
    );
};

export default Walkthrough;

const Background = tw.div`
    w-full h-auto py-8 bg-brandGradient/50 mt-6 px-5 flex md:px-20 gap-3 sm:flex-row flex-col
`;