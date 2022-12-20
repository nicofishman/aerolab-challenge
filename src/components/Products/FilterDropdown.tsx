import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import Image from 'next/image';
import React, { FC, Fragment } from 'react';

import { useData } from '../../context/DataContext';

interface FilterDropdownProps {
}

const FilterDropdown: FC<FilterDropdownProps> = () => {
    const {filterOptions, selectedFilter, setSelectedFilter} = useData();
    const opts = filterOptions.map(option => ({label: option, value: option}));

    return (
        <Menu as="div" className="relative inline-block text-left w-full max-w-sm">
            <div>
                <Menu.Button className="inline-flex w-full justify-between rounded-2xl border border-neutral-300 bg-white py-4 px-6 shadow-sm hover:bg-gray-50 focus:outline-none text-l1 items-center">
                    <span className='text-l1 text-neutral-600'>{selectedFilter}</span>
                    <Image alt="chevron-down" height={8} src="/img/icons/ChevronDown.png" width={8} />
                </Menu.Button>
            </div>
  
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-xl bg-white border border-neutral-300 focus:outline-black">
                    <div className="py-2">
                        {
                            opts.map((option) => (
                                <Menu.Item key={option.value}>
                                    <button
                                        className={classNames(
                                            'px-6 py-3 text-l1 text-neutral-600 w-full text-left'
                                        )}
                                        onClick={() => setSelectedFilter(option.value)}
                                    >
                                        {option.label}
                                    </button>
                                </Menu.Item>
                            ))
                        }
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default FilterDropdown;
