import BlogDetailsBanner from "../Components/Banner/BlogDetailsBanner";
import BLogDetails from "../Components/BlogPost/BLogDetails";
import Footer1 from "../Components/Footer/Footer1";
import Header1 from "../Components/Header/Header1";

const BlogDetailsPage = () => {
    return (
        <div>
            <Header1 />
            <BlogDetailsBanner />
            <BLogDetails />
            <Footer1/>
        </div>
    );
};

export default BlogDetailsPage;