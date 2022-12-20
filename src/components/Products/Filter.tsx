import React, { FC } from 'react';

import FilterDropdown from './FilterDropdown';

interface FilterProps {

}
const Filter: FC<FilterProps> = () => {
    return (
        <div className='flex items-center md:w-1/3 w-full md:pr-20 pr-0 gap-4'>
            <span className='text-l1 hidden md:block text-neutral-600 whitespace-nowrap'>Filter by: {' '}</span>
            <FilterDropdown />
        </div>
    );
};

export default Filter;
