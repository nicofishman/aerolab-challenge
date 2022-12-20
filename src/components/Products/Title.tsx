import React, { FC } from 'react';

interface TitleProps {

}

const Title: FC<TitleProps> = () => {
    return (
        <h1 className='md:space-x-3 space-x-2'>
            <span className='title-l2 bg-brandGradient text-transparent bg-clip-text'>Tech</span>
            <span className='title-l2 text-neutral-900'>Products</span>
        </h1>
    );
};

export default Title;
