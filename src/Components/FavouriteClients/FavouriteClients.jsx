import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const FavouriteClients = () => {
    return (
        <>


            <div className='container mx-auto my-20 md:my-20 lg:my-24 xl:my-[10.5rem]'>
                <div>
                    <p className='text-[1.12rem] font-light text-[#858792] font-poppins'> ||  Favourite Clients
                    </p>
                    <h2 className=' text-[#fff] text-[2.25rem] md:text-[2.5rem] lg:text-[3.12rem] xl:text-[4.37rem] font-bold mt-4'>Work With Trusted Comapny.</h2>
                </div>
                <div className='flex justify-between mt-[7.5rem]'>

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={80}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        speed={2000}
                        modules={[Autoplay]}
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
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className='h-[13.75rem] hover:bg-[#252734] hover:scale-110 transition-all duration-500 rounded-lg border-[0.0625rem] border-[#353743]'>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[13.75rem] hover:bg-[#252734] hover:scale-110 transition-all duration-500 rounded-lg border-[0.0625rem] border-[#353743]'>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[13.75rem] hover:bg-[#252734] hover:scale-110 transition-all duration-500 rounded-lg border-[0.0625rem] border-[#353743]'>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[13.75rem] hover:bg-[#252734] hover:scale-110 transition-all duration-500 rounded-lg border-[0.0625rem] border-[#353743]'>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[13.75rem] hover:bg-[#252734] hover:scale-110 transition-all duration-500 rounded-lg border-[0.0625rem] border-[#353743]'>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[13.75rem] hover:bg-[#252734] hover:scale-110 transition-all duration-500 rounded-lg border-[0.0625rem] border-[#353743]'>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[13.75rem] hover:bg-[#252734] hover:scale-110 transition-all duration-500 rounded-lg border-[0.0625rem] border-[#353743]'>

                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>


        </>
    );
};

export default FavouriteClients;