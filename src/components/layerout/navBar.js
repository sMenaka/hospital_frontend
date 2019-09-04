import React from "react";
import {Link} from "react-router-dom"
import SignedinNav from "./signedinNav"
import SignedOutNav from "./signedOutNav"
const Navbar = () => {

    return (
        
        <nav className="nav-wrapper teal darken-3">
            <div className="container">
            <Link to='/' className="brand-logo">Hospital</Link>
            <SignedinNav />
            <SignedOutNav />
            </div>
        </nav>

    )
        
    
}

export default Navbar;