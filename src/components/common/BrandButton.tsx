import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';

interface BrandButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    children: ReactNode;
}

const BrandButton: FC<BrandButtonProps> = ({ disabled, className, children, onClick }) => {
    return (
        <button className={classNames(disabled ? 'bg-neutral-200 border-2 border-neutral-300 text-neutral-600 cursor-default' : 'bg-brandGradient', "py-3 mx-auto w-full text-center text-white rounded-2xl", className)} onClick={onClick}>
            {children}
        </button>
    );
};

export default BrandButton;
