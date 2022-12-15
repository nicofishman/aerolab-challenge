import React, { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from 'react';

import { User } from '../types';

export interface DataContextType {
    myInfo: User;
    setMyInfo: React.Dispatch<React.SetStateAction<User>>;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider: FC<PropsWithChildren> = ({ children }) => {
    const [myInfo, setMyInfo] = useState<User>({} as User);

    const value: DataContextType = useMemo(() => {
        return {
            myInfo,
            setMyInfo,
        };
    }, [myInfo]);

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
