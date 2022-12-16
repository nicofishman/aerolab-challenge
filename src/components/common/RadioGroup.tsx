import React, { FC, useState } from 'react';
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react';
import classNames from 'classnames';
import Image from 'next/image';

import { addPoints } from '../../server/Api';
import { useData } from '../../context/DataContext';

import { BrandButton } from './BrandButton';
import { getMe } from './../../server/Api';

interface RadioGroupProps {
    buttons: string[];
    label: string;
}

const RadioGroup: FC<RadioGroupProps> = ({buttons, label}) => {
    const {setMyInfo} = useData();
    
    const addPointsToWallet = async (value: number) => {
        const res = await addPoints(value);

        if (res) {
            const myNewInfo = await getMe();

            setMyInfo(myNewInfo);
        }
    };


    const [selected, setSelected] = useState(buttons[0]!);

    return (
        <div className='w-full'>
            <HeadlessRadioGroup value={selected} onChange={setSelected}>
                <HeadlessRadioGroup.Label className="sr-only">{label}</HeadlessRadioGroup.Label>
                <div className="flex flex-row justify-between w-full">
                    {
                        buttons.map((button, index) => (
                            <HeadlessRadioGroup.Option
                                key={index}
                                className={({ active, checked }) =>
                                    classNames(
                                        checked || active ? 'bg-brandGradient' : 'bg-brand-light-2',
                                        'relative rounded-lg shadow-md px-5 py-2 cursor-pointer flex focus:outline-none'
                                    )
                                }
                                value={button}
                            >
                                {({ active, checked }) => (
                                    <>
                                        <span className={`${checked || active ? 'text-neutral-100' : 'bg-brandGradient text-transparent bg-clip-text'} text-l1`}>
                                            {button}
                                        </span>
                                    </>
                                )}
                            </HeadlessRadioGroup.Option>
                        ))
                    }
                </div>
            </HeadlessRadioGroup>
            <BrandButton className='flex gap-2 justify-center mt-6' onClick={() => addPointsToWallet(Number(selected))}>
                <Image alt='kiteLogo' className='md:w-logo md:h-logo h-logoResponsive w-logoResponsive' height={24} src={'/img/icons/Icons-10.png'} width={24}/>
                <span className='text-l1 font-medium'>Add Points</span>
            </BrandButton>
        </div>
    );
};

export default RadioGroup;
