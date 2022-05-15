import React from "react";
import Nav from '../Nav';
import './Header.css';
function Header() {
    return (
        <section className="header">
            <h1>Maclellan Web, Inc</h1>
            <Nav></Nav>
        </section>
    );
}

export default Header;