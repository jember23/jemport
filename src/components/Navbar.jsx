import React, {useState} from 'react'
import {Link} from 'react-router-dom';

import Logo from '../images/jemLogo.png';
import {FaLinkedin} from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav);
    };

  return (
    <div name='navbar' className='flex fixed justify-between items-center h-24 w-full px-[80px] bg-[#010026] text-purple-50 z-20'>

        {/* Initial Name Logo */}
        <div>
            <img src={Logo} alt="Logo" style={{width: '50px'}}/>
        </div>

        {/* menu */}
        <ul className='hidden md:flex'>
            <li className='relative hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>
                <Link to='/'>Home</Link>
            </li >
            <li className='relative hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>
                <Link to='/Projects'>Projects</Link>
            </li>
            <li className='relative hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>
                <Link to='/Certs'>Certs</Link>
            </li>
            <li className='relative hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>
                <Link to='/Contact'>Contact</Link>
            </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#010026]'}>
            
            {/* Initial Name Logo */}
            <div className='w-full m-4'>
                <img src={Logo} alt="Logo" style={{width: '45px'}}/>
            </div>
            
            <li className='p-4 border-b border-gray-600'>
                <Link to='/'>Home</Link>
            </li>
            <li className='p-4 border-b border-gray-600'>
                <Link to='/Projects'>Projects</Link>
            </li>
            <li className='p-4 border-b border-gray-600'>
                <Link to='/Certs'>Certs</Link>
            </li>
            <li className='p-4 border-b border-gray-600'>
                <Link to='/Contact'>Contact</Link>
            </li>
        </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300' href=" https://linkedin.com/in/jember23-almojuela-98948a213">
              Linkedin <FaLinkedin size={30} /></a>
            </li>
            {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Github <FaGithub size={30} /></a>
            </li> */}
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-cyan-600'>
              <button className='flex justify-between items-center w-full text-gray-300'>
                <Link to='/Contact'>Contact</Link><HiOutlineMail size={30} />
              </button>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a className='flex justify-between items-center w-full text-gray-300' href="https://drive.google.com/file/d/1xx5FmYCrXqKP23gmopLa9Rfx7Z5klgI2/view?usp=sharing">
              Resume <BsFillPersonLinesFill size={30} /></a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar