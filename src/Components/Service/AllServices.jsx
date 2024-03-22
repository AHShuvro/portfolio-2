import { MdWeb } from "react-icons/md";
import { CgChevronDoubleRight } from "react-icons/cg";
import { services } from '../../Data/Data';
import { Link } from 'react-router-dom';

const AllServices = () => {




    return (
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center justify-center my-[7.5rem]'>

                {
                    services.map((item, idx) => (
                        <div key={idx} className='min-h-[32.18rem] bg-[#252734] text-white flex flex-col p-16'>
                            <Link to={`/serviceDetails/${item.id}`}><MdWeb className='text-[3.5rem] mb-[3rem]' />
                                <h3 className='text-[1.75rem] mb-[3rem] font-poppins'>{item.name}</h3>
                                <p className='text-[#858792] text-[1rem] font-normal pb-3 font-poppins  flex items-center gap-6'><CgChevronDoubleRight />
                                    {item.s1}</p>
                                <p className='text-[#858792] text-[1rem] font-normal pb-3 font-poppins  flex items-center gap-6'><CgChevronDoubleRight />
                                    {item.s2}</p>
                                <p className='text-[#858792] text-[1rem] font-normal pb-3 font-poppins  flex items-center gap-6'><CgChevronDoubleRight />
                                    {item.s3}</p>
                                <p className='text-[#858792] text-[1rem] font-normal pb-3 font-poppins  flex items-center gap-6'><CgChevronDoubleRight />
                                    {item.s4}</p>
                                <p className='text-[#858792] text-[1rem] font-normal pb-3 font-poppins  flex items-center gap-6'><CgChevronDoubleRight />
                                    {item.s5}</p></Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllServices;