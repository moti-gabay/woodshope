import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AdminAccountDropDown from './AdminAccountDropdown';

const AdminHeader = () => {
  const {user} = useSelector(store => store.authReducer);

  return (
    <div className="h-42 sm:h-56 pb-5 bg-gradient-to-br from-sky-600 to-indigo-700 text-center relative">
        <h1 className='text-[3em] sm:text-[4em] font-serif text-center'>Admin</h1>
        <p className='text-2xl'>Welcome "{user?.name}"</p> 
        <div className="mt-4 flex justify-center gap-2 items-center">
          <div className="bg-green-400 text-xs sm:text-base w-[26%] sm:w-[20%] md:w-[17%] lg:w-[13%] px-1 py-1.5 lg:p-2 box-border rounded-md font-serif hover:bg-green-500 hover:scale-105 hover:shadow-lg">
          <Link to={"/admin/ManageUsers"}>Manage users</Link> 
          </div>
          <div className="bg-green-400 text-xs sm:text-base w-[32%] sm:w-[22%] md:w-[18%] lg:w-[15%] px-1 py-1.5 lg:p-2 rounded-md font-serif hover:bg-green-500 hover:scale-105 hover:shadow-lg">
          <Link to={"/admin/ManageProducts"}>Manage products</Link>
          </div>  
        </div>
        <AdminAccountDropDown />
        <div className="">
          <p className='sm:hidden'>sm</p>
          <p className='hidden sm:block md:hidden'>md</p>
          <p className='hidden md:block lg:hidden'>lg</p>
          <p className='hidden lg:block xl:hidden'>xl</p>
          <p className='hidden xl:block'>xxl</p>
        </div>
    </div>
  )
}

export default AdminHeader