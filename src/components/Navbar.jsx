import React, { useState } from "react";

import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isStoreHoverVisible, setIsStoreHoverVisible] = useState(false);

  return (
    <div className="">
      <header className="content-center text-black fixed top-0 left-0 z-50 bg-white/95 w-full py-3">
        <nav className="flex flex-wrap justify-center space-x-8 text-sm font-extralight">
          <Link to="/" className="">
            <FaApple className="text-xl"/>
          </Link>
          <Link 
            to="/store" 
            className=""
            onMouseEnter={() => setIsStoreHoverVisible(true)}
            onMouseLeave={() => setIsStoreHoverVisible(false)}
          >
            Store
          </Link>
          <Link to="/mac">Mac</Link>
          <Link to="/ipad">iPad</Link>
          <Link to="/iphone">iPhone</Link>
          <Link to="/watch">Watch</Link>
          <Link to="/vision">Vision</Link>
          <Link to="/airpods">AirPods</Link>
          <Link to="/tv-home">TV & Home</Link>
          <Link to="/services">Entertainment</Link>
          <Link to="/accessories">Accessories</Link>
          <Link to="/support">Support</Link>

          <CiSearch className="text-xl" />
          <IoBagOutline className="text-xl" />
        </nav>
      </header>
      <div 
        className={`storeHover ${isStoreHoverVisible ? 'block' : 'hidden'} fixed top-0 left-0 z-50 mt-[44px] bg-white/95 w-screen`}
        onMouseEnter={() => setIsStoreHoverVisible(true)}
        onMouseLeave={() => setIsStoreHoverVisible(false)}
      >
        <nav className="flex mt-3 justify-around">
          <div className=" text-sm">
            <h5 className="mb-3 text-neutral-500">Shop</h5>
            <div className="text-neutral-900 text-2xl font-semibold mb-4">
              <h3>Shop the Latest</h3>
              <h3>Mac</h3>
              <h3>iPad</h3>
              <h3>iPhone</h3>
              <h3>Apple Watch</h3>
              <h3>Apple Vision Pro</h3>
            </div>

          </div>
          <div className="text-sm">
            <h5 className="mb-3 text-neutral-500">Quick Links</h5>
            <div className="text-black font-semibold">
              <h4>Find a Store</h4>
              <h4>Order Status</h4>
              <h4>Apple Trade in</h4>
              <h4>Financing</h4>
              <h4>Personal Setup</h4>
            </div>

          </div>
          <div className="text-sm">
            <h5 className="mb-3 text-neutral-500">Shop Special Stores</h5>
            <div className="text-black font-semibold">
              <h4>Certified Refurbished</h4>
              <h4>Education</h4>
              <h4>Business</h4>
              <h4>Veterans and Military</h4>
              <h4>Government</h4>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;