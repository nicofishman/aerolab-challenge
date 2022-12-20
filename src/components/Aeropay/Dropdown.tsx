import { Popover, Transition } from '@headlessui/react';
import classNames from 'classnames';
import Image from 'next/image';
import { FC, Fragment } from 'react';

import { useData } from '../../context/DataContext';
import { tw } from '../../utils/tw';

import Module from './Module';

interface DropdownProps {
    className?: string;
}

const Dropdown: FC<DropdownProps> = ({className}) => {
    const { myInfo } = useData();
        

    return (
        <Popover as="div" className="relative">
            {({ open }) => (
                <Chip className={className || ''}>
                    <div className="gap-2 flex-1 flex items-center justify-between">
                        <Image alt='kite' className='logo' height={24} src={'/img/icons/Icons.png'} width={24}/>
                        <h3 className='text-l1 bg-clip-text bg-brandGradient text-transparent'>{myInfo.points && myInfo.points.toLocaleString()}</h3>
                    </div>
                    <Popover.Button className={'outline-none'}>
                        <Image alt='chevronDown' className={classNames('logo rotate-90 transition-transform outline-none duration-300', open && '-rotate-90')} height={24} src={'/img/icons/Icons-5.png'} width={24}/>
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Popover.Panel className={'absolute right-0 z-10 mt-16 w-screen max-w-xs transform top-0 origin-bottom-left'}>
                            <Module />
                        </Popover.Panel>
                    </Transition>
                </Chip>
            )}
        </Popover>
    );
};

export default Dropdown;

const Chip = tw.div`
w-hug h-hug bg-white border-[1px] border-neutral-300 rounded-full flex items-center justify-between drop-shadow-md py-2 px-4 gap-2 relative
`;
