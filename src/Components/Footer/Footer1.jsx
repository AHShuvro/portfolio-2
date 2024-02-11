import { FaPhoneAlt, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiGithubFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer1 = () => {
    return (
        <div className="bg-[#252734] ">
            <div className="container flex flex-1 flex-col py-20 md:py-20 lg:py-24 xl:py-[10.5rem]">
                <div>
                    <p className='text-[1.12rem] font-light text-[#858792] font-poppins text-center'> ||  Get Latest Updates
                    </p>
                    <h2 className=' text-[#fff] text-[2.25rem] md:text-[2.5rem] lg:text-[3.12rem] xl:text-[4.37rem] font-bold mt-4 text-center'>Subscribe For Newsletter</h2>
                </div>
                <div className="flex items-center justify-center gap-6 mt-[7rem] pb-20 md:pb-20 lg:pb-24 xl:pb-[10.5rem]">
                    <input type="text" placeholder="Enter Email..." className="input h-16 transition-all duration-500 bg-transparent border-[0.15rem] border-[#3b3d49] hover:border-white w-full rounded-full lg:w-[37.5rem]" />

                    <button className="hover:bg-[#2A2C39] transition-all duration-500 text-[1.12rem] text-white h-16 w-[11.31rem] rounded-[40rem] border-[0.15rem] border-[#3b3d49] hover:border-white">Subscribe Now</button>
                </div>
                <div className="flex flex-col lg:flex-col xl:flex-row justify-between items-start xl:items-center ">
                    <div className="flex items-center gap-6">
                        <button className=" p-4 md:p-6 lg:p-8 rounded-full border-[0.1rem] active:bg-slate-50 text-white active:text-black border-[#3b3d49]"><FaPhoneAlt /></button>
                        <p className=" text-[1.15rem] md:text-[1.37rem] lg:text-[1.62rem] text-white font-poppins font-light">01609238469</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className=" p-4 md:p-6 lg:p-8 rounded-full border-[0.1rem] active:bg-slate-50 text-white active:text-black border-[#3b3d49]"><MdEmail />
                        </button>
                        
                        <Link to={'mailto:abc@example.com?subject = Feedback&body = Message'}><p className=" text-[1.15rem] md:text-[1.37rem] lg:text-[1.62rem] text-white font-poppins font-light">ahshuvro77777@gmail.com</p></Link>
                    </div>
                    <div className="">
                        
                        
                        <Link to={'https://www.linkedin.com/in/ahshuvro77777/'}><button className=" p-2 md:p-3 lg:p-5 rounded-full border-[0.1rem] active:bg-slate-50 text-white active:text-black border-[#3b3d49] mr-4"><FaLinkedinIn />
                        </button></Link>
                        <Link to={'https://github.com/AHShuvro'}><button className=" p-2 md:p-3 lg:p-5 rounded-full border-[0.1rem] active:bg-slate-50 text-white active:text-black border-[#3b3d49]"><RiGithubFill />
                        </button></Link>
                        
                    </div>
                </div>
            </div>
            <hr className="bg-slate-500" />
            <div className="container flex flex-col lg:flex-row items-center justify-between pt-4">
                <p className="text-white text-[1rem] font-poppins">© 2021 Lendex Made with  by HasThemes</p>
                <a className=""><img className='w-[10.68rem] h-[3.43rem]' src="assets/img/logo.webp" alt="" /></a>
            </div>
        </div>
    );
};

export default Footer1;