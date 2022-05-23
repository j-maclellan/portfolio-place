import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from '../ProjectCard';
import budget from "../../assets/projects/budget.jpg";
import note from "../../assets/projects/note.jpg";
import tech from "../../assets/projects/tech.jpg";
import weather from "../../assets/projects/weather.jpg";
import up2Bar from '../../assets/projects/up2Bar.jpg';
import dripPlanner from '../../assets/projects/dripPlanner.jpg';

function Projects()  {
    return (
        
            <Container className="project-section">
                <div className="project-heading">
                    <h2>
                        My Recent Projects 
                    </h2>
                    <p> 
                        These are some of my recent projects
                    </p>
                </div>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {/* Budget Tracking */}
                    <Col>
                        <ProjectCard 
                            img={budget}
                            title="Budget-Tracking"
                            description="An application used to track recent purchases and incomes"
                            link="https://warm-scrubland-74253.herokuapp.com/"
                            github="https://github.com/j-maclellan/budget-tracking"
                        />
                    </Col>

                    {/* Note-Saver */}
                    <Col>
                        <ProjectCard 
                            img={note}
                            title="Note-Saver"
                            description="An application used to write and save Notes"
                            link="https://aqueous-ridge-80494.herokuapp.com/"
                            github="https://github.com/j-maclellan/note-saver"
                        />
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {/* Tech-Blog */}
                    <Col>
                        <ProjectCard 
                            img={tech}
                            title="Tech-Blog"
                            description="A website to post about and discuss tech related news"
                            link="https://technerd-blog.herokuapp.com/"
                            github="https://github.com/j-maclellan/technerd-blog"
                        />
                    </Col>

                    {/* Weather Forecast  */}
                    <Col>
                        <ProjectCard
                            img={weather}
                            title="Weather Forecast"
                            description="A website used to check weather forecast in any city using API"
                            link="https://j-maclellan.github.io/weather-forecast/"
                            github="https://github.com/j-maclellan/weather-forecast"
                        />
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {/* Up2Bar */}
                    <Col>
                        <ProjectCard
                            img={up2Bar}
                            title="Up2Bar"
                            description="A group project social app to see what the local nightlife buzz is"
                            link="https://up2bar.herokuapp.com/"
                            github="https://github.com/wingram1/up2bar"
                        />
                    </Col>

                    <Col>
                        <ProjectCard
                            img={dripPlanner}
                            title="DripPlanner"
                            description="A group project weather app designed to help track weather forecasts for road trips"
                            link="https://wingram1.github.io/drip-planner/"
                            github="https://github.com/wingram1/drip-planner"
                        />
                    </Col>
                    
                </Row>    
            </Container>            
        
    )
}

export default Projects;