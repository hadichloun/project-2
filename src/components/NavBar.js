import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/recipe">Recipes</NavLink>
            <NavLink to="/plan">plan</NavLink>
        </div>
    )
}

export default NavBar
