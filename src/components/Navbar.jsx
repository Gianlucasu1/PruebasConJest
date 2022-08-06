import React from 'react'
import pic1 from "../images/react.png"

export const Navbar = () => {
    return (
        <header>
            <a className="logo">Image</a>
            <nav>
                <ul className="nav__links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Info</a></li>
                    <li><a href="#">About us</a></li>
                </ul>
            </nav>
            <a href="#" className="cta"><button>Contact</button></a>
        </header>
    )
}
