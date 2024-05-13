import React, { useEffect } from "react";
import { Header } from "../components/header/header";
import { Experience } from "../components/experience/experience";
import { About } from "../components/about/about";
import { Projects } from "../components/projects/projects";
import { Faq } from "../components/faq/faq";
import { Sidenav } from "../components/sidenav/sidenav";
import { HomepageProvider } from "../context/context";
import logo from '../assets/MESlogo-01.png';
import "./home.scss";

const Loader = () => {
    return (
        <div>
            <img src={logo} alt="Loading..." />
        </div>
    );
};

export const Home = () => {
    const switchVisibility = (fromDivId, toDivId) => {
        const fromDiv = document.getElementById(fromDivId);
        const toDiv = document.getElementById(toDivId);
        
        // Add 'visible' class to 'fromDiv'
        toDiv.classList.add('hidden');
        
        // Remove 'visible' class from 'fromDiv' after 15 seconds
        setTimeout(() => {
            toDiv.classList.remove('hidden');
            // Add 'visible' class to 'toDiv' after 15 seconds
            fromDiv.classList.add('hidden');
        }, 5000);
    };

    const animateLogo = () => {
        const loaderDiv = document.getElementById('loaderDiv');
        setTimeout(() => {
        loaderDiv.classList.add('animate')
        }, 500);
    }

    useEffect(() => {
        animateLogo();
        switchVisibility('loaderDiv', 'homeDiv');
    }, []); 


  return (
    <>
        <div className="loader" id="loaderDiv">
            <Loader />
        </div>
        <div className="home" id='homeDiv'>
            <HomepageProvider>
                <span className="top">
                    <Header />
                </span>
                <span className="left">
                    <Sidenav />
                </span>
                <span className="right">
                    <div className="content">
                        <About />
                        <Experience />  
                        <Projects />  
                        <Faq />
                    </div>
                </span>
            </HomepageProvider>
        </div>
    </>
  );
}