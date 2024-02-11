import ServiceBanner from "../Components/Banner/ServiceDetailsBanner";
import Header1 from "../Components/Header/Header1";
import ServiceDetails from "../Components/Service/ServiceDetails";

const ServiceDetailsPage = () => {
    return (
        <>
            <div className="bg-[#2A2C39]">
                <Header1 />
                <ServiceBanner />
                <ServiceDetails/>
            </div>
        </>
    );
};

export default ServiceDetailsPage;