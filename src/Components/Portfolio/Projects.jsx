import { SwiperSlide } from "swiper/react";
import { projects } from "../../Data/Data";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const Projects = () => {
    
    const [currentProjectPage, setCurrentProjectPage] = useState(1);
    const [totalProjectPages, setTotalProjectPages] = useState(1);
    const topRef = useRef(null);

    useEffect(() => {
        const calculateTotalPages = () => {
            const totalProject = projects.length / 4;

            if (totalProject > Math.floor(totalProject)) {
                setTotalProjectPages(Math.floor(totalProject) + 1);
            } else {
                setTotalProjectPages(Math.floor(totalProject));
            }
        };

        calculateTotalPages();
    }, [currentProjectPage]);

    const handlePage = (newPage) => {
        setCurrentProjectPage(newPage);

    };

    useEffect(() => {
        if (topRef.current) {
            topRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    }, [currentProjectPage]);

    //jdfj


    return (
        <>
            <div ref={topRef} className="container py-8 md:py-16 lg:py-32">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-6 px-2 md:px-0 mb-6 md:mb-8 lg:mb-12">
                    <button className="hover:bg-[#6c757d] transition-all duration-500 text-[1rem] md:text-[1.12rem] text-white py-1 lg:py-3 px-1 md:px-3 lg:px-4 rounded-[40rem] border-[0.1rem] hover:border-none border-[#6c757d] focus:bg-[#6c757d]" tabIndex="0">All</button>
                    <button className="hover:bg-[#6c757d] transition-all duration-500 text-[1rem] md:text-[1.12rem] text-white py-1 lg:py-3 px-1 md:px-3 lg:px-4 rounded-[40rem] border-[0.1rem] hover:border-none border-[#6c757d] focus:bg-[#6c757d]" tabIndex="0">HTML</button>
                    <button className="hover:bg-[#6c757d] transition-all duration-500 text-[1rem] md:text-[1.12rem] text-white py-1 lg:py-3 px-1 md:px-3 lg:px-4 rounded-[40rem] border-[0.1rem] hover:border-none border-[#6c757d] focus:bg-[#6c757d]" tabIndex="0">Wordpress</button>
                    <button className="hover:bg-[#6c757d] transition-all duration-500 text-[1rem] md:text-[1.12rem] text-white py-1 lg:py-3 px-1 md:px-3 lg:px-4 rounded-[40rem] border-[0.1rem] hover:border-none border-[#6c757d] focus:bg-[#6c757d]" tabIndex="0">SEO</button>
                    <button className="hover:bg-[#6c757d] transition-all duration-500 text-[1rem] md:text-[1.12rem] text-white py-1 lg:py-3 px-1 md:px-3 lg:px-4 rounded-[40rem] border-[0.1rem] hover:border-none border-[#6c757d] focus:bg-[#6c757d]" tabIndex="0">Shopify</button>
                </div>
                <p className="text-[#858792] font-poppins mb-6">Showing {((currentProjectPage - 1) * 4) + 1}-{currentProjectPage * 4} of {projects.length} results</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {
                        projects.slice((currentProjectPage - 1) * 4, currentProjectPage * 4).map((item, idx) => (

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
                <div className="mt-16">
                    <div className="flex gap-4">
                        <Link className={`${currentProjectPage === 1 ? "hidden" : ""}`}><p onClick={() => handlePage(currentProjectPage - 1)} className="text-[#858792] hover:bg-[#252734] transition duration-500 ease-in-out transform hover:scale-110 text-center font-poppins border border-[#858792] rounded-sm  w-14 h-14 flex items-center justify-center"><MdKeyboardDoubleArrowLeft /></p></Link>
                        {Array.from({ length: totalProjectPages }).map((_, index) => (
                            <Link key={index}><p onClick={() => handlePage(index + 1)} className="text-[#858792] hover:bg-[#252734] transition duration-500 ease-in-out transform hover:scale-110 text-center font-poppins border border-[#858792] rounded-sm w-14 h-14 flex items-center justify-center">{index + 1}</p></Link>
                        ))}
                        <Link className={`${currentProjectPage === totalProjectPages ? "hidden" : ""}`}><p onClick={() => handlePage(currentProjectPage + 1)} className="text-[#858792] hover:bg-[#252734] transition duration-500 ease-in-out transform hover:scale-110 text-center font-poppins border border-[#858792] rounded-sm  w-14 h-14 flex items-center justify-center"><MdKeyboardDoubleArrowRight /></p></Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Projects;