import React, { useState, useEffect } from 'react';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

const Nav = () => {
    const [openNav, setOpenNav] = useState(false);
 
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);
 
    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center"> Home </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center"> Fundraise for </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center"> About us </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center"> How it works </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="tan"
                className="p-1 font-normal text-tan"
            >
                <a href="#" className="flex items-center"> Contact us </a>
            </Typography>
        </ul>
    );
    return (
        <div>
            <Navbar className="fixed z-50 py-1 px-4 lg:px-8 lg:py-2 bg-blue-purple shadow-2xl">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <Typography
                    as="span"
                    variant="small"
                    className="mr-4 cursor-pointer font-cursive text-[30px] font-bold"
                    >
                        <span>MetaFund</span>
                    </Typography>
                    <div className="hidden lg:block">
                        {navList}
                    </div>
                    <Button variant="gradient" size="sm" className="hidden lg:block bg-mint-cream ml-5 px-4 py-2 rounded-[5px]">
                        <span>Connect Wallet</span>
                    </Button>
                    <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                    >
                    {openNav ? (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                        </svg>
                    ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    )}
                    </IconButton>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <Button variant="gradient" size="sm" fullWidth className="mb-2 bg-mint-cream">
                    <span>Connect Wallet</span>
                    </Button>
                </MobileNav>
            </Navbar>
        </div>
    )
}

export default Nav;