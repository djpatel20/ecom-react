import logo from "../assets/Pintola_Logo_PNG_400x.avif"
import { MdOutlineShoppingCart } from "react-icons/md";
import React from 'react'
import "./Layout.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



export const Navbar = () => {
  const cartCount = useSelector((state)=> state.products.products.length)
  return (
    <>
       <div className='navbar-flex'>
            <div className='logo-img'>
                <img src={logo} alt="logo" />
            </div>
            <div className='links-Div'>
                <ol>
                    <li><Link to= "/home" className="link">Home</Link></li>
                    <li><Link to= "/aboutus" className="link">AboutUs</Link></li>
                    <li><Link to= "/store" className="link">Store</Link></li>
                    <li><Link to= "/contactus" className="link">ContactUS</Link></li>
                    <li><Link to= "/whyus" className="link">Why Us?</Link></li>
                    
                </ol>
            </div>
            <Link to="/cart" style={{textDecoration:"none"}} className="icon-container">
            <div className="cart-icon">

            <p><MdOutlineShoppingCart fontSize={"25px"} color="rgb(119, 117, 117)"/></p>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}

            </div>
            </Link>
       </div>
    </>
  )
}
