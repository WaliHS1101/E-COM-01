import React from 'react'
import navlogo from "../Image/WHS LOGO.png"

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
                <span className='navbar-brand'><a href="/" className='nav-link text-white'> Your Brand</a></span>
                <span className='navbar-brand d-block d-lg-none'><a href="/">  <img src={navlogo} width="20px" alt="Logo" /></a></span>
                <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#Nav-Bar">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id="Nav-Bar">
                    <ul className='nav navbar-nav'>
                        <li className='nav-item mt-lg-0 mb-lg-0 m-lg-4'>
                            <a href="Products" className='nav-link'>Products</a>
                        </li>
                        <li className='nav-item mt-lg-0 mb-lg-0 m-lg-4'>
                            <a href="#" className='nav-link'>Home</a>
                        </li>
                        <li className='nav-item mt-lg-0 mb-lg-0 m-lg-4'>
                            <a href="#" className='nav-link'>Home</a>
                        </li>
                    </ul>
                </div>
                <span className='navbar-brand d-none d-lg-block'><a href="/">  <img src={navlogo} width="20px" alt="Logo" /></a></span>

            </div>
        </nav>
    )
}

export default Navbar