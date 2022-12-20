import React, { FC } from 'react';

import { tw } from '../../utils/tw';

import Filter from './Filter';
import ProductList from './ProductList';
import SortBy from './SortBy';
import Title from './Title';

interface ProductsProps {

}

const Products: FC<ProductsProps> = () => {
    return (
        <Container>
            <Title />
            <div className="flex w-full md:divide-x-[2px] divide-x-0 divide-neutral-300 mt-10 flex-col md:flex-row">
                <Filter />
                <SortBy />
            </div>
            <div className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-4 md2:grid-cols-3 sm:grid-cols-2 gap-6 justify-items-center">
                    <ProductList />
                </div>
            </div>
        </Container>
    );
};

export default Products;

const Container = tw.div`
w-full max-w-fill h-hug bg-white mx-auto mt-56 px-5 relative
`;