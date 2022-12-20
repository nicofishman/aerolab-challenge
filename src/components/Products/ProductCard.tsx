import classNames from 'classnames';
import Image from 'next/image';
import React, { FC, useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';

import { useData } from '../../context/DataContext';
import { redeemProduct } from '../../server/Api';
import { Product } from '../../types';
import { tw } from '../../utils/tw';
import BrandButton from '../common/BrandButton';
import ToastNotification from '../common/ToastNotification';

import ResponsiveImage from './../common/ResponsiveImage';

interface ProductCardProps {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const { myInfo, refetchMyInfo } = useData();
    const [processing, setProcessing] = useState(false);
    const buyable = useMemo(() => myInfo?.points >= product.cost, [myInfo.points, product.cost]);

    

    const redeem = async () => {        
        if (processing || !buyable) return;
        
        setProcessing(true);
        const response = await redeemProduct(product._id);

        if (response.status === 200) {
            toast.success((t) => <ToastNotification message={<span>Canjeaste <b>{product.name}</b> exitosamente</span>} type={t.type} />);
        } else {
            toast.error('Error al canjear el producto');
        }

        await refetchMyInfo();
        setProcessing(false);
    };

    return (
        <div className='max-w-xs w-full sm:w-64 md:w-80'>
            <CardContainer>
                <div className="flex-1 flex items-center justify-center">
                    <ResponsiveImage alt={product.name} desktopSrc={product.img.hdUrl} mobileSrc={product.img.url} />
                </div>
                <div className='px-6 pb-6 pt-4 flex flex-col'>
                    <h2 className='text-l1 text-neutral-900'>{product.name}</h2>
                    <p className='text-l2 text-neutral-600 tracking-[0.07em] uppercase'>{product.category}</p>
                </div>
            </CardContainer>
            <div className="mt-4">
                <BrandButton
                    className={classNames(
                        'flex items-center gap-2 justify-center', 
                        processing && 'bg-brandGradient/70 cursor-default'
                    )}
                    disabled={!buyable}
                    onClick={redeem}
                >
                    {processing ? 
                        (
                            <span className='text-l1'>Processing...</span>
                        )
                        : (
                            <>
                                <span className='text-l1'>
                                    { buyable ?
                                        "Redeem for" : "You need"
                                    } {' '}
                                </span>
                                <Image alt='coin' height={20} src='/img/icons/Icons-10.png' width={20} />
                                <span className='text-l1'>
                                    {product.cost.toLocaleString()}
                                </span>
                            </>
                        )}
                </BrandButton>
            </div>
        </div>
    );
};

export default ProductCard;

const CardContainer = tw.div`
    w-full h-96 bg-white rounded-lg border border-neutral-300 flex-col flex divide-y divide-neutral-300
`;
