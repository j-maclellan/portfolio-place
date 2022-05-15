import React, { useState } from "react";
import photo from '../../assets/projects/images';
function ProjectList({ img }) {
    const [projects] = useState([
        {
            name: 'Note-Saver',
            link: 'https://aqueous-ridge-80494.herokuapp.com',
            github: 'https://github.com/j-maclellan/note-saver',
            img: 'note-saver-img'
        },
        {
            name: 'Tech-Blog',
            link: 'https://technerd-blog.herokuapp.com',
            github: 'https://github.com/j-maclellan/technerd-blog',
            img: 'tech-blog-img'
        },
        {
            name: 'Budget-Tracking',
            link: '',
            github: 'https://github.com/j-maclellan/budget-tracking',
            img: 'budget-tracking-img'
        }
    ])

    const currentProjects = projects.filter((project) => project.img === img);

    const [currentProject, setCurrentProject] = useState();

    return (
        <div>
            {currentProject={currentProject}}
            <div className="flex-row">
                {projects.map((image) => (
                    <img 
                        src={require(`../../assets/projects/images/${image.img}.jpg`)}
                        alt={image.name}
                        className='img-thumbnail mx-1'
                        key={image.name}
                    
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectList;