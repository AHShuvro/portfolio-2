import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const Testimonial = () => {
    return (
        <div className="bg-[#252734] px-3 py-20 md:py-20 lg:py-24 xl:py-[10.5rem]">
            <div className="container mx-auto">
                <div className="flex justify-start">
                    <div>
                        <p className='text-[1.12rem] font-light text-[#858792] font-poppins text-start'> ||  Testimonial
                        </p>
                        <h2 className=' text-[#fff] text-[2.25rem] md:text-[2.5rem] lg:text-[3.12rem] xl:text-[4.37rem] font-bold mt-4 text-start'>Satisfied Clients Say</h2>
                    </div>
                </div>
                <div className="pt-12 md:pt-14 lg:pt-16 xl:pt-[6.5rem]">
                    <Swiper
                        navigation={true}
                        autoplay={true}
                        modules={[Navigation, Autoplay]}
                        speed={2000}
                        className="mySwiper">

                        <SwiperSlide>
                            <div className="h-96 w-full bg-[#282A37] flex flex-col items-start justify-center px-24">
                                <p className='text-white text-[2rem] pb-6'>Exceptional service! They turned my outdated website into a sleek masterpiece. Highly recommend for anyone seeking top-notch web development.</p>
                                <p className='text-white text-[2rem] font-poppins pb-3'>Alexander Flik</p>
                                <p className='text-[#858792] text-[1.2rem] font-poppins'>BlueTech Solutions</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-96 w-full bg-[#282A37] flex flex-col items-start justify-center px-24">
                                <p className='text-white text-[2rem] pb-6'>Incredible attention to detail! Their team transformed my vision into a stunning reality. Couldn't be happier with the results!</p>
                                <p className='text-white text-[2rem] font-poppins pb-3'>Thomas</p>
                                <p className='text-[#858792] text-[1.2rem] font-poppins'>PixelPerfect WebWorks</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-96 w-full bg-[#282A37] flex flex-col items-start justify-center px-24">
                                <p className='text-white text-[2rem] pb-6'>Outstanding professionalism! From start to finish, they exceeded my expectations. The website they created surpassed all others in design and functionality. Amazing job!</p>
                                <p className='text-white text-[2rem] font-poppins pb-3'>Emily</p>
                                <p className='text-[#858792] text-[1.2rem] font-poppins'>CodeCraft Studios</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-96 w-full bg-[#282A37] flex flex-col items-start justify-center px-24">
                                <p className='text-white text-[2rem] pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempore? Nam consequuntur natus rerum minus. Ratione, id!</p>
                                <p className='text-white text-[2rem] font-poppins pb-3'>Lorem, ipsum.</p>
                                <p className='text-[#858792] text-[1.2rem] font-poppins'>Lorem.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>


                </div>
            </div>
        </div>
    );
};

export default Testimonial;