import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';

interface BrandButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    children: ReactNode;
}

const BrandButton: FC<BrandButtonProps> = ({
    disabled,
    className,
    children,
    onClick,
}) => {
    return (
        <button
            className={classNames(
                disabled
                    ? 'bg-neutral-300 border-2 border-neutral-300 text-slate-500 cursor-default'
                    : 'bg-brandGradient text-white',
                'py-3 mx-auto w-full text-center rounded-2xl',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default BrandButton;
