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
                    I’m a full-stack software engineer with years of experience building and scaling modern SaaS platforms across complex and regulated domains. I’ve worked end-to-end on distributed systems, APIs, and user-facing applications, supporting data-intensive workflows, healthcare technologies, AI-enabled features, and laboratory systems. I bring a strong systems and architecture mindset, with experience in cloud-based platforms, system integration, performance, security, and maintainability. I enjoy leading teams, mentoring engineers, and delivering reliable, scalable software that aligns technical strategy with real business needs.
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
                        <li>Azure Devops</li>
                        <li>Cypress</li>
                        <li>Jest</li>
                        <li>Playwright</li>
                        <li>AWS</li>
                        <li>Dot Net</li> 
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
