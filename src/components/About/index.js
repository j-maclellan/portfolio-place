import React from "react";
import cover from '../../assets/images/cover.jpg';
import badpic from '../../assets/images/badpic.jpg';
import goodpic  from '../../assets/images/goodpic.jpg';

function About() {
    return (

        <section className="my-2 about">
                <h2 className="about-h2">
                    About Me
                </h2>
            <div className="about-div">
                <p>
                    My name is John Maclellan, and thank you for visiting my Portfolio! 
                    Here I have a few of the projects I have worked on and contributed to. I am proud of the work I have done but as the big letters say,
                    this is supposed to be about me, not my code. 

                    I am 25 years old, and graduated from UTC with a degree in literature. Now before you start asking questions, I do believe my extensive experience reading Shakespeare does actual help me code better.
                    For one, I know exactly where semi-colons and commas are supposed to go. Also, after reading ye Olde english, terms like "href" and "div" just seem natural to me. 
                    But I would hate to come across as long winded, so I will just say thank you for checking out my page and I hope you like what you see!
                </p>
            </div>
            <div className="about-img-div">
                <img src={cover} className='about-img'alt='cover'/>
                <img src={badpic} className='about-img' alt='headshot' />
                <img src={goodpic} className='about-img' alt='wedding day' />
            </div>
        </section>
    )
}

export default About;