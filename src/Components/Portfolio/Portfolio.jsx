import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Portfolio = () => {
    return (
        <div className='my-20 md:my-20 lg:my-24 xl:my-[10.5rem]'>

            <Swiper
                slidesPerView={2.5}
                spaceBetween={30}
                centeredSlides={true}
                navigation={{
                    nextEl: '.btn-next',
                    prevEl: '.btn-prev',
                }}
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
                <SwiperSlide className=''>
                    <div className="card w-[45.31rem] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Project title</h2>
                            <p>Project Type</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="card w-[45.31rem] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Project title</h2>
                            <p>Project Type</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="card w-[45.31rem] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Project title</h2>
                            <p>Project Type</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="card w-[45.31rem] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="card w-[45.31rem] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;
