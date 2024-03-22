import ServiceBanner from "../Components/Banner/ServiceDetailsBanner";
import FavouriteClients from "../Components/FavouriteClients/FavouriteClients";
import Footer1 from "../Components/Footer/Footer1";
import Header1 from "../Components/Header/Header1";
import ServiceDetails from "../Components/Service/ServiceDetails";

const ServiceDetailsPage = () => {
    return (
        <>
            <div className="bg-[#2A2C39]">
                <Header1/>
                <ServiceBanner />
                <ServiceDetails/>
                <FavouriteClients/>
                <Footer1/>
            </div>
        </>
    );
};

export default ServiceDetailsPage;