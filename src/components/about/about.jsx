import React, { useContext } from 'react';
import { HomepageContext } from '../../context/context';
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaScroll } from "react-icons/fa";
import resume from "../../assets/Marc_Smith_-_Senior_Frontend_Software_Engineer.pdf"


import './about.scss';

export const About = () => {
    const { homepageState } = useContext(HomepageContext);
    return (
        <>
        <div className={`about ${homepageState === 'about' ? '' : 'hidden'}`}>
            <div>
                <p>
                    Throughout my career spanning over 12 years, I've been deeply immersed in the world of Front End Engineering, 
                    particularly within the realm of SAAS applications across diverse industries. From inception to execution, 
                    I've steered numerous projects to completion, wielding a blend of comprehensive front end strategies and 
                    long-term foresight. My strengths lie in establishing user-friendly design systems, spearheading high-performing 
                    teams, and unraveling complex problems, all while serving as a guiding mentor to junior engineers
                </p>
                <span className='skills'>
                    <h3>Skills</h3>
                    <ul>
                        <li>React</li>
                        <li>Node</li>
                        <li>jQuery</li>
                        <li>HTML & CSS</li>
                        <li>JavaScript</li>
                        <li>Webpack</li>
                        <li>Storybook</li>
                        <li>Git</li>
                        <li>Confluence</li>
                        <li>JIRA</li>
                        <li>Cypress</li>
                        <li>Jest</li>
                        <li>AWS</li>
                        <li>Python</li>
                        <li>Ruby</li>
                        <li>CI/CD</li>

                    </ul>
                </span>
                <span className='contact'>
                    <h3>Contact</h3>
                    <span className='contactIcon'>
                        <a href='https://www.linkedin.com/in/marcelliotsmith/' target="_blank" rel="noreferrer">
                            <FaLinkedin/>
                        </a>
                    </span>
                    <span className='contactIcon'>
                        <a href="mailto:marcelliotsmith@gmail.com">
                            <FaEnvelope/>
                        </a>
                    </span>
                    <span className='contactIcon'>
                        <a href={resume}>
                            <FaScroll/>
                        </a>
                    </span>
                </span>
            </div>
        </div>
       </>
    );
};
