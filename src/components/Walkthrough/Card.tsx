import React, { FC, ReactNode } from 'react';

import { tw } from '../../utils/tw';

interface CardProps {
    title: string;
    icon: ReactNode;
    description: string;
    image: ReactNode;
}   

const Card: FC<CardProps> = ({description,icon,image,title}) => {
    return (
        <OuterBorder>
            <div className="bg-illustration rounded-t-3xl">
                {image}
            </div>
            <div className="bg-white p-6 rounded-b-3xl">
                <div className="flex md:gap-6 gap-2 items-center">
                    {icon}
                    <span className='text-transparent bg-brandGradient bg-clip-text title-l3'>{title}</span>
                </div>
                <p className='text-l1 mt-3 text-neutral-600'>{description}</p>
            </div>
        </OuterBorder>
    );
};

export default Card;

const OuterBorder = tw.div`
    bg-white/70 rounded-[32px] p-3 w-full h-full border-[1px] border-neutral-300 z-20 flex flex-col shadow-md
`;
