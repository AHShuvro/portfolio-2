import { IoPlay } from "react-icons/io5";
import "./About.css"


const About = () => {
    return (
        <>
            <div className='text-white flex justify-between container mt-32 mb-32'>
                <div className='w-[28.75rem] h-[24.75rem] bg-[#252734] flex flex-col items-center justify-center gap-12'>

                    <div className="h-20 w-20 rounded-full bg-[#2A2C39] flex items-center justify-center cursor-pointer btn-ripple">
                        <IoPlay className="text-xl" />
                    </div>
                    <button className="hover:bg-[#2A2C39] transition-all duration-500 text-[1rem] text-white h-16 px-10 rounded-[40rem] border-[0.062rem] border-[#3b3d49] font-poppins mt-[3.75rem]">Get Resume </button>
                </div>
                <div className='w-3/6 '>
                    <h2 className='text-[2rem] md:text-[3.12rem] lg:text-[3.75rem] xl:text-[5.31rem] text-white font-bold'>I’m A H Shuvro</h2>
                    <h4 className='text-[1rem] md:text-[2rem] lg:text-[2.3rem] xl:text-[3rem] text-[#858792] leading-none font-semibold'>UI/UX designer specializing in shopify & webflow.</h4>
                    <p className="text-[#858792] text-left font-poppins mt-6">Lorem Ipsum is simply dummy text of the printing and pesetting industry has been the industry's standard dummy text ever since the 1500s, when an unkn own printer took galley of type and scrambled.</p>
                </div>
            </div>
        </>
    );
};

export default About;