import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import Navbar from '../components/Navbar/Navbar';
import { useData } from '../context/DataContext';
import { Product, User } from '../types';
import { getMe, getProducts } from '../server/Api';
import MainBanner from '../components/MainBanner/MainBanner';
import Walkthrough from '../components/Walkthrough/Walkthrough';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';

interface HomeProps extends InferGetServerSidePropsType<typeof getServerSideProps> {

}

const Home: NextPage<HomeProps> = ({ myInfo, products }) => {
    const { setMyInfo, setProducts } = useData();

    useEffect(() => {
        setMyInfo(myInfo);
        setProducts(products);
    }, [myInfo, products, setMyInfo, setProducts]);

    return (
        <>
            <Head>
                <title>Aerolab NicoFish</title>
                <meta
                    content="Aerolab Challenge by Nico Fishman"
                    name="description"
                />
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
                <link href="/img/icons/Icons.png" rel="icon" />
            </Head>
            <main className={'bg-white w-full h-screen'}>
                <Navbar />
                <MainBanner />
                <Walkthrough />
                <Products />
                <Footer />
            </main>
            <Toaster
                position='bottom-left'
                reverseOrder={true}
                toastOptions={{
                    style: {
                        width: '100%',
                        maxWidth: '532px',
                    },
                    success: {
                        style: {
                            background: '#F7FAFC',
                            color: '#7C899C',
                            border: '2px solid #29CC74',
                            borderRadius: '10px',
                        },
                    },
                    error: {
                        style: {
                            background: '#F7FAFC',
                            color: '#7C899C',
                            border: '2px solid #F56565',
                            borderRadius: '10px',
                        },
                    },
                }}
            />
        </>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps<{myInfo: User, products: Product[]}> = async () => {
    const myInfo = await getMe();
    const products = await getProducts();    

    return {
        props: {
            myInfo,
            products,
        },
    };
};