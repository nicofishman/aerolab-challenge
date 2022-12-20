import React, { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from 'react';

import { FilterButtons } from '../utils/constants';
import { Product, User } from '../types';
import { getMe } from '../server/Api';

export interface DataContextType {
    myInfo: User;
    setMyInfo: React.Dispatch<React.SetStateAction<User>>;
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    filterOptions: Array<string>;
    selectedFilter: string;
    setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
    selectedSort: 'Most Recent' | 'Lowest Price' | 'Highest Price';
    setSelectedSort: React.Dispatch<React.SetStateAction<FilterButtons>>;
    refetchMyInfo: () => Promise<void>;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider: FC<PropsWithChildren> = ({ children }) => {
    const [myInfo, setMyInfo] = useState<User>({} as User);
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [selectedSort, setSelectedSort] = useState<FilterButtons>('Most Recent');


    const refetchMyInfo = async () => {
        const me = await getMe();

        setMyInfo(me);
    };

    const filterOptions = useMemo(() => { 
        const opt = ['All Products', ...Array.from(new Set<string>(products.map(product => product.category)))];

        setSelectedFilter(opt[0]!);

        return opt;
    }, [products]);

    const value: DataContextType = useMemo(() => {
        return {
            myInfo,
            products,
            setMyInfo,
            setProducts,
            filterOptions,
            selectedFilter,
            setSelectedFilter,
            selectedSort,
            setSelectedSort,
            refetchMyInfo
        };
    }, [myInfo, products, filterOptions, selectedFilter, selectedSort]);

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;

export const useData = () => {
    const context = useContext<DataContextType>(DataContext as any);

    if (context === undefined) {
        throw new Error('useData must be used within a DataContextProvider');
    }

    return context;
};
