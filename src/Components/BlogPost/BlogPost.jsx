import { Link } from "react-router-dom";
import { blogs } from "../../Data/Data";



const BlogPost = () => {
    return (
        <>
            <div className="container mb-20 md:mb-20 lg:mb-24 xl:mb-[10.5rem]">
                <div className="">
                    <p className='text-[1.12rem] font-light text-[#858792] font-poppins text-center'> ||  Blog Post
                    </p>
                    <h2 className=' text-[#fff] text-[2.25rem] md:text-[2.5rem] lg:text-[3.12rem] xl:text-[4.37rem] font-bold mt-4 mb-[6.87rem] text-center'>Latest Tips & Tricks</h2>
                </div>
                <div className=" flex flex-col gap-12">
                    
                    {
                        blogs.slice(0, 3).map((item, idx) => (
                            <Link key={idx} to={'/blog'}><div className="flex flex-col lg:flex-row items-center justify-between p-[3.12rem] bg-[#252734]">
                                <img src="assets/img/blog-feed-img-1.webp" alt="" />
                                <div className="mt-6 mb-4 text-center md:text-balance">
                                    <p className="text-[1rem] text-white font-poppins">Business - <span className=" text-[#858792]">07 February, 2021</span></p>
                                    <h3 className="text-lg lg:text-2xl leading-10 text-white font-medium font-poppins mt-6">{`Don't`} wait until you officially started <br className="hidden md:block" />business to line these up.</h3>
                                </div>
                                <Link to={`/blogDetails/${item.id}`}><button className="hover:bg-[#2A2C39] transition-all duration-500 text-[1rem] text-white h-16 px-10 rounded-[40rem] border-[0.062rem] border-[#3b3d49] font-poppins">Read More {`>>`}</button></Link>
                            </div></Link>
                        ))
                    }
                </div>
                <div>

                </div>
            </div>
        </>
    );
};

export default BlogPost;