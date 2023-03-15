import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { Dropdown } from "react-bootstrap"
import { Badge } from 'react-bootstrap';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './contextReducer';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  let data = useCart();
  const [cartView, setCartView] = useState(false)
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    // setToken(null);
    navigate("/")
  }
  return (
    <div>
      <nav className="navbar bg-info navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            TechReads
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse fs-5" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item-active fs-5 m-3">
                <Link className="nav-link text-black" aria-current="page" to="/">Home</Link>
              </li> */}
              {(localStorage.getItem("authtoken")) ?
                (<li className="nav-item-active fs-5 m-3">
                  <Link className="nav-link text-black" aria-current="page" to="/myOrder">My Orders</Link>
                </li>)
                : ""}
                <li  className="nav-item-active" style={{color:"black"}}>
                <NavDropdown className='m-3 fs-5 text-info' title="Branch Names"   id="navbarScrollingDropdown" variant="dark">
                <NavDropdown.Item href="#CSE/IT">CSE/IT</NavDropdown.Item>
                <NavDropdown.Item href="#ECE">ECE</NavDropdown.Item>
                <NavDropdown.Item href="#Mech/PIE">MECH/PIE</NavDropdown.Item>
              </NavDropdown>
              </li>
              
            </ul>
            {(!localStorage.getItem("authtoken")) ?
              (<div className='d-flex'>
                <Link className="btn bg-black text-white m-3" to="/login">Login</Link>
                <Link className="btn bg-black text-white m-3" to="/createuser">SignUp</Link>
              </div>)
              :
              <div className='d-flex'>
                <div className='btn bg-black text-info m-3' onClick={() => { setCartView(true) }}>
                  <ShoppingCartIcon />
                  <span> </span>
                  <Badge pill bg="danger">{data.length}</Badge>
                </div>
                {cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}
                <div className='btn bg-black text-danger m-3' onClick={handleLogout}>
                  Logout
                </div>
                <Link className="btn bg-black text-info m-3" to="/profile"><AccountCircleIcon /></Link>
              </div>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}