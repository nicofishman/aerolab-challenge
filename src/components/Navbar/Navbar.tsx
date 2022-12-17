/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';

import { tw } from "../../utils/tw";
import Dropdown from '../Aeropay/Dropdown';
import Logo from '../common/Logo';


interface NabvarProps {

}

const Navbar: FC<NabvarProps> = () => {
    return (
        <Nav>
            <Logo />
            <Dropdown />
        </Nav>
    );
};

export default Navbar;

const Nav = tw.nav`
w-full max-w-fill h-hug flex items-center justify-between bg-white py-10 px-2 mx-auto z-30 relative
`;
