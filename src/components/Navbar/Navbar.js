import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Logo from '../../assets/logo.svg'
import '../../styles/Navbar.css'

function Navbar() {
    const [toggleNav, setToggleNav] = useState(false);

    const toggleNavbar = () => {
        setToggleNav(!toggleNav);
    }

return (
    <div className="navbar" >

        <div className="leftSide" id={toggleNav ? "open" : "close"}>
            <img src={Logo} alt="logo" />
            <div className="hiddenLinks">
                <Link to="/" className="items">Personnages</Link>
                <Link to="/films" className="items">Film</Link>
                <Link to="/vehicules" className="items">Véhicule spatial</Link>

            </div>
        </div>
        <div className="rightSide">
                <Link to="/" className="items">Personnages</Link>
                <Link to="/films" className="items">Film</Link>
                <Link to="/vehicules" className="items">Véhicule spatial</Link>
            <button onClick={toggleNavbar}>
                <img src={Logo} alt="logo" />
            </button>
        </div>
    </div>
);
};

export default Navbar;