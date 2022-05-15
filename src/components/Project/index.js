import React from "react";
import ProjectList from '../ProjectList';

function Project({currentProject})  {
    const { name, link, github } = currentProject;

    return (
        <section>
            <h1 data-testid='h1-tag'>{name}</h1>
            <p>{link}</p>
            <p>{github}</p>
            <ProjectList></ProjectList>
        </section>
    )
}

export default Project;