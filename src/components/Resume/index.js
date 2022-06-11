import React from "react";
import { Container, Row } from "react-bootstrap";
import resumePdf from "../../assets/Resume_John.docx.pdf";
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
                                CSS
                            </li>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                React
                            </li>
                            <li>
                                Responsive Design
                            </li>
                            <li>
                                jQuery
                            </li>
                            <li>
                                Bootstrap/Sass
                            </li>
                            <li>
                                OOP
                            </li>
                            <li>
                                MVC
                            </li>
                        </ul>
                </Row>
                <Row style={{ justifyContent: 'center'}}>
                    <h4> Back End Proficiencies</h4>
                        <ul>
                            <li>
                                SQL, NoSQL
                            </li>
                            <li>
                                APIs
                            </li>
                            <li>
                                MongoDB
                            </li>
                            <li>
                                Express
                            </li>
                            <li>
                                Node.js
                            </li>
                            <li>
                                GraphQl
                            </li>
                            <li>
                                ORM
                            </li>
                            <li>
                                REST
                            </li>
                        </ul>
                </Row>
            <Button className='btn' href={resumePdf} download>Download My Resume</Button>
            </Container>
        </div>
    )
}

export default Resume;