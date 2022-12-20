import React, { FC } from 'react';

import { useData } from '../../context/DataContext';

import ProductCard from './ProductCard';

interface ProductListProps {

}

const ProductList: FC<ProductListProps> = () => {
    const { selectedFilter, selectedSort, products } = useData();

    const productsFiltered = selectedFilter === 'All Products' ? products : products.filter(product => product.category === selectedFilter);
    const productsSorted = selectedSort === 'Most Recent' ? productsFiltered : selectedSort === 'Lowest Price' ? productsFiltered.sort((a, b) => a.cost - b.cost) : productsFiltered.sort((a, b) => b.cost - a.cost);

    

    return (
        <>
            {
                productsSorted.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))
            }
        </>
    );
};

export default ProductList;
