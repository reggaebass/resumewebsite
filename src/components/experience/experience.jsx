import React, { useContext, useState } from 'react';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';
import { HomepageContext } from '../../context/context';
import './experience.scss';



export const Experience = () => {
    const { homepageState } = useContext(HomepageContext);
    const [index, setIndex] = useState(null);
    return (
        <>
            <span className={`experience ${homepageState === 'experience' ? '' : 'hidden'}`}>
                <h2>Work Experience</h2>
                <span className='expAccordion'>
                <AccordionGroup disableDivider sx={{ fontFamily: 'Nunito', color: 'neutral.800' }}>
                    <Accordion
                    expanded={index === 0}
                    onChange={(event, expanded) => {
                        setIndex(expanded ? 0 : null);
                    }}
                    >
                        <AccordionSummary sx={{color: 'primary'}}>
                            <span className='role'>Software Engineering Manager at Pillar Biosciences, Natick, MA</span>
                            <span className='date'>April 2022 — March 2024</span>
                        </AccordionSummary>
                        <AccordionDetails sx={{color: "#fff"}}>
                            <ul>
                                <li>Managed and ran engineering team responsible for maintaining and building new features in multiple web applications.</li>
                                <li>Led development of the web suite of a NGS pipeline application for cancer diagnosis.</li>
                                <li>Completed the development of an in house LIMS system to successful client validation.</li>
                                <li>Designed and managed implementation of a react micro front end service using design systems and module federation.</li>
                                <li>Front end Tech Lead</li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={index === 1}
                        onChange={(event, expanded) => {
                            setIndex(expanded ? 1 : null);
                        }}
                    >
                        <AccordionSummary>
                            <span className='role'>Senior Software Engineer at Pillar Biosciences, Natick, MA</span>
                            <span className='date'>October 2021 — April 2022</span>
                        </AccordionSummary>
                        <AccordionDetails sx={{color: "#fff"}}>
                            <ul>
                                <li>Led team developing a LIMS software solution for in house CLIA Lab</li>
                                <li>Set up new webapp team including hiring and setting direction</li>
                                <li>Designed architecture and interface for new NGS testing analysis software</li>
                                <li>Worked with with back end and devops groups to design cloud pipeline archetecture</li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                            expanded={index === 2}
                            onChange={(event, expanded) => {
                            setIndex(expanded ? 2 : null);
                            }}
                    >
                        <AccordionSummary>
                            <span className='role'>Front End Engineer at One Door, South Boston, Ma</span>
                            <span className='date'>July 2015 — October 2021</span>
                        </AccordionSummary>
                        <AccordionDetails sx={{color: "#fff"}}>
                            <ul>
                                <li>Worked as part of Engineering team on rails sass application with ember, elm and react front ends.</li>
                                <li>Lead front end effort on development of new features</li>
                                <li>Worked on support tickets for both front and back end issues</li>
                                <li>Lead the implemetaion of design system archetecture</li>
                                <li>Wrote documentation and evangelized Design Systems</li>
                                <li>Built a live style guide and later migrated to storybook</li>
                                <li>Integrated webpack and babel in to existing application</li>
                                <li>Restructured legacy rails application to use asset pipeline before webpack</li>
                                <li>Implemented content delivery network for Azure and AWS</li>
                                <li>Liaised with User Experience and Product Managers to create front end strategy thatwould allow for rapid development while ensuring robust and dry code as well as a consistent user experience</li>
                                <li>Mentored other Engineers to hone their front end skills including with css,javaScript, jQuery, and react</li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                            expanded={index === 3}
                            onChange={(event, expanded) => {
                                setIndex(expanded ? 3 : null);
                            }}
                    >
                        <AccordionSummary>
                            <span className='role'>User Interface Designer at Aclara Technologies, Wellesley, Ma</span>
                            <span className='date'>June 2011 — July 2015</span>
                        </AccordionSummary>
                        <AccordionDetails sx={{color: "#fff"}}>
                            <ul>
                                <li>Implemented client branding for sass application</li>
                                <li>Build front end of new features</li>
                                <li>Responsible for client facing support issues</li>
                                <li>Created wire frames for new features and applications</li>
                                <li>Consulted with clients about UI/UX and their branding preferences</li>
                                <li>Implemented software so it could be served on a client domain remotely or through an iframe</li>
                                <li>Ensured cross browser consistency</li>
                                <li>Ensured application accessibility to WCAG standards</li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                </AccordionGroup>
                </span>
            </span>
        </>
    );
};

