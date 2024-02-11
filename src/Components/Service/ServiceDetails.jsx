import './../Font.css'
import { FaAnglesRight } from "react-icons/fa6";
import StickyBox from 'react-sticky-box';

const ServiceDetails = () => {
    return (
        <>
            <div className='container mx-auto mt-20 md:mt-20 lg:mt-24 xl:mt-[10.5rem]'>
                <div >
                    <div className='flex overflow-ellipsis justify-around mt-[7.5rem]' style={{ display: "flex", alignItems: "flex-start" }}>
                        <StickyBox className='w-2/5' offsetTop={260} offsetBottom={0}>
                            <div className=' w-2/3 bg-[#252734] text-white flex flex-col px-10 py-12 '>
                                <h3 className='text-[3rem] mb-[3rem]'>Category</h3>

                                <div className='flex justify-between items-center px-8 py-6 bg-[#2A2C39] mb-5'>
                                    <p className='text-[1rem] font-normal font-poppins'>
                                        Web Development</p>
                                    <FaAnglesRight className='text-[1.2rem]' />
                                </div>
                                <div className='flex justify-between items-center px-8 py-6 bg-[#2A2C39] mb-5'>
                                    <p className='text-[1rem] font-normal font-poppins'>
                                        AI/ML</p>
                                    <FaAnglesRight className='text-[1.2rem]' />
                                </div>
                                <div className='flex justify-between items-center px-8 py-6 bg-[#2A2C39] mb-5'>
                                    <p className='text-[1rem] font-normal font-poppins'>
                                        Web Development</p>
                                    <FaAnglesRight className='text-[1.2rem]' />
                                </div>
                                <div className='flex justify-between items-center px-8 py-6 bg-[#2A2C39] mb-5'>
                                    <p className='text-[1rem] font-normal font-poppins'>
                                        Web Development</p>
                                    <FaAnglesRight className='text-[1.2rem]' />
                                </div>
                            </div>
                        </StickyBox>
                        <div className='w-3/5'>
                            <img className='w-full' src="../../../public/assets/img/service-details-img.webp" alt="" />
                            <div className=''>
                                <p > ||  Special Skills</p>
                                <h2 >My Special Skill Field Here.</h2>

                                <h2 className='text-[1.12rem] font-light text-[#858792] font-poppins'>UI/UX Design</h2>

                                <h3 className='text-[2rem] md:text-[2rem] lg:text-[3rem] xl:text-[4rem] text-[#fff] font-bold mt-4 leading-tight'>UI design can make easy your complex product.</h3>

                                <p className='text-[#858792] font-poppins pt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>

                                <p className='text-[#858792] font-poppins pt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled electronic.</p>

                                <p className='text-[#858792] font-poppins pt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled electronic.</p>
                            </div>
                            <div className='mt-16'>
                                <h3 className='text-[2rem] md:text-[2rem] lg:text-[3rem] xl:text-[4rem] text-[#fff] font-bold mt-4 leading-tight'>UI design can make easy your complex product.</h3>

                                <p className='text-[#858792] font-poppins pt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>

                                <div className='flex flex-col justify-between items-center'>
                                    <div className='flex justify-between items-center'>
                                        <div className='w-2/6'>
                                            <h3 className='text-[1rem] md:text-[1.5rem] lg:text-[1.62rem] xl:text-[1.75rem] text-[#fff] font-bold font-poppins mt-4 leading-tight'>Leadership</h3>
                                        </div>
                                        <div className='w-4/6'>
                                            <p className='text-[#858792] font-poppins pt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className='w-2/6'>
                                            <h3 className='text-[1rem] md:text-[1.5rem] lg:text-[1.62rem] xl:text-[1.75rem] text-[#fff] font-bold font-poppins mt-4 leading-tight'>Team Work</h3>
                                        </div>
                                        <div className='w-4/6'>
                                            <p className='text-[#858792] font-poppins pt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className='w-2/6'>
                                            <h3 className='text-[1rem] md:text-[1.5rem] lg:text-[1.62rem] xl:text-[1.75rem] text-[#fff] font-bold font-poppins mt-4 leading-tight'>Flexibility</h3>
                                        </div>
                                        <div className='w-4/6'>
                                            <p className='text-[#858792] font-poppins pt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                                        </div>
                                    </div>
                                </div>

                                <p className='text-[#858792] font-poppins pt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled electronic.</p>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </>
    );
};

export default ServiceDetails;