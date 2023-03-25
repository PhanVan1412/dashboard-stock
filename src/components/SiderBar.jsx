import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './SiderBar.css';
import Navbar from './Navbar';

const SiderBar = () => {
  return (
    <section className="sider-bar">
        <div className="logo">
            <i className="fa-solid fa-coins"></i>
            <h2 className="brand">FTeam <span>Dashboard</span></h2>
        </div>
        <Navbar />
        <button className="sign-out">Sign Out</button>
    </section>
  )
}

export default SiderBar;