import classNames from 'classnames';
import React, { FC } from 'react';
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react';

import { useData } from '../../context/DataContext';

import { filterButtons } from './../../utils/constants';

interface SortButtonsProps {

}

const SortButtons: FC<SortButtonsProps> = () => {
    const {selectedSort, setSelectedSort} = useData();

    return (
        <div className='flex w-auto overflow-x-auto md:mt-0 mt-6'>
            <HeadlessRadioGroup value={selectedSort} onChange={setSelectedSort}>
                <HeadlessRadioGroup.Label className="sr-only">{selectedSort}</HeadlessRadioGroup.Label>
                <div className="flex flex-row justify-between w-full gap-4">
                    {
                        filterButtons.map((button, index) => (
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
                                        <span className={`${checked || active ? 'text-neutral-100' : 'bg-brandGradient text-transparent bg-clip-text'} text-l1 whitespace-nowrap`}>
                                            {button}
                                        </span>
                                    </>
                                )}
                            </HeadlessRadioGroup.Option>
                        ))
                    }
                </div>
            </HeadlessRadioGroup>
        </div>
    );
};

export default SortButtons;
