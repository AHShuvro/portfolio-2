import { Link } from 'react-router-dom';
import './Header1.css'
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";



const Header1 = () => {

    const [dropdown, setDropdown] = useState('')


    return (
        <>

            <div className='bg-[#252734]  sticky top-0 z-50'>
                <div className='container'>
                    <div className="navbar font-poppins container">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#252734] rounded-box w-52">
                                    <div className='flex justify-between items-center text-[#858792]'>
                                        <Link to={'/'}><li className=' text-[1.12rem] leading-[4rem] text-[#858792]'>Home</li></Link>
                                        <FaAngleDown />
                                    </div>
                                    <div className=''>
                                        <div onMouseEnter={() => setDropdown('Service')}
                                            onMouseLeave={() => setDropdown('')} className='flex justify-between items-center text-[#858792]'>
                                            <Link to={'/service'}><li className=' text-[1.12rem] leading-[4rem]  text-[#858792]'>Service</li></Link>
                                            <FaAngleDown />
                                        </div>
                                        <div onMouseEnter={() => setDropdown('Service')}
                                            onMouseLeave={() => setDropdown('')} className={dropdown === "Service" ? ` pb-3 pl-4 pr-10` : `hidden`}>
                                            <Link to={'/service'}><li className=' text-[1.12rem] pt-3 text-[#858792]'>Service</li></Link>

                                            <Link to={'/serviceDetails/1'}><li className=' text-[1.12rem] pt-3 text-[#858792]'>Service Details</li></Link>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div onMouseEnter={() => setDropdown('Blog')}
                                                onMouseLeave={() => setDropdown('')} className='flex justify-between items-center text-[#858792]'>
                                            <Link to={'/blog'}><li className=' text-[1.12rem] leading-[4rem]  text-[#858792]'>Blog</li></Link>
                                            <FaAngleDown />
                                        </div>
                                        <div onMouseEnter={() => setDropdown('Blog')}
                                            onMouseLeave={() => setDropdown('')} className={dropdown === "Blog" ? ` pb-3 pl-4 pr-10` : `hidden`}>
                                            <Link to={'/blog'}><li className=' text-[1.12rem] pt-3 text-[#858792]'>Blog</li></Link>

                                            <Link to={'/blogDetails/1'}><li className=' text-[1.12rem] pt-3 text-[#858792]'>Blog Details</li></Link>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div onMouseEnter={() => setDropdown('Pages')}
                                                onMouseLeave={() => setDropdown('')} className='flex justify-between items-center text-[#858792]'>
                                            <Link to={'/about'}><li className=' text-[1.12rem] leading-[4rem]  text-[#858792]'>Pages</li></Link>
                                            <FaAngleDown />
                                        </div>
                                        <div onMouseEnter={() => setDropdown('Pages')}
                                            onMouseLeave={() => setDropdown('')} className={dropdown === "Pages" ? ` pb-3 pl-4 pr-10` : `hidden`}>
                                            <Link to={'/about'}><li className=' text-[1.12rem] pt-3 text-[#858792]'>About Us</li></Link>

                                            <Link to={'/project'}><li className=' text-[1.12rem] pt-3 text-[#858792]'>Project</li></Link>

                                            <Link to={'/projectDetails/1'}><li className=' text-[1.12rem] pt-3 text-[#858792]'>Project Details</li></Link>
                                        </div>
                                    </div>

                                    <div className='flex justify-between items-center text-[#858792]'>
                                        <li className=' text-[1.12rem] leading-[4rem] text-[#858792]'>Contact</li>
                                        <FaAngleDown />
                                    </div>
                                </ul>
                            </div>
                            <Link to={'/'}><img className='' src="assets/img/shuvro.png" alt="" /></Link>
                        </div>
                        <div className="hidden lg:flex">
                            <ul className='flex gap-12 items-center'>

                                <Link to={'/'}><li className=' text-[1.12rem] leading-[7.5rem] text-[#858792]'>Home</li></Link>

                                <div className=''>
                                    <Link to={'/service'}><li onMouseEnter={() => setDropdown('Service')}
                                        onMouseLeave={() => setDropdown('')} className=' text-[1.12rem]  text-[#858792]'>Service</li></Link>
                                    <div onMouseEnter={() => setDropdown('Service')}
                                        onMouseLeave={() => setDropdown('')} className={dropdown === "Service" ? `absolute bg-[#2A2C39] pb-3 pl-4 pr-10` : `hidden`}>
                                        <Link to={'/service'}><li className=' text-[1.12rem] pt-3 text-[#858792]'>Service</li></Link>

                                        <Link to={'/serviceDetails/1'}><li className=' text-[1.12rem] pt-3 text-[#858792]'>Service Details</li></Link>
                                    </div>
                                </div>
                                <div className=''>
                                    <Link to={'/blog'}><li onMouseEnter={() => setDropdown('Blog')}
                                        onMouseLeave={() => setDropdown('')} className=' text-[1.12rem]  text-[#858792]'>Blog</li></Link>
                                    <div onMouseEnter={() => setDropdown('Blog')}
                                        onMouseLeave={() => setDropdown('')} className={dropdown === "Blog" ? `absolute bg-[#2A2C39] pb-3 pl-4 pr-10` : `hidden`}>
                                        <Link to={'/blog'}><li className=' text-[1.12rem] pt-3 text-[#858792]'>Blog</li></Link>

                                        <Link to={'/blogDetails/1'}><li className=' text-[1.12rem] pt-3 text-[#858792]'>Blog Details</li></Link>
                                    </div>
                                </div>
                                <div className=''>
                                    <Link to={'/about'}><li onMouseEnter={() => setDropdown('Pages')}
                                        onMouseLeave={() => setDropdown('')} className=' text-[1.12rem]  text-[#858792]'>Pages</li></Link>
                                    <div onMouseEnter={() => setDropdown('Pages')}
                                        onMouseLeave={() => setDropdown('')} className={dropdown === "Pages" ? `absolute bg-[#2A2C39] pb-3 pl-4 pr-10` : `hidden`}>
                                        <Link to={'/about'}><li className=' text-[1.12rem] pt-3 text-[#858792]'>About Us</li></Link>

                                        <Link to={'/project'}><li className=' text-[1.12rem] pt-3 text-[#858792]'>Project</li></Link>

                                        <Link to={'/projectDetails/1'}><li className=' text-[1.12rem] pt-3 text-[#858792]'>Project Details</li></Link>
                                    </div>
                                </div>

                                <Link to={"/contact"}><li className=' text-[1.12rem] leading-[7.5rem] text-[#858792]'>Contact</li></Link>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <button className="hover:bg-[#2A2C39] transition-all duration-500  text-[1rem] xl:text-[1.12rem] text-white h-10 md:h-16 lg:h-12 xl:h-16 w-[8rem] xl:w-[11.31rem] rounded-[40rem] border-[0.062rem] border-[#3b3d49]">Hire me </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header1;