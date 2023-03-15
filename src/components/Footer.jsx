import React from 'react'
import { Link } from 'react-router-dom';
const currentyear = new Date().getFullYear();
function Footer() {
  return (
    <div>
    <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
      {(!localStorage.getItem("authtoken")) ?
      <li className="nav-item"><Link to="/login" className="nav-link px-2 text-muted">Login</Link></li>
      :""}
      {(localStorage.getItem("authtoken")) ?
      <li className="nav-item"><Link to="/myOrder" className="nav-link px-2 text-muted">My Orders</Link></li>
      : ""}
      <li className="nav-item"><Link to="/about" className="nav-link px-2 text-muted">About</Link></li>
    </ul>
    <p className="text-center text-muted">© {currentyear} TechReads, Inc</p>
  </footer>
    
    </div>
  )
}

export default Footer;