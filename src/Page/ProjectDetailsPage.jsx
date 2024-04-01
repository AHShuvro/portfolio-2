import Achievement from "../Components/Achievement/Achievement";
import ProjectDetailsBanner from "../Components/Banner/ProjectDetailsBanner";
import Footer1 from "../Components/Footer/Footer1";
import Header1 from "../Components/Header/Header1";
import ProjectDetails from "../Components/Portfolio/ProjectDetails";

const ProjectDetailsPage = () => {
    return (
        <>
            <Header1 />
            <ProjectDetailsBanner />
            <ProjectDetails/>
            <Achievement/>
            <Footer1/>
        </>
    );
};

export default ProjectDetailsPage;