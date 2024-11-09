import React  from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CustomerAuction from "../components/Auction/CustomerAuction";
const UserAuction = () =>{
    return(
        <>
        <Navbar/>
        <CustomerAuction/>
        <Footer/>
        </>
    )
}

export default UserAuction;