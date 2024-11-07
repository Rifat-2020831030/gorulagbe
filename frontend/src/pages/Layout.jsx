// src/components/Layout/Layout.js
import React from 'react';
import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import AuthController from '../components/auth/auth controller/Auth.Controller';    

const Layout = ({children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [page, setPage] = useState("login");
  return (
    <>
      <Navbar setIsVisible={setIsVisible} setPage={setPage} />
      <main>{children}</main>
      {isVisible && <AuthController page={page} setIsVisible={setIsVisible} />}
    </>
  );
};

export default Layout;