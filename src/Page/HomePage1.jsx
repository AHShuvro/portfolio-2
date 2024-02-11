import React from 'react';
import Header1 from '../Components/Header/Header1';
import Banner1 from '../Components/Banner/Banner1';
import Service from '../Components/Service/Service';
import Skills from '../Components/Skills/Skills';
import Achievement from '../Components/Achievement/Achievement';
import Portfolio from '../Components/Portfolio/Portfolio';
import Testimonial from '../Components/Testimonials/Testimonial';
import FavouriteClients from '../Components/FavouriteClients/FavouriteClients';
import BlogPost from '../Components/BlogPost/BlogPost';
import Footer1 from '../Components/Footer/Footer1';

const HomePage1 = () => {
    return (
        <>
            <Header1/>
            <Banner1/>
            <Service/>
            <Skills/>
            <Achievement/>
            <Portfolio/>
            <Testimonial/>
            <FavouriteClients/>
            <BlogPost/>
            <Footer1/>
        </>
    );
};

export default HomePage1;