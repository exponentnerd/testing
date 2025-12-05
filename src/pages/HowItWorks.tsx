
import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import InstructionsCard from "../components/InstructionsCard";
import { useNavigate } from "react-router-dom";

const HowItWorks : React.FC = () => {
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
                           {/* header start */}
                           <div className="flex flex-col gap-[23px] items-center">
                                <h1 className="font-poppins font-semibold text-[36px] bg-[linear-gradient(90deg,#FF0096,#00BDF9)] bg-clip-text text-transparent">How NytMate works</h1>
                                <p className="font-poppins font-normal text-[18px] text-[#FFFFFF] text-center">
                                    Getting access to premium nightlife has<br/>
                                     never been easier. Here's how you can join <br/>
                                     the experience.
                                </p>
                           </div>
                           {/* header end */}
                           {/* instructions start */}
                           <div className="flex flex-col gap-[14px]">
                            
                            <InstructionsCard/>
                            <InstructionsCard/>
                            <InstructionsCard/>
                            <InstructionsCard/>
                            
                            {/* summary */}
                            <div className="flex flex-col h-[260px] rounded-[12px] border-[1px] p-[20px] pt-[18px] items-center justify-center gap-[24px]">
                                <h3 className="font-poppins font-semibold text-[20px] text-[#FFFFFF] text-center">Ready to Experience <br/>Premium Nightlife?</h3>
                                <p className="font-poppins font-normal text-[14px] text-[#B3B4B4] text-center">
                                    Join thousands of party-goers who are already enjoying exclusive venues
                                </p>
                                <div className="w-full">
                                    <Button fullWidth onClick={()=>navigate("/tables-and-venues")}>Browse Tables and Venues</Button>
                                </div>
                            </div>
                            {/* summary end*/}

                           </div>
                           {/* instructions end */}
                    </div>
                   
                </div>
                <Footer/>
            </div>
        </div>
    )
}



export default HowItWorks;