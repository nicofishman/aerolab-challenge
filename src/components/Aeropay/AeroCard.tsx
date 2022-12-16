import Image from 'next/image';
import React, { FC } from 'react';

import { useData } from '../../context/DataContext';
import { tw } from '../../utils/tw';

interface AeroCardProps {

}

const AeroCard: FC<AeroCardProps> = () => {
    const {myInfo} = useData();

    return (
        <Card>
            <div className='flex flex-col justify-between h-full z-10'>
                <div className='flex flex-row justify-between items-center'>
                    <span className='text-l1'>Aerocard</span>
                    <Image alt='kiteLogo' className='md:w-logo md:h-logo h-logoResponsive w-logoResponsive' height={24} src={'/img/icons/Icons-11.png'} width={24} />
                </div>
                <div className='flex flex-row justify-between'>
                    <span className='text-l2'>{myInfo.name}</span>
                    <span className='text-l2'>{`${new Date(myInfo.createDate).getMonth()}/${new Date(myInfo.createDate).getFullYear()}`}</span>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-[1]">
                <div className="relative">
                    {
                        [...Array(10)].map((_, i) => (
                            <Image key={i} alt='wave' className='absolute' height={148} src={'/img/wave.svg'} style={{top: i * 10}} width={264} />
                        ))
                    }
                </div>
            </div>
        </Card>
    );
};

export default AeroCard;

const Card = tw.div`
    relative bg-neutral-900 p-4 rounded-lg w-[264px] h-[148px] text-neutral-100
`;