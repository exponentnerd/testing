
import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import InstructionsCard from "../components/InstructionsCard";
import { useNavigate } from "react-router-dom";
import { IoDiamondOutline, IoHeartOutline, IoShield } from "react-icons/io5";
import { GoShieldCheck } from "react-icons/go";

const AboutUs : React.FC = () => {
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
                    <div className="flex flex-col gap-[60px]">
                        {/* built for business header and description */}
                        <div className="flex flex-col gap-[23px] items-center">
                            {/* header */}
                            <h1 className="font-poppins font-semibold text-[36px] bg-[linear-gradient(90deg,#FF0096,#00BDF9)] bg-clip-text text-transparent text-center">About Us</h1>
                            <p className="font-poppins text-[18px] font-normal text-[#B3B4B4] text-center">Redefining nightlife experiences through shared luxury and community</p>
                            <p className="font-poppins text-[18px] font-normal text-[#FFFFFF] text-center">NytMate was born from a simple observation: premium nightclub experiences shouldn't be exclusively for the ultra-wealthy. We believe that everyone deserves the chance to enjoy the best venues, the best service, and unforgettable nights out.</p>
                            <p className="font-poppins text-[18px] font-normal text-[#FFFFFF] text-center">By enabling table sharing, we've created a platform that makes luxury nightlife accessible while fostering a community of like-minded individuals who appreciate the finer things in life. Whether you're booking solo or joining a shared table, every experience is curated to be exceptional.</p>
                        </div>

                        {/* second section */}
                        <div className="flex flex-col gap-[14px]">
                            {/*cards start */}
                            <div className="flex rounded-[12px] border-[0.25px] py-[20px] bg-[#1D0D2F]/70 border-[#fFF47B3] / 20 items-center justify-center gap-[34px]">

                                <div className="w-[50px] h-[50px] rounded-[100px] bg-[#FE73C5] flex items-center justify-center shrink-0">
                                    <IoHeartOutline className="w-[40px] h-[40px] mt-[5px]"/>
    
                                </div>
                                <div className="flex flex-col gap-[5px] w-[258px]">
                                        <p className="font-poppins font-semibold text-[20px] text-white">Community First</p>
                                        <p className="font-poppins font-normal text-[16px] text-[#B3B4B4]">Building connections through shared experiences</p>
                                </div>
                            </div>

                            <div className="flex rounded-[12px] border-[0.25px] py-[20px] bg-[#1D0D2F]/70 border-[#fFF47B3] / 20 items-center justify-center gap-[34px]">

                                <div className="w-[50px] h-[50px] rounded-[100px] bg-[#00BDF9] flex items-center justify-center shrink-0">
                                    <GoShieldCheck className="w-[40px] h-[40px] mt-[5px]"/>
    
                                </div>
                                <div className="flex flex-col gap-[5px] w-[258px]">
                                        <p className="font-poppins font-semibold text-[20px] text-white">Trust & Safety</p>
                                        <p className="font-poppins font-normal text-[16px] text-[#B3B4B4]">Verified venues and secure payment processing</p>
                                </div>
                            </div>

                            <div className="flex rounded-[12px] border-[0.25px] py-[20px] bg-[#1D0D2F]/70 border-[#fFF47B3] / 20 items-center justify-center gap-[34px]">

                                <div className="w-[50px] h-[50px] rounded-[100px] bg-[#A66CFF] flex items-center justify-center shrink-0">
                                    <IoDiamondOutline className="w-[40px] h-[40px] mt-[5px]"/>
    
                                </div>
                                <div className="flex flex-col gap-[5px] w-[258px]">
                                        <p className="font-poppins font-semibold text-[20px] text-white">Premium Quality</p>
                                        <p className="font-poppins font-normal text-[16px] text-[#B3B4B4]">Only the finest venues and experiences</p>
                                </div>

                                
                            </div>

                            {/* our mission */}
                                <div className="flex flex-col gap-[24px] rounded-[12px] border-[1px] p-[20px] bg-[#1A0812]/50 border-[#FF47B3]/20 items-center">
                                    <p className="font-poppins font-semibold text-[20px] text-white">Our Mission</p>
                                    <p className="font-poppins font-normal text-[16px] text-[#ECECEC] text-center">To democratize luxury nightlife experiences by creating a platform where premium venues are accessible, social connections are fostered, and every night out becomes a memorable adventure.</p>      
                                </div>
                            {/* cards end */}
                        </div>
                    </div>
                         
                            
                
                   
                </div>
                <Footer/>
            </div>
        </div>
    )
}



export default AboutUs;