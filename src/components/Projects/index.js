import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from '../ProjectCard';
import budget from "../../assets/projects/budget.jpg";
import note from "../../assets/projects/note.jpg";
import tech from "../../assets/projects/tech.jpg";
import weather from "../../assets/projects/weather.jpg";

function Projects()  {
    return (
        <Container>
            <Container fluid className="project-section">
                <h1 className="projects-header" id="projects">
                    My Recent <strong> Projects </strong> 
                </h1>
                <p style={{ color: "black"}}> These are some of my recent projects</p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {/* Budget Tracking */}
                    <Col md={4} className="project-card">
                        <ProjectCard 
                            img={budget}
                            title="Budget-Tracking"
                            description="An application used to track recent purchases and incomes"
                            link="https://warm-scrubland-74253.herokuapp.com/"
                            github="https://github.com/j-maclellan/budget-tracking"
                        />
                    </Col>

                    {/* Note-Saver */}
                    <Col md={4} className="project-card">
                        <ProjectCard 
                            img={note}
                            title="Note-Saver"
                            description="An application used to write and save Notes"
                            link="https://aqueous-ridge-80494.herokuapp.com/"
                            github="https://github.com/j-maclellan/note-saver"
                        />
                    </Col>

                    {/* Tech-Blog */}
                    <Col md={4} className="project-card">
                        <ProjectCard 
                            img={tech}
                            title="Tech-Blog"
                            description="A website to post about and discuss tech related news"
                            link="https://technerd-blog.herokuapp.com/"
                            github="https://github.com/j-maclellan/technerd-blog"
                        />
                    </Col>

                    {/* Weather Forecast  */}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            img={weather}
                            title="Weather Forecast"
                            description="A website used to check weather forecast in any city using API"
                            link="https://j-maclellan.github.io/weather-forecast/"
                            github="https://github.com/j-maclellan/weather-forecast"
                        />
                    </Col>

                    {/*
                    <Col md={4} className="project-card">
                        <ProjectCard
                            img={}
                            title=""
                            description=""
                            link=""
                            github=""
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            img={}
                            title=""
                            description=""
                            link=""
                            github=""
                        />
                    </Col>
                    */}
                </Row>    
            </Container>            
        </Container>
    )
}

export default Projects;