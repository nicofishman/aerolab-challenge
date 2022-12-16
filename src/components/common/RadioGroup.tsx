import React, { FC, useState } from 'react';
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react';
import classNames from 'classnames';

interface RadioGroupProps {
    buttons: string[];
    label: string
}

const RadioGroup: FC<RadioGroupProps> = ({buttons, label}) => {

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

        </div>
    );
};

export default RadioGroup;
