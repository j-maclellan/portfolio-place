import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";

function ProjectCard(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.img} alt='project-img'/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: 'justify'}}>
                    {props.description}
                </Card.Text>
                <ButtonGroup vertical>
                <Button href={props.link} target="_blank">Application</Button>
                <Button href={props.github} target="_blank">GitHub Repo</Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;