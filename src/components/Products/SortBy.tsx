import React, { FC } from 'react';

import SortButtons from './SortButtons';

interface SortByProps {

}

const SortBy: FC<SortByProps> = () => {
    return (
        <div className='md:pl-20 pl-0 flex gap-4 items-center'>
            <span className='text-l1 text-neutral-600 hidden md:block'>Sort by: {' '}</span>
            <SortButtons />
        </div>
    );
};

export default SortBy;
