import { RiDownload2Fill } from "react-icons/ri";



const Skills = () => { 
    
    return (
        <>
            <div className='flex-1 bg-[#252734] px-3 mt-20 md:mt-20 lg:mt-24 xl:mt-[10.5rem] py-20 md:py-20 lg:py-24 xl:py-[10.5rem]'>
                <div className='container flex flex-col xl:flex-row gap-20 items-center justify-between'>
                    <div>
                        <p className='text-[1.12rem] font-light text-[#858792] font-poppins'> ||  Special Skills</p>
                        <h2 className='text-[2.25rem] md:text-[2.5rem] lg:text-[3.12rem] xl:text-[4.37rem] text-[#fff] font-bold mt-4'>My Special Skill Field Here.</h2>
                        <div className='flex items-center justify-between gap-4 h-16 w-[14.5rem] mt-14 md:mt-16 lg:mt-20 xl:mt-24 px-10 rounded-[40rem] border-[0.062rem] border-[#3b3d49]'>
                            <button className=" hover:bg-[#2A2C39] transition-all duration-500 text-[1rem] text-white font-poppins">Get Resume </button>
                            <RiDownload2Fill className="text-white text-xl" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <div className='h-[9.37rem] w-full xl:w-[35.62rem] bg-[#2A2C39] rounded-md flex flex-col justify-center p-10'>
                            <div className='flex justify-between text-[#858792] font-poppins'>
                                <p className='mb-10'>Communication</p>
                            </div>
                            <progress></progress>
                        </div>
                        <div className='h-[9.37rem] w-full xl:w-[35.62rem] bg-[#2A2C39] rounded-md flex flex-col justify-center p-10'>
                            <div className='flex justify-between text-[#858792] font-poppins'>
                                <p className='mb-10'>Leadership</p>
                            </div>
                            <progress></progress>
                        </div>
                        <div className='h-[9.37rem] w-full xl:w-[35.62rem] bg-[#2A2C39] rounded-md flex flex-col justify-center p-10'>
                            <div className='flex justify-between text-[#858792] font-poppins'>
                                <p className='mb-10'>Teamwork</p>
                            </div>
                            <progress></progress>
                        </div>
                        <div className='h-[9.37rem] w-full xl:w-[35.62rem] bg-[#2A2C39] rounded-md flex flex-col justify-center p-10'>
                            <div className='flex justify-between text-[#858792] font-poppins'>
                                <p className='mb-10'>Flexibility</p>
                            </div>
                            <progress></progress>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Skills;