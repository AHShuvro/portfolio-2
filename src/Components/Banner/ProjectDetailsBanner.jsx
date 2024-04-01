import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetailsBanner = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center gap-8 bg-[#252734] w-full pt-32 pb-[11.25rem] text-white'>
                <h3 className=' head'>Projects Details</h3>
                <div className='bg-[#2a2c39] px-10 py-5 rounded-full'>
                    <p className='text-[1rem] font-poppins'> <span className='text-[#858792]'><Link to={"/projectDetails"}>Home</Link></span> || Projects Details</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsBanner;