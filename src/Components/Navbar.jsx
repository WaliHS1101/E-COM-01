import React from 'react'
import navlogo from "../Image/WHS LOGO.png"

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
                <span className='navbar-brand'>Your Brand</span>
                <span className='navbar-brand d-block d-lg-none'> <img src={navlogo} width="20px" alt="Logo" /></span>
                <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#Nav-Bar">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id="Nav-Bar">
                    <ul className='nav navbar-nav'>
                        <li className='nav-item mt-lg-0 mb-lg-0 m-lg-4'>
                            <a href="#" className='nav-link'>Home</a>
                        </li>
                        <li className='nav-item mt-lg-0 mb-lg-0 m-lg-4'>
                            <a href="#" className='nav-link'>Home</a>
                        </li>
                        <li className='nav-item mt-lg-0 mb-lg-0 m-lg-4'>
                            <a href="#" className='nav-link'>Home</a>
                        </li>
                    </ul>
                </div>
                <span className='navbar-brand d-none d-lg-block'> <img src={navlogo} width="20px" alt="Logo" /></span>

            </div>
        </nav>
    )
}

export default Navbar