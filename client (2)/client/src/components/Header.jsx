import React, { Children, useEffect, useState } from 'react'
import {FaShoppingCart} from "react-icons/fa"
import {BsFillCartFill} from 'react-icons/bs'
import { Link, useSearchParams } from 'react-router-dom';
import MenuBar from './MenuBar';
import Modal from '../modal/Modal';
import { useSelector } from 'react-redux';
import SignUpLogin from '../forms/SignUpLogin';
import Logout from '../forms/Logout';


const Header = () => {
    const {user} = useSelector(store => store.authReducer);
    const [openModal, setOpenModal] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [logout, setLogout] = useState(false);
    const homeQuery = window.location.pathname === "/";
    //const [login, setLogin] = useState(false);
    const handleSignUp = () => {
        setOpenModal(true);
        setLogout(false);
        setSignUp(true);
    }
    const handleLogin = () => {
        setSignUp(false);
        setLogout(false);
        setOpenModal(true);
    }
    const handleLogout = () => {
        if (user) {
            setSignUp(false);
            setLogout(true);
            setOpenModal(true);
        }
    }
    const getInitialsFullName = (fullName) => {
      const names = fullName.split(' ');
      const initials = names.map(name => name.charAt(0).toUpperCase());
      return initials.join('.');
    }

  return (
    <div className={`${homeQuery ? "pb-[8.5%] lg:pb-[6.5%] xl:pb-[5%]" : "pb-[20%] sm:pb-[16%] md:pb-[14%] lg:pb-[12%] xl:pb-[10%]"}`}>
    <div className='shadow-lg fixed z-10'>
        <nav 
        style={{
            backgroundImage: 'url(https://images.pexels.com/photos/301717/pexels-photo-301717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            backgroundSize: 'cover'
        }}
        className="text-sm md:text-base lg:text-lg h-16 sm:h-20 md:h-24 flex justify-between items-center text-gray-800 font-semibold w-[100vw] px-[3%]">
          <div className="w-[25%] sm:w-[55%] md:w-[55%] lg:w-[50%] xl:w-[47%]">
              <ul className='hidden sm:flex justify-between items-center'>
                <li className='w-[19%] md:w-[18%] lg:w-[16%] xl:w-[14%]'>
                  <img className='rounded-full' src="../../images/logo4.jpeg" alt="" />
                </li>
                <li className='hover:scale-110'>
                    <Link to={"/"}>Home</Link> 
                </li>
                <li className='hover:scale-110'>
                   <Link to={"/buildGuides"}>Build Guides</Link> 
                    </li>
                <li className='hover:scale-110'>
                    <Link to={"/about"}>About</Link>
                </li>
                <li className='hover:scale-105'>
                    <Link to={"/contactUs"} className='bg-amber-800 bg-opacity-75 p-2 md:p-2.5 rounded-md text-slate-100'>Contact</Link>
                </li>
              </ul>
              {/* menu bar for small screens */}
              <MenuBar handleSignUp={handleSignUp} handleLogin={handleLogin}/>
          </div>
          <div className="w-[25%] sm:w-[35%] md:w-[32%] lg:w-[27%] xl:w-[22%]">
            <ul className='grid grid-cols-2 sm:grid-cols-4 items-center gap-1 sm:gap-0'>
                <li className='hidden sm:block col-span-2 mx-auto'>
                  <button
                  className='hover:scale-110'
                  onClick={handleSignUp}>SignUp
                  </button> 
                  <span className='mx-1.5'>/</span> 
                  <button 
                  className='hover:scale-110'
                  onClick={handleLogin}>Login
                  </button> 
                </li>
                <li className='text-2xl sm:text-3xl hover:scale-110 mx-auto'>
                  <Link to={"/cartPayment"}>
                    <FaShoppingCart className='text-black'/>
                  </Link>
                </li>
                <li>
                    <button
                    onClick={handleLogout}
                    className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center hover:shadow-xl mx-auto ${user ? "bg-green-600" : "bg-gray-500 pointer-events-none"}`}>
                       <p className='text-xs sm:text-base text-slate-50'>{user ? getInitialsFullName(user.name) : "Guest"}</p> 
                    </button>
                </li>
              </ul>
          </div>
        </nav>
        <Modal 
        openModal={openModal} 
        setOpenModal={setOpenModal} 
        signUp={signUp}
        setSignUp={setSignUp}
        >
          {logout ? <Logout/> : <SignUpLogin/> }
        </Modal>
    </div>
    
    </div>
  )
}

export default Header