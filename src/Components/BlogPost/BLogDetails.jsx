
import { useParams } from 'react-router-dom';
import { blogs } from '../../Data/Data';

const BLogDetails = () => {

    const { id } = useParams();

    const blog = blogs.find(blog => blog.id == id);

    
    return (
        <>
            <div className="text-white container mt-32 mb-20">
                <div className="flex items-center justify-between">
                    <p className='text-[1.12rem] font-light text-[#858792] font-poppins'>{blog.category}</p>
                    <div className="flex gap-12 items-center">
                        <div>
                            <p className='text-[#858792] text-[1rem] font-normal font-poppins  '>by {blog.name}</p>
                        </div>
                        <div>
                            <p className='text-[#858792] text-[1rem] font-normal font-poppins  '>{blog.date}</p>
                        </div>
                    </div>
                </div>
                <h3 className='text-[2.25rem] md:text-[2.5rem] lg:text-[3.12rem] xl:text-[4.37rem] text-[#fff] font-bold mt-3 pb-10'>{blog.title1}</h3>
                <p className='text-[#858792] text-[1rem] font-normal font-poppins pb-8 '>{blog.description}</p>
                <div className="flex space-x-6 items-center pb-6">
                    <img className="w-1/2 h-[30rem]" src="../../../public/assets/img/blog-details-1.webp" alt="" />
                    <img className="w-1/2 h-[30rem]" src="../../../public/assets/img/blog-details-2.webp" alt="" />
                </div>
                <h3 className='text-[2.25rem] md:text-[2.5rem] lg:text-[3.12rem] xl:text-[4.37rem] text-[#fff] font-bold mt-2 pb-10 leading-none'>{blog.title2}</h3>
                <p className='text-[#858792] text-[1rem] font-normal font-poppins pb-8 '>{blog.description}</p>
                <div className="flex justify-between items-center bg-[#252734] px-12 py-6 mt-8">
                    <div>
                        <p className=" text-[1rem] font-semibold font-poppins  ">Tags:</p>
                        <div className="flex gap-6 items-center pt-1">
                            <p className="text-[#858792] text-[1rem] font-normal font-poppins ">portfolio</p>
                            <p className="text-[#858792] text-[1rem] font-normal font-poppins ">charity</p>
                            <p className="text-[#858792] text-[1rem] font-normal font-poppins ">personal</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        icon
                    </div>
                </div>
            </div>
        </>
    );
};

export default BLogDetails;