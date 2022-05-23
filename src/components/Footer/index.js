import React from "react";
import {
    AiFillLinkedin,
    AiFillGithub
}  from "react-icons/ai";

import { FaSpotify } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <ul fluid="true" className="flex-row">
                {/* GitHub */}
                    <li className="link-icons">
                        <a
                            href="https://github.com/j-maclellan"
                            style={{ color: 'black'}}
                            target="_blank"
                            rel="noreferrer"
                        >   
                            <AiFillGithub />
                        </a>
                    </li>
                {/* LinkedIn */}
                    <li className="link-icons">
                        <a 
                            href="https://www.linkedin.com/in/john-maclellan-0828a3100/"
                            style={{ color: 'black'}}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillLinkedin/>
                        </a>
                    </li>
                {/* Spotify */} 
                    <li className="link-icons">
                        <a 
                            href="https://open.spotify.com/user/1299447020"
                            style={{ color: 'black'}}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaSpotify />
                        </a>
                    </li>
            </ul>
        </div>
    )
}

export default Footer;