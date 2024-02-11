
import BlogBanner from '../Components/Banner/BlogBanner';
import Blog from '../Components/BlogPost/Blog';
import FavouriteClients from '../Components/FavouriteClients/FavouriteClients';
import Footer1 from '../Components/Footer/Footer1';
import Header1 from '../Components/Header/Header1';

const Blogpage = () => {
    return (
        <div>
            <Header1/>
            <BlogBanner/>
            <Blog/>
            <FavouriteClients/>
            <Footer1/>
            
        </div>
    );
};

export default Blogpage;