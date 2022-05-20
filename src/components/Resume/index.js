import React from "react";
import { Container, Row } from "react-bootstrap";
import resumePdf from "../../assets/Resume.pdf";

function Resume() {
    return(
        <div>
            <Container fluid className="resume-section">
                <h1 id="resume"> Resume</h1>
            <span>Click to Download My <a href={resumePdf} download>Resume</a></span>
                <Row style={{ justifyContent: 'center' }}>
                    <h1> Front End Proficiencies</h1>
                        <ol>
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
                        </ol>
                </Row>
                <Row style={{ justifyContent: 'center'}}>
                    <h1> Back End Proficiencies</h1>
                        <ol>
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
                        </ol>
                </Row>
            </Container>
        </div>
    )
}

export default Resume;