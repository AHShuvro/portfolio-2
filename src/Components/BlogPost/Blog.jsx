import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { blogs } from "../../Data/Data";



const Blog = () => {
    return (
        <>
            <div className="container mt-32">
                <div className=" flex flex-col gap-12">
                    {
                        blogs.map((item, idx) => (
                            <div key={idx} className="flex flex-col lg:flex-row items-center justify-between p-[3.12rem] bg-[#252734]">
                                <img src="assets/img/blog-feed-img-1.webp" alt="" />
                                <div>
                                    <p className="text-[1rem] text-white font-poppins">Business - <span className=" text-[#858792]">07 February, 2021</span></p>
                                    <h3 className="text-lg lg:text-2xl leading-10 text-white font-medium font-poppins mt-6">{`Don't`} wait until you officially started <br />business to line these up.</h3>
                                </div>
                                <Link to={`/blogDetails/${item.id}`}><button className="hover:bg-[#2A2C39] transition-all duration-500 text-[1rem] text-white h-16 px-10 rounded-[40rem] border-[0.062rem] border-[#3b3d49] font-poppins">Read More {`>>`}</button></Link>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-16">
                    <div className="flex gap-4">
                        <Link><p className="text-[#858792] hover:bg-[#252734] transition duration-500 ease-in-out transform hover:scale-110 text-center font-poppins border border-[#858792] rounded-sm  w-14 h-14 flex items-center justify-center"><MdKeyboardDoubleArrowLeft /></p></Link>
                        <Link><p className="text-[#858792] hover:bg-[#252734] transition duration-500 ease-in-out transform hover:scale-110 text-center font-poppins border border-[#858792] rounded-sm w-14 h-14 flex items-center justify-center">1</p></Link>
                        <Link><p className="text-[#858792] hover:bg-[#252734] transition duration-500 ease-in-out transform hover:scale-110 text-center font-poppins border border-[#858792] rounded-sm w-14 h-14 flex items-center justify-center">2</p></Link>
                        <Link><p className="text-[#858792] hover:bg-[#252734] transition duration-500 ease-in-out transform hover:scale-110 text-center font-poppins border border-[#858792] rounded-sm w-14 h-14 flex items-center justify-center">3</p></Link>
                        <Link><p className="text-[#858792] hover:bg-[#252734] transition duration-500 ease-in-out transform hover:scale-110 text-center font-poppins border border-[#858792] rounded-sm  w-14 h-14 flex items-center justify-center"><MdKeyboardDoubleArrowRight /></p></Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Blog;