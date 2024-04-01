import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdWeb } from "react-icons/md";
import { CgChevronDoubleRight } from "react-icons/cg";
import { services } from '../../Data/Data';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";

const AllServices = () => {


    const [currentServicePage, setCurrentServicePage] = useState(1);
    const [totalServicePages, setTotalServicePages] = useState(1);
    const topRef = useRef(null);

    useEffect(() => {
        const calculateTotalPages = () => {
            const totalService = services.length / 6;

            if (totalService > Math.floor(totalService)) {
                setTotalServicePages(Math.floor(totalService) + 1);
            } else {
                setTotalServicePages(Math.floor(totalService));
            }
        };

        calculateTotalPages();
    }, [currentServicePage]);

    const handlePage = (newPage) => {
        setCurrentServicePage(newPage);

    };

    useEffect(() => {
        if (topRef.current) {
            topRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    }, [currentServicePage]);



    return (
        <div ref={topRef} className='container'>
            <p className="text-[#858792] font-poppins mb-6 mt-[7.5rem]">Showing {((currentServicePage - 1) * 6) + 1}-{currentServicePage * 6} of {services.length} results</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center justify-center mb-[7.5rem]'>

                {
                    services.slice((currentServicePage - 1) * 6, currentServicePage * 6).map((item, idx) => (
                        <div key={idx} className='min-h-[32.18rem] bg-[#252734] text-white flex flex-col p-16'>
                            <Link to={`/serviceDetails/${item.id}`}><MdWeb className='text-[3.5rem] mb-[3rem]' />
                                <h3 className='text-[1.75rem] mb-[3rem] font-poppins'>{item.name}</h3>
                                <p className='text-[#858792] text-[1rem] font-normal pb-3 font-poppins  flex items-center gap-6'><CgChevronDoubleRight />
                                    {item.s1}</p>
                                <p className='text-[#858792] text-[1rem] font-normal pb-3 font-poppins  flex items-center gap-6'><CgChevronDoubleRight />
                                    {item.s2}</p>
                                <p className='text-[#858792] text-[1rem] font-normal pb-3 font-poppins  flex items-center gap-6'><CgChevronDoubleRight />
                                    {item.s3}</p>
                                <p className='text-[#858792] text-[1rem] font-normal pb-3 font-poppins  flex items-center gap-6'><CgChevronDoubleRight />
                                    {item.s4}</p>
                                <p className='text-[#858792] text-[1rem] font-normal pb-3 font-poppins  flex items-center gap-6'><CgChevronDoubleRight />
                                    {item.s5}</p></Link>
                        </div>
                    ))
                }
            </div>

            <div className="mt-16">
                <div className="flex gap-4">
                    <Link className={`${currentServicePage === 1 ? "hidden" : ""}`}><p onClick={() => handlePage(currentServicePage - 1)} className="text-[#858792] hover:bg-[#252734] transition duration-500 ease-in-out transform hover:scale-110 text-center font-poppins border border-[#858792] rounded-sm  w-14 h-14 flex items-center justify-center"><MdKeyboardDoubleArrowLeft /></p></Link>
                    {Array.from({ length: totalServicePages }).map((_, index) => (
                        <Link key={index}><p onClick={() => handlePage(index + 1)} className="text-[#858792] hover:bg-[#252734] transition duration-500 ease-in-out transform hover:scale-110 text-center font-poppins border border-[#858792] rounded-sm w-14 h-14 flex items-center justify-center">{index + 1}</p></Link>
                    ))}
                    <Link className={`${currentServicePage === totalServicePages ? "hidden" : ""}`}><p onClick={() => handlePage(currentServicePage + 1)} className="text-[#858792] hover:bg-[#252734] transition duration-500 ease-in-out transform hover:scale-110 text-center font-poppins border border-[#858792] rounded-sm  w-14 h-14 flex items-center justify-center"><MdKeyboardDoubleArrowRight /></p></Link>
                </div>

            </div>
        </div>
    );
};

export default AllServices;