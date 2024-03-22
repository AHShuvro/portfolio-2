import './Banner1.css'
import { Link } from 'react-router-dom';

const ServiceBanner = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-8 bg-[#252734] w-full pt-32 pb-[11.25rem] text-white'>
                <h3 className=' head'>Services</h3>
                <div className='bg-[#2a2c39] px-10 py-5 rounded-full'>
                    <p className='text-[1rem] font-poppins'> <span className='text-[#858792]'><Link to={"/"}>Home</Link></span> || Service List</p>
                </div>
            </div>
        </>
    );
};

export default ServiceBanner;