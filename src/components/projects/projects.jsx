import React, { useContext, useState } from 'react';
import mmone from "../../assets/MightyMystic1.jpg";
import mmtwo from "../../assets/MightyMystic2.jpg";
import mmthree from "../../assets/MightyMystic3.jpg";
import mmfour from "../../assets/MightyMystic4.jpg";
import webServices from "../../assets/wax-seal-web-services.gif";
import artwork from "../../assets/wax-seal-illustration.gif";
import graphicDesign from "../../assets/wax-seal-graphic-design.gif";
import shatteredMind from "../../assets/shatteredMind.jpg";
import herring from "../../assets/herring.jpg";
import bass from "../../assets/bass.jpg";
import firetown from "../../assets/firetown.jpg";
import albumCover from "../../assets/MysticFrontCover.jpg";
import stampLogo from "../../assets/ChampionStamp.jpg";
import flyer from "../../assets/FlyerCardFront.jpg";
import { HomepageContext } from '../../context/context';
import Card from '@mui/joy/Card';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import './projects.scss';


const IconButton = ({func, alternate, image}) => {
    return (
        <button onClick={func}>
            <img src={image} alt={alternate} />
        </button>
    );
}

export const Projects = () => {
    const { homepageState } = useContext(HomepageContext);
    const [openws, setOpenws] = useState(false);
    const [openaw, setOpenaw] = useState(false);
    const [opengd, setOpengd] = useState(false);

    return (
        <>
            <div className={`projects ${homepageState === 'projects' ? '' : 'hidden'}`}>
                <div>
                    <h2>Projects</h2>
                    <p>Here are some of the projects I have worked on:</p>
                    <div className="projectCards">
                        <span className="project">
                            <Card>
                                <h3>Web Services</h3>
                                <p>This section showcases examples of websites I've previously built, offering a glimpse into my portfolio and expertise in web development.</p>
                            <IconButton func={() => setOpenws(true)} alternate={`web services`} image={webServices}/>
                                
                            </Card>
                            <Modal
                                open={openws}
                                onClose={() => setOpenws(false)}
                                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Sheet variant="outlined" color="neutral" sx={{ p: 4 }}>
                                <ModalClose variant="plain" sx={{ m: 1 }}/>
                                <a href="https://www.mightymystic.com" target="_blank" rel="noreferrer">
                                        mightymystic.com
                                </a>
                                <p>Website for reggae artist Mighty Mystic. Features a discography, tour dates, and a contact form.</p>
                                <div className="wsModalContent">
                                    <img src={mmone} alt="Mighty Mystic 1" />
                                    <img src={mmtwo} alt="Mighty Mystic 2" />
                                    <img src={mmthree} alt="Mighty Mystic 3" />
                                    <img src={mmfour} alt="Mighty Mystic 4" />
                                </div>
                                </Sheet>
                            </Modal>
                        </span>
                        <span className="project">
                            <Card>
                                <h3>Artwork</h3>
                                <p>
                                    My fine arts education and design experience greatly enhance my career as a developer. Explore my portfolio for a selection of illustrations and other artwork.
                                </p>
                                <IconButton func={() => setOpenaw(true)} alternate={`artwork`} image={artwork} />
                            </Card>
                            <Modal
                                open={openaw}
                                onClose={() => setOpenaw(false)}
                                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Sheet variant="outlined" color="neutral" sx={{ p: 4 }}>
                                <ModalClose variant="plain" sx={{ m: 1 }}/>
                                <div className="awModalContent">
                                    <img src={bass} alt="My Awesome Bass which I love very much" />
                                    <img src={herring} alt="Viking smoking a herring" />
                                    <img src={firetown} alt="Illustration of a ghost town" />
                                    <img src={shatteredMind} alt="Intiagalio Print" />
                                </div>
                                </Sheet>
                            </Modal>
                        </span>
                        <span className="project">
                            <Card>
                                <h3>Graphic Design</h3>
                                <p>
                                    Before I became a developer, I worked as a graphic designer. This section showcases some of my previous work in that field.
                                </p>
                                <IconButton func={() => setOpengd(true)} alternate={`graphic design`} image={graphicDesign} />
                            </Card>
                            <Modal
                                open={opengd}
                                onClose={() => setOpengd(false)}
                                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Sheet variant="outlined" color="neutral" sx={{ p: 4 }}>
                                <ModalClose variant="plain" sx={{ m: 1 }}/>
                                <div className="awModalContent">
                                <img src={albumCover} alt="Mighty Mystic Album Cover" />
                                <img src={flyer} alt="Flyer for Split2nd" />
                                <img src={stampLogo} alt="Champion Stamp" />
                                </div>
                                </Sheet>
                            </Modal>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};
