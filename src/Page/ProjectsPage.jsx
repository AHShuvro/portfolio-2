import React from 'react';
import Header1 from '../Components/Header/Header1';
import ProjectsBanner from '../Components/Banner/ProjectsBanner';
import Projects from '../Components/Portfolio/Projects';
import Footer1 from '../Components/Footer/Footer1';

const ProjectsPage = () => {
    return (
        <div>
            <Header1/>
            <ProjectsBanner/>
            <Projects/>
            <Footer1/>
        </div>
    );
};

export default ProjectsPage;