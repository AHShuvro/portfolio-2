import Achievement from "../Components/Achievement/Achievement";
import ServiceBanner from "../Components/Banner/ServiceBanner";
import FavouriteClients from "../Components/FavouriteClients/FavouriteClients";
import Footer1 from "../Components/Footer/Footer1";
import Header1 from "../Components/Header/Header1";
import AllServices from "../Components/Service/AllServices";

const ServicesPage = () => {
    return (
        <>
            <Header1/>
            <ServiceBanner/>
            <AllServices/>
            <Achievement/>
            <FavouriteClients/>
            <Footer1/>
        </>
    );
};

export default ServicesPage;