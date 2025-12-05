
import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import InstructionsCard from "../components/InstructionsCard";
import { useNavigate } from "react-router-dom";
import { IoDiamondOutline, IoHeartOutline, IoShield } from "react-icons/io5";
import { GoShieldCheck } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { FiMessageSquare } from "react-icons/fi";

const ContactUs : React.FC = () => {
    const navigate = useNavigate();
    return (

        <div className="w-full bg-[url('images/create-account.png')] bg-center bg-cover bg-no-repeat bg-fixed min-h-screen overflow-hidden">
            <Navbar/>

            <div className="max-w-[430px] mx-auto min-h-screen overflow-hidden">
                {/* main section */}
                <div className="flex flex-col mt-[180px] gap-[15px] mx-auto max-w-[398px] mb-[73px]">
                    <div className="flex items-center">
                        <div className="flex w-[24px] h-[24px] flex justify-center items-center">   
                            <img src="icons/left-white.png" alt="" />
                        </div>
                    </div>
                    {/* content */}
                    <div className="flex flex-col gap-[60px] items-center">
                        {/* built for business header and description */}
                        <div className="flex flex-col gap-[23px] items-center">
                            {/* header */}
                            <h1 className="font-poppins font-semibold text-[36px] bg-[linear-gradient(90deg,#FF0096,#00BDF9)] bg-clip-text text-transparent text-center">Contact Us</h1>
                            <p className="font-poppins text-[18px] font-normal text-[#B3B4B4] text-center">Get in touch with us!</p>
                        </div>

                        {/* second section */}
                        <div className="flex flex-col gap-[14px]">
                            {/*cards start */}
                            <div className="w-[398px] flex rounded-[12px] border-[0.25px] py-[20px] bg-[#1D0D2F]/70 border-[#fFF47B3] / 20 items-center justify-center gap-[34px]">
                                <div className="w-[50px] h-[50px] rounded-[100px] bg-[#FE73C5] flex items-center justify-center shrink-0">
                                    <MdOutlineEmail className="w-[40px] h-[40px]"/>
    
                                </div>
                                <div className="flex flex-col gap-[5px] w-[258px]">
                                        <p className="font-poppins font-semibold text-[20px] text-white">Email Us</p>
                                        <p className="font-poppins font-normal text-[16px] text-[#B3B4B4]">hello@nytmate.com</p>
                                </div>
                            </div>

                            <div className="w-[398px] flex rounded-[12px] border-[0.25px] py-[20px] bg-[#1D0D2F]/70 border-[#fFF47B3] / 20 items-center justify-center gap-[34px]">

                                <div className="w-[50px] h-[50px] rounded-[100px] bg-[#00BDF9] flex items-center justify-center shrink-0">
                                    <HiOutlinePhone className="w-[40px] h-[40px]"/>
    
                                </div>
                                <div className="flex flex-col gap-[5px] w-[258px]">
                                        <p className="font-poppins font-semibold text-[20px] text-white">Call us</p>
                                        <p className="font-poppins font-normal text-[16px] text-[#B3B4B4]">1-800-NYTMATE</p>
                                </div>
                            </div>

                            <div className="w-[398px] flex rounded-[12px] border-[0.25px] py-[20px] bg-[#1D0D2F]/70 border-[#fFF47B3] / 20 items-center justify-center gap-[34px]">

                                <div className="w-[50px] h-[50px] rounded-[100px] bg-[#A66CFF] flex items-center justify-center shrink-0">
                                    <FiMessageSquare className="w-[40px] h-[40px]"/>
    
                                </div>
                                <div className="flex flex-col gap-[5px] w-[258px]">
                                        <p className="font-poppins font-semibold text-[20px] text-white">Live Chat</p>
                                        <p className="font-poppins font-normal text-[16px] text-[#B3B4B4]">Available 24/7</p>
                                </div>

                                
                            </div>
                        </div>

                         {/* form */}
                                <form className="w-[358px] flex flex-col rounded-[12px] border-[0.25px] py-[20px] gap-[20px] border-white w-[358px] items-center">
                                    <div className="flex flex-col justify-start gap-[12px] w-[323px]">
                                        <p className="font-poppins font-medium text-[17px] text-white">Name<span className="text-[#FF0000]">*</span></p>
                                        <input type="text" className="rounded-[10px] border-[0.3px] px-[20px] py-[15px] border-[#C3BFBF] text-white"/>
                                    </div>
                                     <div className="flex flex-col justify-start gap-[12px] w-[323px]">
                                        <p className="font-poppins font-medium text-[17px] text-white">Email<span className="text-[#FF0000]">*</span></p>
                                        <input type="text" className="rounded-[10px] border-[0.3px] px-[20px] py-[15px] border-[#C3BFBF] text-white"/>
                                    </div>
                                     <div className="flex flex-col justify-start gap-[12px] w-[323px]">
                                        <p className="font-poppins font-medium text-[17px] text-white">Subject<span className="text-[#FF0000]">*</span></p>
                                        <input type="text" className="rounded-[10px] border-[0.3px] px-[20px] py-[15px] border-[#C3BFBF] text-white"/>
                                    </div>
                                     <div className="flex flex-col justify-start gap-[12px] w-[323px]">
                                        <p className="font-poppins font-medium text-[17px] text-white">Message<span className="text-[#FF0000]">*</span></p>
                                        <textarea className="rounded-[10px] border-[0.3px] px-[20px] py-[15px] border-[#C3BFBF] text-white"/>
                                    </div>
                                     
                                
                                    

                                    <div className="w-[323px]">
                                        <Button variant="solid" fullWidth>Send Message</Button>
                                    </div>

                                    
                                </form>
                    </div>
                         
                            
                
                   
                </div>
                <Footer/>
            </div>
        </div>
    )
}



export default ContactUs;