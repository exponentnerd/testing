
import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import TableCard from "../components/TableCard";
import VenuesCard from "../components/VenuesCard";
import EventsCard from "../components/EventsCard";
import VenueRateCard from "../components/VenueRateCard";
import Footer from "../components/Footer";

const ConfirmJoinRequest : React.FC = () => {

    return (

        <div className="w-full bg-[#0D0D18] min-h-screen overflow-hidden">
            <Navbar/>

            <div className="max-w-[430px] mx-auto min-h-screen overflow-hidden">
                {/* main section */}
                <div className="flex flex-col mt-[180px] gap-[40px] mx-auto max-w-[399px] mb-[73px]">
                    {/* header */}
                    <div className="flex max-w-[400px] w-full items-center justify-between">
                        
                            <img src="icons/back-arrow.png" alt="" />
                            <p className="font-poppins font-semibold text-[22px] text-[#FFFFFF]">Confirm Join Request</p>
                            <div></div>                    
                    </div>
                    {/* content */}
                    <div className="flex flex-col gap-[40px] max-w-[400px] w-full">
 
                            
                            {/* content options start */}
                            <div className="flex flex-col gap-[17px]">
                                {/* description start */}
                                <div className="rounded-[12px] p-[14px] gap-[10px] bg-[#121226] flex items-center justify-center">
                                    <p className="font-poppins font-normal text-[20px] text-[#FFFFFF]">You are sending a request to join a <br/>table hosted by <span className="italic">Maya .S</span></p>
                                </div>
                                {/* description end */}
                                {/* table details */}
                                <div className="flex flex-col gap-[14px] h-[385px]">
                                    <h3 className="text-[#FFFFFF] font-poppins text-[16px] font-semibold">Table Details</h3>
                                    <div className="rounded-[10px] p-[10px] bg-[#121226]">
                                        
                                        <div className="flex flex-col gap-[10px] w-[380px]">
                                            {/* vip booth start */}
                                            <div className="flex justify-between py-[10px] items-center">
                                                {/* vip booth start */}
                                                <div className="flex items-center justify-center h-[28px] rounded-[30px] py-[8px] px-[20px] bg-[#1F41BB]">
                                                    <p className="text-[#C3BFBF] font-poppins text-[16px] font-bold">VIP Booth</p>
                                                </div>
                                                {/* vip booth end */}
                                                
                                                <p className="text-[#FFFFFF] font-poppins text-[16px] font-medium">6/9 Guests</p>
                                            </div>
                                            {/* vip booth end */}
                                            {/* total table cost */}
                                            <div className="flex justify-between items-center border-t-[0.25px] border-t-[#C3BFBF] py-[10px]">
                                                
                                                <p className="text-[#FFFFFF] font-poppins text-[16px] font-normal">Total table cost</p> 
                                                <p className="text-[#00BDF9] font-poppins text-[16px] font-medium">$6500</p>
                                                
                                            </div>
                                            {/* total table cost end */}
                                        </div>
                                        
                                        
                                    </div>
                                    <div className="rounded-[10px] p-[10px] bg-[#121226]">
                                        <div className="flex flex-col gap-[10px] w-[380px]">
                                            <div className="flex justify-between items-center">
                                                <p className="text-[#FFFFFF] font-poppins text-[16px] font-normal">Cost per slot</p> 
                                                <p className="text-[#FF3FA4] font-poppins text-[20px] font-medium">$722</p>
                                            </div>
                                            <div className=" border-t-[0.5px] py-[10px] gap-[10px] border-t-[#C3BFBF] flex justify-between items-center">
                                                <h1 className="font-poppins font-normal text-[20px] text-[#FFFFFF]">Your Contribution</h1>
                                                <div className="flex flex-col gap-[8px] items-end">
                                                    <h1 className="font-poppins font-medium text-[20px] text-[#00BDF9]">$1444</h1>
                                                    <p className="font-poppins font-normal text-[12px] text-[#C3BFBF]">2 slots x $722</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* table details */}

                            </div>
                            {/* content options end */}
                            {/* content button start */}
                            <Button fullWidth>Send Request</Button>
                            {/* content button end */}
                               
                                
                    </div>
                   
                </div>
                <Footer/>
            </div>
        </div>
    )
}



export default ConfirmJoinRequest;