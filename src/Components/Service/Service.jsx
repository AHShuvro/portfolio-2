import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';


import './../Font.css'
import { MdWeb } from "react-icons/md";
import { CgChevronDoubleRight } from "react-icons/cg";
import { services } from '../../Data/Data';
import { Link } from 'react-router-dom';


const Service = () => {
    return (
        <>
            <div className='container mx-auto mt-20 md:mt-20 lg:mt-24 xl:mt-[10.5rem]'>
                <div className='px-6 sm:p-0'>
                    <p className='text-[1.12rem] font-light text-[#858792] font-poppins'> ||  My Services</p>
                    <h2 className='text-[2.25rem] md:text-[2.5rem] lg:text-[3.12rem] xl:text-[4.37rem] text-[#fff] font-bold mt-4'>Service Provide For My Clients.</h2>
                </div>
                <div className='flex justify-between mt-[7.5rem]'>




                    <Swiper

                        spaceBetween={70}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        speed={2000}
                        modules={[Pagination, Autoplay]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 2
                            },
                            1450: {
                                slidesPerView: 3
                            },
                        }}
                    >

                        {
                            services.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <Link to={'/service'}><div className='min-h-[32.18rem] bg-[#252734] text-white flex flex-col p-16 rounded-2xl'>
                                        <MdWeb className='text-[3.5rem] mb-[3rem]' />
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
                                            {item.s5}</p>
                                    </div></Link>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>

                </div>
            </div>
        </>
    );
};

export default Service;

