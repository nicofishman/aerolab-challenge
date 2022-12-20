import { FC, ReactNode } from 'react';
import { ToastType } from 'react-hot-toast';

import { tw } from '../../utils/tw';

interface ToastNotificationProps {
    message: string | ReactNode;
    type: ToastType;
}

const ToastNotification: FC<ToastNotificationProps> = ({ message, type }) => {

    const TYPE_TO_COLOR: {
        [key in Partial<ToastType>]: string;
    } = {
        success: 'border-green-500',
        error: 'border-red-500',
        loading: 'border-blue-500',
        blank: 'border-gray-500',
        custom: 'border-brandGradient'
    };

    return (
        <ToastDiv className={TYPE_TO_COLOR[type]}>
            <div className="flex items-center">
                <span className='text-neutral-600 text-l1'>{message}</span>
            </div>
            {/* <button onClick={() => toast.dismiss()}>
                <Image alt={'Close Toast'} className='w-logoResponsive md:w-logo h-auto' height={24} src={close} width={24} />
            </button> */}
        </ToastDiv>
    );
};

export default ToastNotification;

const ToastDiv = tw.div`
    max-w-[532px] w-full h-8 flex items-center justify-between pr-4
`;