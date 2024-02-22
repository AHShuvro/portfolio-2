import React from 'react';
import Header1 from '../Components/Header/Header1';
import AboutBanner from '../Components/Banner/AboutBanner';
import Footer1 from '../Components/Footer/Footer1';
import About from '../Components/About/About';
import Education from '../Components/Educations/Education';
import Achievement from '../Components/Achievement/Achievement';
import Testimonial from '../Components/Testimonials/Testimonial';
import FavouriteClients from '../Components/FavouriteClients/FavouriteClients';

const AboutPage = () => {
    return (
        <>
            <Header1 />
            <AboutBanner />
            <About />
            <Education/>
            <Achievement/>
            <Testimonial/>
            <FavouriteClients/>
            <Footer1 />
        </>
    );
};

export default AboutPage;