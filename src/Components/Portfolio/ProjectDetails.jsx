
import { FaAnglesRight } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import StickyBox from 'react-sticky-box';
import { projects } from '../../Data/Data';
import { useEffect, useRef } from 'react';

const ProjectDetails = () => {

    const { id } = useParams();
    const topRef = useRef(null);


    const project = projects.find(project => project.id == id);

    useEffect(() => {
        if (topRef.current) {
            topRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    }, [project]);

    return (
        <>
            <div ref={topRef}></div>
            <div className='container mx-auto my-20 md:mt-20 lg:mt-24 xl:mt-[10.5rem]'>
                <div >
                    <div className='flex flex-col xl:flex-row overflow-ellipsis justify-around mt-[7.5rem]' style={{ display: "flex", alignItems: "flex-start" }}>

                        <div className='w-full px-3 xl:w-3/5'>
                            <img className='w-full' src={project.img} alt="" />
                            <div className=''>
                                <p className='text-[#858792] font-poppins pt-8'>{project.projectName}</p>
                                <h3 className='text-[2rem] md:text-[2rem] lg:text-[3rem] xl:text-[4rem] text-[#fff] font-bold mt-4 leading-none'>{project.title}</h3>
                                <p className='text-[#858792] font-poppins pt-6'>{project.description}</p>
                            </div>
                            <div className='mt-16'>
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
                        <StickyBox className='hidden xl:flex justify-between w-2/5' offsetTop={260} offsetBottom={0}>
                            <div></div>
                            <div className=' w-2/3 bg-[#252734] text-white flex flex-col px-10 py-12 '>
                                <h3 className='text-[3rem] mb-[3rem]'>Projects</h3>

                                {
                                    projects.map((item, idx) => (
                                        <Link key={idx} to={`/projectDetails/${item.id}`}><div className='flex justify-between items-center px-8 py-6 bg-[#2A2C39] mb-5'>
                                            <p className='text-[1rem] font-normal font-poppins'>
                                                {item.projectName}</p>
                                            <FaAnglesRight className='text-[1.2rem]' />
                                        </div></Link>
                                    ))
                                }

                            </div>
                        </StickyBox>

                        <div className='xl:hidden w-full xl:w-2/3 bg-[#252734] text-white flex flex-col px-10 py-12 mt-14 '>
                            <h3 className='text-[3rem] mb-[3rem]'>Projects</h3>

                            {
                                projects.map((item, idx) => (
                                    <Link key={idx} to={`/projectDetails/${item.id}`}><div className='flex justify-between items-center px-8 py-6 bg-[#2A2C39] mb-5'>
                                        <p className='text-[1rem] font-normal font-poppins'>
                                            {item.projectName}</p>
                                        <FaAnglesRight className='text-[1.2rem]' />
                                    </div></Link>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>







        </>
    );
};

export default ProjectDetails;