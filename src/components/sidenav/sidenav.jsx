import React, { useContext } from 'react';
import MenuButton from '@mui/joy/MenuButton';
import Dropdown from '@mui/joy/Dropdown';
import { HomepageContext } from '../../context/context';


import './sidenav.scss';

export const Sidenav = () => {
    const { setHomepageState } = useContext(HomepageContext);

    const handleClick = (page) => {
        setHomepageState(page);
    };
    
    return (
    <>
        <div className='sidenav'>
            <Dropdown>
                <MenuButton onClick={() => handleClick('about')}>About Me</MenuButton>
                <MenuButton onClick={() => handleClick('experience')}>Work Experience</MenuButton>
                <MenuButton onClick={() => handleClick('projects')}>Projects</MenuButton>
                <MenuButton onClick={() => handleClick('faq')}>FAQ</MenuButton>
            </Dropdown>
       
        </div>
    </>
    );
};
