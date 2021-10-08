import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
//import Register from './register';
import { useSelector } from "react-redux";

const Nav = () => {
  const login = useSelector((state) => state.login);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/register">
            BookApp
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/register"
                >
                  Register
              </NavLink>
              </li>
            
                
                {login.loggedIn && (
               <li className="nav-item">
                <NavLink className="nav-link" to="/users">
                  Users
                </NavLink>
              
               </li>
                )}
               <li className="nav-item">
                <NavLink className="nav-link" to="/books">
                  Book
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/categories">
                  Category
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/bookorders">
                  BookOrder
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/orderdetails">
                  OrderDetail
                </NavLink>
                </li>
                        </ul>
                        <ul className="navbar-nav mb-2">
              {login.loggedIn ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">
                    Logout
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              )}
              </ul>
                        </div>
                    </div>
                    </nav>
        </div>
     );
}
 
export default Nav;