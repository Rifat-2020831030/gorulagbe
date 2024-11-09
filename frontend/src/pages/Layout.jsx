// src/components/Layout/Layout.js
import React, { useState } from 'react';
import AuthController from '../components/auth/auth controller/Auth.Controller';
import Navbar from '../components/navbar/Navbar';

const Layout = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [page, setPage] = useState("login");
    const [productCount, setProductCount] = useState(0);
    const [cart, setCart] = useState([]);
  return (
    <>
      <Navbar setIsVisible={setIsVisible} setPage={setPage} productCount={productCount} cart={cart} />
      <main>
      {React.isValidElement(children)
          ? React.cloneElement(children, {setProductCount, setCart, setPage, isVisible, setIsVisible})
          : children}
        {/* {React.cloneElement(children,productCount, { setProductCount }, {setPage}, {isVisible}, {setIsVisible}, {setProductCount})} */}
        </main>
      {isVisible && <AuthController page={page} setIsVisible={setIsVisible} />}
    </>
  );
};

export default Layout;