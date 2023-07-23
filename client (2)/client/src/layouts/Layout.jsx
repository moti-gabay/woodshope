import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import AuthUserInfo from '../auth/AuthUserInfo'
import Footer from '../components/Footer'

const Layout = () => {
  const {user} = useSelector(store => store.authReducer);
  const nav = useNavigate();
  useEffect(() => {
    if (user && user.role == "admin") {
      nav("/admin")
    }
  },[user])
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout