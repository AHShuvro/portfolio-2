import { useState } from 'react';

const Education = () => {
    const [active, setActive] = useState(true)
    const handleSelect = (e) => {
        setActive(e)
    }
    return (
        <>
            <div className='bg-[#252734] py-32'>
                <div className='container'>
                    <div className='flex items-center justify-between gap-8 mb-24'>
                        <div onClick={() => handleSelect(true)} className='w-full py-6 border border-[#fff1] flex items-center justify-center cursor-pointer active:bg-[#2A2C39]'>
                            <p className='text-[2.25rem] md:text-[2.5rem] lg:text-[2.81rem] xl:text-[3.62rem] text-white '>Education</p>
                        </div>
                        <div onClick={() => handleSelect(false)} className='w-full py-6 border border-[#fff1] flex items-center justify-center cursor-pointer active:bg-[#2A2C39]'>
                            <p className='text-[2.25rem] md:text-[2.5rem] lg:text-[2.81rem] xl:text-[3.62rem] text-white '>Experience</p>
                        </div>
                    </div>
                    {
                        active ? <div>
                            <div className='flex flex-col md:flex-row items-center mb-10'>
                                <div className='w-full md:w-2/6'>
                                    <p className='text-[#858792] text-start md:text-center font-poppins'>2016 - 2018</p>
                                </div>
                                <div className='w-full md:w-4/6'>
                                    <h4 className='text-[2.24rem] text-white font-semibold'>Diploma in Computer Engineering</h4>
                                    <p className='text-[#858792] font-poppins mt-6'>Kishoreganj Polytechnical Institute</p>
                                    <p className='text-[#858792] font-poppins mt-6'>
                                        {`A Diploma in Computer Engineering in Bangladesh equips students with practical skills in computer hardware, software, and networking. It covers topics such as programming languages, digital electronics, and computer architecture. Graduates are prepared for careers in IT support, system administration, and software development, contributing to Bangladesh's growing technology sector.`}</p>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row items-center mb-10'>
                                <div className='w-full md:w-2/6'>
                                    <p className='text-[#858792] text-start md:text-center font-poppins'>2016 - 2018</p>
                                </div>
                                <div className='w-full md:w-4/6'>
                                    <h4 className='text-[2.24rem] text-white font-semibold'>Secondary School Certificate (SSC)</h4>
                                    <p className='text-[#858792] font-poppins mt-6'>A G Technical School and College</p>
                                    <p className='text-[#858792] font-poppins mt-6'>Secondary School Certificate (SSC) is an academic qualification awarded upon completing secondary education in Bangladesh. It typically covers subjects like mathematics, science, languages, and social sciences, serving as a foundation for further academic pursuits or employment.</p>
                                </div>
                            </div>
                        </div>
                            :
                            <div>
                                <div className='flex flex-col md:flex-row items-center mb-10'>
                                    <div className=' w-full md:w-2/6'>
                                        <p className='text-[#858792] text-start md:text-center font-poppins'>2018 - 2019</p>
                                    </div>
                                    <div className='w-full md:w-4/6'>
                                        <h4 className='text-[2.24rem] text-white font-semibold'>No Experience</h4>
                                        <p className='text-[#858792] font-poppins mt-6'>University of California, Berkeley</p>
                                        <p className='text-[#858792] font-poppins mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.</p>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row items-center mb-10'>
                                    <div className='w-full md:w-2/6'>
                                        <p className='text-[#858792] text-start md:text-center font-poppins'>2018 - 2019</p>
                                    </div>
                                    <div className='w-full md:w-4/6'>
                                        <h4 className='text-[2.24rem] text-white font-semibold'>No Experience</h4>
                                        <p className='text-[#858792] font-poppins mt-6'>University of California, Berkeley</p>
                                        <p className='text-[#858792] font-poppins mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.</p>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row items-center mb-10'>
                                    <div className='w-full md:w-2/6'>
                                        <p className='text-[#858792] text-start md:text-center font-poppins'>2018 - 2019</p>
                                    </div>
                                    <div className='w-full md:w-4/6'>
                                        <h4 className='text-[2.24rem] text-white font-semibold'>No Experience</h4>
                                        <p className='text-[#858792] font-poppins mt-6'>University of California, Berkeley</p>
                                        <p className='text-[#858792] font-poppins mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.</p>
                                    </div>
                                </div>
                            </div>
                    }

                </div>
            </div>
        </>
    );
};

export default Education;