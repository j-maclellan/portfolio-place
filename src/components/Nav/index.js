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
                    <a data-testid='about' href='#about'>
                        Portfolio
                    </a>
                </li>
                {/* Contact Me*/}
                <li className="mx-2">
                    <a data-testid='contact' href='#contact'>
                        Contact Me
                    </a>
                </li>
                {/* Resume */}
                <li className="mx-2">
                    <a data-testid='resume' href='#resume'>
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;