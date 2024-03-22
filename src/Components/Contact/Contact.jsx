import { FaLinkedinIn } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <>
            <div className='container px-2'>
                <div className='mt-32 pb-36 flex flex-col md:flex-row justify-between items-start gap-20'>
                    <div className='w-full lg:w-2/6'>
                        <div className='bg-[#252734] text-white flex flex-col px-10 py-12 '>

                            <div className='px-8 py-6 bg-[#2A2C39] mb-5'>
                                <p className=' font-medium font-poppins pb-6'>Phone:</p>
                                <p className='text-[#858792] hover:text-[#fff] font-poppins'>01609238469</p>
                            </div>
                            <div className='px-8 py-6 bg-[#2A2C39] mb-5'>
                                <p className=' font-medium font-poppins pb-6'>Email:</p>
                                <p className='text-[#858792] hover:text-[#fff] font-poppins'>ahshuvro77777@gmail.com</p>
                            </div>
                            <div className='px-8 py-6 bg-[#2A2C39] mb-5'>
                                <p className=' font-medium font-poppins pb-6'>Website:</p>
                                <p className='text-[#858792] hover:text-[#fff] font-poppins'>dfkkadjkflj.com</p>
                            </div>
                            <div className='px-8 py-6 bg-[#2A2C39] mb-5'>
                                <p className=' font-medium font-poppins pb-6'>Address:</p>
                                <p className='text-[#858792] hover:text-[#fff] font-poppins'>01609238469</p>
                            </div>
                        </div>
                        <div className='bg-[#252734] text-white flex flex-col gap-12 justify-center items-start px-16 py-12 mt-32'>
                            <h2 className=' text-[#fff] text-[1.5rem] md:text-[2rem] lg:text-[2rem] xl:text-[3rem] leading-tight font-bold mt-4'>Follow Me</h2>
                            <div>
                                <Link to={'https://www.linkedin.com/in/ahshuvro77777/'}><button className=" p-2 md:p-3 lg:p-5 rounded-full border-[0.1rem] active:bg-slate-50 text-white active:text-black border-[#3b3d49] mr-4"><FaLinkedinIn />
                                </button></Link>
                                <Link to={'https://github.com/AHShuvro'}><button className=" p-2 md:p-3 lg:p-5 rounded-full border-[0.1rem] active:bg-slate-50 text-white active:text-black border-[#3b3d49]"><RiGithubFill />
                                </button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-4/6'>
                        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.8318789773!2d90.33728815181978!3d23.780975728157546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2z4Kai4Ka-4KaV4Ka-!5e0!3m2!1sbn!2sbd!4v1708593211586!5m2!1sbn!2sbd" width="800" height="600" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div>
                            <div className='mt-32'>
                                <p className='text-[1.12rem] font-light text-[#858792] font-poppins'> ||  Get In Touch
                                </p>
                                <h2 className=' text-[#fff] text-[2rem] md:text-[2rem] lg:text-[3rem] xl:text-[4rem] leading-tight font-bold mt-4'>If you have any porject or need help. Contact me</h2>
                                <p className='text-[#858792] font-poppins pt-6'>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.`}</p>
                            </div>
                            <div className='grid grid-cols-2 gap-6 mt-8 text-white font-poppins'>
                                <input className='bg-transparent border border-[#fff3] focus:border-white h-6 p-8' placeholder='Name' type="text" name="" id="" />
                                <input className='bg-transparent border border-[#fff3] focus:border-white h-6 p-8' placeholder='Email' type="email" name="" id="" />
                                <input className='bg-transparent border border-[#fff3] focus:border-white h-6 p-8' placeholder='Phone' type="text" name="" id="" />
                                <input className='bg-transparent border border-[#fff3] focus:border-white h-6 p-8' placeholder='Subject' type="text" name="" id="" />
                            </div>
                            <textarea className='bg-transparent text-white border border-[#fff3] focus:border-white min-h-44 md:min-h-72 w-full mt-6 p-8 font-poppins' name="textarea" rows="10" cols="50" placeholder='Comment'></textarea>

                            <button className="hover:bg-[#2A2C39] transition-all duration-500 text-white font-poppins h-[5rem] mt-12 w-[15.31rem] rounded-[40rem] border-[0.15rem] border-[#3b3d49] hover:border-white">Submit Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;