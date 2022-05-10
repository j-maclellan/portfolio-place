import React from "react";

function Nav() {
    
    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    {/* About Me section */}
                    <a data-testid='about' href="#about">
                        About Me
                    </a>
                </li>
                {/* Portfolio */}
                <li className="mx-2">
                    Portfolio
                </li>
                {/* Contact Me*/}
                <li className="mx-2">
                    Contact
                </li>
                {/* Resume */}
                <li className="mx-2">
                    Resume
                </li>
            </ul>
        </nav>
    )
}

export default Nav;