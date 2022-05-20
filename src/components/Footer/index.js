import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillLinkedin,
    AiFillGithub
}  from "react-icons/ai";

import { FaSpotify } from "react-icons/fa";

function Footer() {
    return (
        <Container fluid className="footer">
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
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
                </Col>
        </Container>
    )
}

export default Footer;