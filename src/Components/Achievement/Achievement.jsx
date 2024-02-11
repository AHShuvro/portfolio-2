import React from 'react';
import { achievements } from '../../Data/Data';

const Achievement = () => {
    return (
        <>
            <div className='bg-[#282A37] py-20 md:py-20 lg:py-24 xl:py-[10.5rem]'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-around container'>
                    {
                        achievements.map((item, idx) => (
                            <div key={idx} className='flex flex-col lg:flex-row items-center space-x-6'>
                                <img className='p-6 border-[0.125rem] border-[#40424d] rounded-2xl mr-10' src={item.img} alt="" />
                                <div className=''>
                                    <p className='text-[3.25rem] text-white font-poppins mb-6'>{item.Quantity}+</p>
                                    <p className='text-[#858792] font-poppins'>{item.type}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Achievement;