
import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import InstructionsCard from "../components/InstructionsCard";
import { useNavigate } from "react-router-dom";
import { IoShield } from "react-icons/io5";

const ForBusiness : React.FC = () => {
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
                    <div className="flex flex-col gap-[30px]">
                        {/* built for business header and description */}
                        <div className="flex flex-col gap-[40px] items-center">
                            {/* header */}
                            <h1 className="font-poppins font-semibold text-[36px] bg-[linear-gradient(90deg,#FF0096,#00BDF9)] bg-clip-text text-transparent text-center">Built for Business Growth</h1>
                            <p className="font-poppins text-[16px] font-medium text-[#C3BFBF] text-center">A high-trust, low-risk platform designed to maximize revenue for venues and empower promoters with automated earnings</p>
                        </div>

                        {/* second section */}
                        <div className="flex flex-col gap-[25px]">
                            {/* venue owner and event promoter */}
                            <div className="flex rounded-[12px] p-[10px] gap-[11px] bg-[#2F2E2E] justify-center">
                                <div className="flex items-center justify-center rounded-[12px] p-[10px] bg-[#1A1A1A] w-[177px]">
                                    <p className="font-poppins font-normal text-[14px] text-white">Venue Owners</p>
                                </div>
                                <div className="flex items-center justify-center rounded-[12px] p-[10px] w-[177px]">
                                    <p className="font-poppins font-normal text-[14px] text-white">Event Promoters</p>
                                </div>

                            </div>
                            {/* for club and even hosts */}
                            <div className="flex flex-col gap-[30px] items-center">
                                <h2 className="font-poppins font-bold text-[25px] text-white">For Clubs & Event Hosts</h2>
                                <p className="font-poppins font-normal text-[16px] text-white text-center">Make NytMate your high-trust, low-risk sales channel.</p>

                                {/* horizontal scroll div */}
                                <div className="w-full overflow-scroll">
                                    <div className="w-max flex gap-[20px]">

                                        {/*financial guarantee card */}
                                        <div className="flex flex-col gap-[14px] rounded-[12px] border-[1px] p-[20px] w-[300px] h-[222px] bg-[#1A0812]/50 border-[#FF47B3]/20 items-center justify-center">
                                            <IoShield className="w-[27px] h-[30px] text-[#FF47B3]"/>
                                            <p className="font-poppins font-semibold text-[20px] text-white">Financial Guarantee</p>
                                            <p className="font-poppins font-normal text-[14px] text-[#B3B4B4] text-center">Our payment logic virtually eliminates the 'no-show' problem</p>
                                        </div>
                                        <div className="flex flex-col gap-[14px] rounded-[12px] border-[1px] p-[20px] w-[300px] h-[222px] bg-[#1A0812]/50 border-[#FF47B3]/20 items-center justify-center">
                                            <IoShield className="w-[27px] h-[30px] text-[#FF47B3]"/>
                                            <p className="font-poppins font-semibold text-[20px] text-white">Financial Guarantee</p>
                                            <p className="font-poppins font-normal text-[14px] text-[#B3B4B4] text-center">Our payment logic virtually eliminates the 'no-show' problem</p>
                                        </div>
                                        <div className="flex flex-col gap-[14px] rounded-[12px] border-[1px] p-[20px] w-[300px] h-[222px] bg-[#1A0812]/50 border-[#FF47B3]/20 items-center justify-center">
                                            <IoShield className="w-[27px] h-[30px] text-[#FF47B3]"/>
                                            <p className="font-poppins font-semibold text-[20px] text-white">Financial Guarantee</p>
                                            <p className="font-poppins font-normal text-[14px] text-[#B3B4B4] text-center">Our payment logic virtually eliminates the 'no-show' problem</p>
                                        </div>
                                    </div>
                                </div>
                                {/* form */}
                                <form className="flex flex-col rounded-[12px] border-[0.25px] py-[20px] gap-[20px] border-white w-[358px] items-center">
                                    <div className="flex flex-col justify-start gap-[12px] w-[323px]">
                                        <p className="font-poppins font-medium text-[17px] text-white">Name<span className="text-[#FF0000]">*</span></p>
                                        <input type="text" className="rounded-[10px] border-[0.3px] px-[20px] py-[15px] border-[#C3BFBF] text-white"/>
                                    </div>
                                     <div className="flex flex-col justify-start gap-[12px] w-[323px]">
                                        <p className="font-poppins font-medium text-[17px] text-white">Role<span className="text-[#FF0000]">*</span></p>
                                        <input type="text" className="rounded-[10px] border-[0.3px] px-[20px] py-[15px] border-[#C3BFBF] text-white"/>
                                    </div>
                                     <div className="flex flex-col justify-start gap-[12px] w-[323px]">
                                        <p className="font-poppins font-medium text-[17px] text-white">Venue Name<span className="text-[#FF0000]">*</span></p>
                                        <input type="text" className="rounded-[10px] border-[0.3px] px-[20px] py-[15px] border-[#C3BFBF] text-white"/>
                                    </div>
                                     <div className="flex flex-col justify-start gap-[12px] w-[323px]">
                                        <p className="font-poppins font-medium text-[17px] text-white">Owner Email<span className="text-[#FF0000]">*</span></p>
                                        <input type="text" className="rounded-[10px] border-[0.3px] px-[20px] py-[15px] border-[#C3BFBF] text-white"/>
                                    </div>
                                     <div className="flex flex-col justify-start gap-[12px] w-[323px]">
                                        <p className="font-poppins font-medium text-[17px] text-white">Venue Email<span className="text-[#FF0000]">*</span></p>
                                        <input type="text" className="rounded-[10px] border-[0.3px] px-[20px] py-[15px] border-[#C3BFBF] text-white"/>
                                    </div>
                                     <div className="flex flex-col justify-start gap-[12px] w-[323px]">
                                        <p className="font-poppins font-medium text-[17px] text-white">Phone Number<span className="text-[#FF0000]">*</span></p>
                                        <input type="text" className="rounded-[10px] border-[0.3px] px-[20px] py-[15px] border-[#C3BFBF] text-white"/>
                                    </div>
                                     <div className="flex flex-col justify-start gap-[12px] w-[323px]">
                                        <p className="font-poppins font-medium text-[17px] text-white">Venue Website<span className="text-[#FF0000]">*</span></p>
                                        <input type="text" className="rounded-[10px] border-[0.3px] px-[20px] py-[15px] border-[#C3BFBF] text-white"/>
                                    </div>
                                     <div className="flex flex-col justify-start gap-[12px] w-[323px]">
                                        <p className="font-poppins font-medium text-[17px] text-white">Venue Instagram<span className="text-[#FF0000]">*</span></p>
                                        <input type="text" className="rounded-[10px] border-[0.3px] px-[20px] py-[15px] border-[#C3BFBF] text-white"/>
                                    </div>
                                     <div className="flex flex-col justify-start gap-[12px] w-[323px]">
                                        <p className="font-poppins font-medium text-[17px] text-white">Venue category<span className="text-[#FF0000]">*</span></p>
                                        <input type="text" className="rounded-[10px] border-[0.3px] px-[20px] py-[15px] border-[#C3BFBF] text-white"/>
                                    </div>
                                     <div className="flex flex-col justify-start gap-[12px] w-[323px]">
                                        <p className="font-poppins font-medium text-[17px] text-white">City of Operation<span className="text-[#FF0000]">*</span></p>
                                        <input type="text" className="rounded-[10px] border-[0.3px] px-[20px] py-[15px] border-[#C3BFBF] text-white"/>
                                    </div>
                                     <div className="flex flex-col justify-start gap-[12px] w-[323px]">
                                        <p className="font-poppins font-medium text-[17px] text-white">Current Capacity<span className="text-[#FF0000]">*</span></p>
                                        <input type="text" className="rounded-[10px] border-[0.3px] px-[20px] py-[15px] border-[#C3BFBF] text-white"/>
                                    </div>

                                    <div className="flex flex-col gap-[10px] w-[323px]">
                                        <p className="font-poppins font-normal text-[14px] text-[#EBE6E6]">
                                           By clicking Submit you agree to our Privacy Policy.
                                            You also agree to receive marketing 
                                            communications from NytMate about news,
                                            events, promotions and monthly newsletters.
                                            You can unsubscribe from Nytmate emails at
                                            any time. 
                                        </p>

                                        <p className="font-poppins font-normal text-[14px] text-[#EBE6E6]">
                                           This site is protected by reCAPTCHA and the
                                            Google Privacy Policy and Term of Service
                                            apply.
                                        </p>
                                    </div>
                                    <div className="w-[323px]">
                                        <Button variant="solid" fullWidth>Submit</Button>
                                    </div>

                                    
                                </form>
                            </div>
                        </div>
                    </div>
                         
                            
                
                   
                </div>
                <Footer/>
            </div>
        </div>
    )
}



export default ForBusiness;