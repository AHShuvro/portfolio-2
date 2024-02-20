import React, { useState } from 'react';

const Education = () => {
    const [active, setActive] = useState(true)
    const handleSelect = (e) => {
        setActive(e)
    }
    return (
        <>
            <div className='bg-[#252734] pt-32'>
                <div className='container '>
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
                            <div className='flex items-center mb-10'>
                                <div className='w-2/6'>
                                    <p className='text-[#858792] text-center font-poppins'>2016 - 2018</p>
                                </div>
                                <div className='w-4/6'>
                                    <h4 className='text-[2.24rem] text-white font-semibold'>Bachelor of Business Administration</h4>
                                    <p className='text-[#858792] font-poppins mt-6'>University of California, Berkeley</p>
                                    <p className='text-[#858792] font-poppins mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.</p>
                                </div>
                            </div>
                            <div className='flex items-center mb-10'>
                                <div className='w-2/6'>
                                    <p className='text-[#858792] text-center font-poppins'>2016 - 2018</p>
                                </div>
                                <div className='w-4/6'>
                                    <h4 className='text-[2.24rem] text-white font-semibold'>Bachelor of Business Administration</h4>
                                    <p className='text-[#858792] font-poppins mt-6'>University of California, Berkeley</p>
                                    <p className='text-[#858792] font-poppins mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-2/6'>
                                    <p className='text-[#858792] text-center font-poppins'>2016 - 2018</p>
                                </div>
                                <div className='w-4/6'>
                                    <h4 className='text-[2.24rem] text-white font-semibold'>Bachelor of Business Administration</h4>
                                    <p className='text-[#858792] font-poppins mt-6'>University of California, Berkeley</p>
                                    <p className='text-[#858792] font-poppins mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.</p>
                                </div>
                            </div>
                        </div>
                            :
                            <div>
                                <div className='flex items-center mb-10'>
                                    <div className='w-2/6'>
                                        <p className='text-[#858792] text-center font-poppins'>2017 - 2019</p>
                                    </div>
                                    <div className='w-4/6'>
                                        <h4 className='text-[2.24rem] text-white font-semibold'>Web Designer</h4>
                                        <p className='text-[#858792] font-poppins mt-6'>University of California, Berkeley</p>
                                        <p className='text-[#858792] font-poppins mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.</p>
                                    </div>
                                </div>
                                <div className='flex items-center mb-10'>
                                    <div className='w-2/6'>
                                        <p className='text-[#858792] text-center font-poppins'>2017 - 2019</p>
                                    </div>
                                    <div className='w-4/6'>
                                        <h4 className='text-[2.24rem] text-white font-semibold'>Web Designer</h4>
                                        <p className='text-[#858792] font-poppins mt-6'>University of California, Berkeley</p>
                                        <p className='text-[#858792] font-poppins mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.</p>
                                    </div>
                                </div>
                                <div className='flex items-center mb-10'>
                                    <div className='w-2/6'>
                                        <p className='text-[#858792] text-center font-poppins'>2017 - 2019</p>
                                    </div>
                                    <div className='w-4/6'>
                                        <h4 className='text-[2.24rem] text-white font-semibold'>Web Designer</h4>
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