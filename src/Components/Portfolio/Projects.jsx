import { SwiperSlide } from "swiper/react";
import { projects } from "../../Data/Data";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <>
            <div className="container py-8 md:py-16 lg:py-32">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-6 px-2 md:px-0 mb-6 md:mb-8 lg:mb-12">
                    <button className="hover:bg-[#6c757d] transition-all duration-500 text-[1rem] md:text-[1.12rem] text-white py-1 lg:py-3 px-1 md:px-3 lg:px-4 rounded-[40rem] border-[0.1rem] hover:border-none border-[#6c757d] focus:bg-[#6c757d]" tabIndex="0">All</button>
                    <button className="hover:bg-[#6c757d] transition-all duration-500 text-[1rem] md:text-[1.12rem] text-white py-1 lg:py-3 px-1 md:px-3 lg:px-4 rounded-[40rem] border-[0.1rem] hover:border-none border-[#6c757d] focus:bg-[#6c757d]" tabIndex="0">HTML</button>
                    <button className="hover:bg-[#6c757d] transition-all duration-500 text-[1rem] md:text-[1.12rem] text-white py-1 lg:py-3 px-1 md:px-3 lg:px-4 rounded-[40rem] border-[0.1rem] hover:border-none border-[#6c757d] focus:bg-[#6c757d]" tabIndex="0">Wordpress</button>
                    <button className="hover:bg-[#6c757d] transition-all duration-500 text-[1rem] md:text-[1.12rem] text-white py-1 lg:py-3 px-1 md:px-3 lg:px-4 rounded-[40rem] border-[0.1rem] hover:border-none border-[#6c757d] focus:bg-[#6c757d]" tabIndex="0">SEO</button>
                    <button className="hover:bg-[#6c757d] transition-all duration-500 text-[1rem] md:text-[1.12rem] text-white py-1 lg:py-3 px-1 md:px-3 lg:px-4 rounded-[40rem] border-[0.1rem] hover:border-none border-[#6c757d] focus:bg-[#6c757d]" tabIndex="0">Shopify</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {
                        projects.map((item, idx) => (

                            <SwiperSlide key={idx}>
                                <Link to={`/projectDetails/${item.id}`}>
                                    <div className="">
                                        <div className="w-full pl-8 sm:pl-14 xl:pl-24 pt-20 pr-8 sm:pr-14 xl:pr-24 bg-[#252734]">
                                            <img className="h-[40vh]" src={item.img} alt="" />

                                        </div>
                                        <h3 className="text-3xl font-poppins font-medium text-white pt-10">{item.title}</h3>
                                        <p className=' text-white font-poppins pt-4'>{item.type}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Projects;