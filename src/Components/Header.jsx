import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import "../App.css"

const Header = () => {

      const [openMobileMenu, setopenMobileMenu] = useState(false)
      const toggleMobileMenu = () => {
            setopenMobileMenu(!openMobileMenu);
      }
      return (
            <nav className='py-5 px-4 mx-auto max-w-7xl w-full flex justify-between items-center lg:bg-transparent bg-[#D01C28]'>
                  <div>
                        <a href="#" className="brand-logo">
                              <img src="/images/brand_logo.png" alt="Brand-Logo" srcset="" />
                        </a>
                  </div>
                  <div className='hidden md:block'>
                        <ul className='flex justify-center '>
                              <li>
                                    <a href="#" className='font-semibold text-base uppercase px-6 hover:text-[#D01C28] transition-all'> Menu</a>
                              </li>
                              <li>
                                    <a href="#" className='font-semibold text-base uppercase px-6  hover:text-[#D01C28] transition-all'> Information</a>
                              </li>
                              <li>
                                    <a href="#" className='font-semibold text-base uppercase px-6 hover:text-[#D01C28] transition-all'> About</a>
                              </li>
                              <li>
                                    <a href="#" className='font-semibold text-base uppercase px-6 hover:text-[#D01C28] transition-all'> Contact</a>
                              </li>
                        </ul>
                  </div>
                  <div className=" gap-3 md:hidden text-3xl flex justify-center items-center">
                        <button onClick={toggleMobileMenu}>
                              {openMobileMenu ? (<MdOutlineCancel />) : (<FiAlignJustify />)}

                        </button>
                        <div className={openMobileMenu ? "showMenu" : "closeMenu"}>
                              <ul className=' text-white'>
                                    <li>
                                          <a href="#" className='font-semibold text-base uppercase px-6'> Menu</a>
                                    </li>
                                    <li>
                                          <a href="#" className='font-semibold text-base uppercase px-6'> Information</a>
                                    </li>
                                    <li>
                                          <a href="#" className='font-semibold text-base uppercase px-6'> About</a>
                                    </li>
                                    <li>
                                          <a href="#" className='font-semibold text-base uppercase px-6'> Contact</a>
                                    </li>
                              </ul>
                        </div>
                        <div>
                        <button className='bg-black text-white py-1 px-2 text-sm font-normal'>
                              Login
                        </button>
                  </div>
                  </div>
                  <div className='hidden md:block'>
                        <button className='bg-[#D01C28] text-white py-2 px-5 font-semibold'>
                              Login
                        </button>
                  </div>
            </nav>
      )
}

export default Header
