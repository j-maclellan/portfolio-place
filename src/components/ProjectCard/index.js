import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";
import { BsGithub } from 'react-icons/bs';
import { GrDeploy } from 'react-icons/gr'; 

function ProjectCard(props) {
    return (
        <Card className="project-card">
            <Card.Img className="project-img" variant="top" src={props.img} alt='project-img'/>
            <Card.Body className="project-body">
                <Card.Title >{props.title}</Card.Title>
                <Card.Text style={{ textAlign: 'justify'}}>
                    {props.description}
                </Card.Text>
                <ButtonGroup justify-content="center">
                <Button className="btn" href={props.link} target="_blank"><GrDeploy/> Application</Button>
                <Button className='btn2' href={props.github} target="_blank"> <BsGithub/> GitHub Repo</Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;