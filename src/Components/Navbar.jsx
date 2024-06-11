import React from 'react'
import navlogo from "../Image/WHS LOGO.png"
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
                <Link to="/" className='nav-link'> <span className='navbar-brand'>Your Brand</span></Link>
                <span className='navbar-brand d-block d-lg-none'><Link to="/">  <img src={navlogo} width="20px" alt="Logo" /></Link></span>
                <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#Nav-Bar">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse justify-content-center' id="Nav-Bar">
                    <ul className='nav navbar-nav'>
                        <li className='nav-item mt-lg-0 mb-lg-0 m-lg-4'>
                            <Link to="Products" className='nav-link'>Products</Link>
                        </li>
                        <li className='nav-item mt-lg-0 mb-lg-0 m-lg-4'>
                            <Link to="#" className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-item mt-lg-0 mb-lg-0 m-lg-4'>
                            <Link to="#" className='nav-link'>Home</Link>
                        </li>
                    </ul>
                    <Link to="LogIn" className='d-block d-lg-none'>
                        <button className='btn btn-success '>Account</button>
                    </Link>
                </div>
                <Link to="LogIn" className='d-none d-lg-block '>
                    <button className='btn btn-success'>Account</button>
                </Link>
            </div>
        </nav >
    )
}

export default Navbar