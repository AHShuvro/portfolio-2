import './Banner1.css'
import './../Font.css'
const Banner1 = () => {
    return (
        <>
            <div className='bg-[#252734] py-20 md:py-20 lg:py-24 xl:py-[10.5rem]'>
                <div className='flex items-center justify-between container '>
                    <div className='flex flex-col items-start justify-center'>
                        <h3 className='text-[2rem] md:text-[3.12rem] lg:text-[3.75rem] xl:text-[5.31rem] text-white font-bold'>{`Hello! I’m`}</h3>
                        <h1 className='sm:text-[3.75rem] md:text-[5.31rem] lg:text-[6.87rem] xl:text-[8.75rem]  text-white flex-1 -mt-6 font-bold'>A H <span className='relative'>Shuvro <img className='absolute right-0 bottom-3' src="assets/img/mark-shape.webp" alt="" /></span></h1>
                        <p className='text-[#858792] font-poppins text-[1rem] md:text-[1.12rem] lg:text-[1.37rem] xl:text-[1.37rem]'>Front-end developer specializing in Shopify & Webflow.</p>
                        <button className="hover:bg-[#2A2C39] transition-all duration-500 text-[1rem] text-white h-16 px-10 rounded-[40rem] border-[0.062rem] border-[#3b3d49] font-poppins mt-[3.75rem]">Get Resume </button>
                    </div>
                    <div>
                        {/* <img src="assets/img/portrait-hero.webp" alt="" /> */}
                    </div>

                </div>
            </div>
        </>
    );
};

export default Banner1;