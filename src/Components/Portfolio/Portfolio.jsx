import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { projects } from '../../Data/Data';


const Portfolio = () => {
    return (
        <div className='mx-auto my-20 md:mt-20 lg:my-24 xl:my-[10.5rem]'>
            <div className='container mx-auto'>
                <p className='text-[1.12rem] font-light text-[#858792] font-poppins'> ||  My Services</p>
                <h2 className='text-[2.25rem] md:text-[2.5rem] lg:text-[3.12rem] xl:text-[4.37rem] text-[#fff] font-bold mt-4'>Service Provide For My Clients.</h2>
            </div>

            <div className='flex justify-between mt-[7.5rem]'>
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    modules={[Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 1.5,
                        },
                        1200: {
                            slidesPerView: 2.5
                        }
                    }}
                >
                    {
                        projects.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="card w-[45.31rem] bg-[#2A2C39]">
                                    <figure className="px-10 pt-10">
                                        <img src={item.img} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-start text-start">
                                        <h2 className="text-3xl font-poppins font-medium text-white">{item.title}</h2>
                                        <p className=' text-white font-poppins'>{item.type}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Portfolio;
