import React from "react";
import { Container, Row } from "react-bootstrap";
import resumePdf from "../../assets/Resume.pdf";
import { Button } from "react-bootstrap";

function Resume() {
    return(
        <div>
            <Container fluid className="resume-section">
                <h2 id="resume"> Resume</h2>
                <Row style={{ justifyContent: 'center' }}>
                    <h4> Front End Proficiencies</h4>
                        <ul>
                            <li>
                                HTML
                            </li>
                            <li>
                                Javascript
                            </li>
                            <li>
                                CSS
                            </li>
                            <li>
                                jQuery
                            </li>
                            <li>
                                Responsive Design
                            </li>
                            <li>
                                React
                            </li>
                            <li>
                                Bootstrap
                            </li>
                        </ul>
                </Row>
                <Row style={{ justifyContent: 'center'}}>
                    <h4> Back End Proficiencies</h4>
                        <ul>
                            <li>
                                MySQL, Sequelize
                            </li>
                            <li>
                                APIs
                            </li>
                            <li>
                                Node.js
                            </li>
                            <li>
                                Express
                            </li>
                            <li>
                                MongoDB
                            </li>
                            <li>
                                REST
                            </li>
                            <li>
                                GraphQl
                            </li>
                        </ul>
                </Row>
            <Button className='btn' href={resumePdf} download>Download My Resume</Button>
            </Container>
        </div>
    )
}

export default Resume;