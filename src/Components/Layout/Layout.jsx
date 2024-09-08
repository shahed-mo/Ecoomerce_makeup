// src/Components/Layout/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../NAVBAR/Navbar_list';
import Footer from '../footer/Footer'
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This renders child routes */}
      <Footer/>
    </div>
  );
};

export default Layout;