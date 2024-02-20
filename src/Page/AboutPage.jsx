import React from 'react';
import Header1 from '../Components/Header/Header1';
import AboutBanner from '../Components/Banner/AboutBanner';
import Footer1 from '../Components/Footer/Footer1';
import About from '../Components/About/About';
import Education from '../Components/Educations/Education';

const AboutPage = () => {
    return (
        <>
            <Header1 />
            <AboutBanner />
            <About />
            <Education/>
            <Footer1 />
        </>
    );
};

export default AboutPage;