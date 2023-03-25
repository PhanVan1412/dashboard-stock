import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Nabar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <i className="fa-solid fa-chart-line"></i>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <i className="fa-solid fa-wallet"></i>
            <Link to="/wallet">Wallet</Link>
          </li>
          <li>
            <i className="fa-solid fa-message"></i>
            <Link to="/message">Message</Link>
          </li>
          <li>
            <i className="fa-brands fa-trade-federation"></i>
            <Link to="/trade">Trade</Link>
          </li>
          <li>
            <i className="fa-solid fa-user-plus"></i>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;