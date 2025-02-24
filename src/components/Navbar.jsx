import React from 'react'

import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <header className='content-center'>
        <nav className='flex flex-wrap justify-center space-x-8 text-sm font-extralight'>
            <Link to='/' className=''>
                <FaApple />
            </Link>
            <Link to='/store'>
                Store
            </Link>
            <Link to='/mac'>
                Mac
            </Link>
            <Link to='/ipad'>
                iPad
            </Link>
            <Link to='/iphone'>
                iPhone
            </Link>
            <Link to='/watch'>
                Watch
            </Link>
            <Link to='/vision'>
                Vision
            </Link>
            <Link to='/airpods'>
                AirPods
            </Link>
            <Link to='/tv-home'>
                TV & Home
            </Link>
            <Link to='/services'>
                Entertainment
            </Link>
            <Link to='/accessories'>
                Accessories
            </Link>
            <Link to='/support'>
                Support
            </Link>




            <CiSearch className=''/>
            <IoBagOutline className=''/>
        </nav>
    </header>
    )
}

export default Navbar
