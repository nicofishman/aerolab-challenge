import Image from 'next/image';
import React, { FC } from 'react';

import { tw } from '../../utils/tw';
import { BrandButton } from '../common/BrandButton';
import RadioGroup from '../common/RadioGroup';

import AeroCard from './AeroCard';

interface ModuleProps {

}

const Module: FC<ModuleProps> = () => {
    return (
        <Card>
            <div className='pb-5'>
                <span className='text-l1'>Add Balance</span>
            </div>
            <div className='pt-5 items-center flex flex-col'>
                <div className="mb-10">
                    <AeroCard />
                </div>
                <RadioGroup buttons={["1000", "5000", "7500"]} label='Add Points' />
                <BrandButton className='flex gap-2 justify-center mt-6'>
                    <Image alt='kiteLogo' className='md:w-logo md:h-logo h-logoResponsive w-logoResponsive' height={24} src={'/img/icons/Icons-10.png'} width={24}/>
                    <span className='text-l1 font-medium'>Add Points</span>
                </BrandButton>
            </div>
        </Card>
    );
};

export default Module;

const Card = tw.div`
    max-w-80 w-full h-auto border-[1px] border-neutral-300 rounded-2xl bg-white drop-shadow-md px-6 pt-4 pb-6 flex flex-col divide-y-[1px] divide-neutral-300 shadow-lg
`;