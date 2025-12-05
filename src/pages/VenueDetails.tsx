
import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import TableCard from "../components/TableCard";
import VenuesCard from "../components/VenuesCard";
import EventsCard from "../components/EventsCard";
import VenueRateCard from "../components/VenueRateCard";
import Footer from "../components/Footer";
import TableDetailCard from "../components/TableDetailCard";
import AltTableDetailCard from "../components/AltTableDetailCard";

const VenueDetails : React.FC = () => {

    return (

        <div className="w-full bg-[#0D0D18] min-h-screen overflow-hidden">
            <Navbar/>

            <div className="max-w-[430px] mx-auto min-h-screen overflow-hidden">
                {/* main section */}
                <div className="flex flex-col mt-[180px] gap-[40px] mx-auto min-h-screen max-w-[399px] mb-[73px]">
                    {/* header */}
                    <div className="flex max-w-[400px] w-full items-center justify-between">

                            <div className="w-[77px]">
                            <img src="icons/left-white.png" alt="" />
                            </div>
                            <p className="font-poppins font-semibold text-[22px] text-[#FFFFFF] ">Tape London</p>
                            <div className="flex gap-[10px] items-center w-[77px] justify-between">
                                <img src="icons/like-white.png" alt="" />
                                <img src="icons/humbleicons-share.png"/>
                            </div>
                    
                    </div>
                    {/* content */}
                    <div className="flex flex-col gap-[30px]">
                        {/* table summary */}
                        <div className=" relative  h-[301px] rounded-t-[18px] bg-[url('images/night-club.png')] bg-center bg-cover">
                            <div className="bg-[linear-gradient(transparent,#0D0D18)] absolute inset-[0] ">
                                <div className="flex flex-col mt-[179px] ml-[13px] gap-[12px]">
                                    <div className="flex gap-[10px] h-[21px] items-center">
                                        <img src="icons/proicons_location.png" alt="" />
                                        <p className="font-poppins font-normal text-[14px] text-[#FFFFFF]">Downtown . London</p>
                                    </div>
                                    <div className="flex gap-[10px] h-[21px] items-center">
                                        <img src="icons/mdi:date-range.png" alt="" />
                                        <p className="font-poppins font-normal text-[14px] text-[#FFFFFF]">11:30PM till late</p>
                                    </div>
                                    <div className="flex gap-[10px] h-[21px] items-center">
                                        <img src="icons/mdi:date-range.png" alt="" />
                                        <p className="font-poppins font-normal text-[14px] text-[#FFFFFF]">Venue Details</p>
                                    </div>
                                </div>
                            </div>
                        
                        </div>

                        {/* table details */}
                        <div className="flex flex-col gap-[16px]">
                            <h3 className="text-[#FFFFFF] font-poppins text-[16px] font-semibold">Tables</h3>
                            {/* filter tables start*/}
                            <div className="flex flex-col gap-[20px] w-[399px] overflow-hidden">
                                {/* filters */}
                                <div className="overflow-scroll">
                                    <div className="flex gap-[10px] justify-start w-max">
                                    {/* filter items */}
                                    <div className="h-[44px] rounded-[12px] border-[1px] border-solid border-[#FE4CB5] px-[10px] py-[8px] flex items-center gap-[6px] w-[140px]">
                                        <img src="/icons/mdi_location.png"/>
                                        <p className="font-poppins font-medium text-[14px] text-[#FFFFFF] grow">Nearby</p>
                                        <img src="icons/down-white.png" alt="" />
                                    </div>
                                    <div className="h-[44px] rounded-[12px] border-[1px] border-solid border-[#FE4CB5] px-[8px] py-[9px] flex items-center  gap-[6px] min-w-[100px]">
                                        <img src="/icons/ion_people.png"/>
                                        <p className="font-poppins font-medium text-[14px] text-[#FFFFFF] grow">3</p>
                                        <img src="icons/down-white.png" alt="" />
                                    </div>
                                    
                                    <div className="h-[44px] rounded-[12px] border-[1px] border-solid border-[#FE4CB5] px-[8px] py-[9px] flex items-center gap-[6px] w-[140px]">
                                        <img src="/icons/nimbus_money.png"/>
                                        <p className="font-poppins font-medium text-[14px] text-[#FFFFFF] grow">over $100</p>
                                        <img src="icons/down-white.png" alt="" />
                                    </div>
                                    
                                </div>
                                </div>
                                {/* table types */}
                                <div className="overflow-scroll">
                                    <div className="flex gap-[10px] justify-start w-max">
                                        <div className="px-[10px] py-[14px] rounded-[50px]">
                                            <p className="text-[#C3BFBF] font-poppins font-medium text-[14px]">All</p>
                                        </div>
                                        <div className="px-[10px] py-[14px] rounded-[50px] bg-[#FE4CB5]/30 ">
                                            <p className="text-[#C3BFBF] font-poppins font-medium text-[14px]">VIP Booth</p>
                                        </div>
                                        <div className="px-[10px] py-[14px] rounded-[50px]">
                                            <p className="text-[#C3BFBF] font-poppins font-medium text-[14px]">Standard Table</p>
                                        </div>
                                        <div className="px-[10px] py-[14px] rounded-[50px]">
                                            <p className="text-[#C3BFBF] font-poppins font-medium text-[14px]">Rooftop Lounge</p>
                                        </div>
                                        <div className="px-[10px] py-[14px] rounded-[50px]">
                                            <p className="text-[#C3BFBF] font-poppins font-medium text-[14px]">Exclusive VIP</p>
                                        </div>
                                    </div>
                            
                                
                                </div>
                                {/* table types end */}
                                {/* availability start */}
                                <div className="flex gap-[10px]">
                                    <div className="flex items-center justify-center rounded-[50px] border-[1px] py-[4px] px-[20px] border-[#00BDF9]">
                                        <p className="font-poppins font-normal text-[16px] text-[#00BDF9]">
                                            4 Available
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[50px] border-[1px] py-[4px] px-[20px] border-[#FE4CB5]">
                                        <p className="font-poppins font-normal text-[16px] text-[#FE4CB5]">
                                            2 Shared
                                        </p>
                                    </div>
                                </div>
                                {/* availability end */}
                                
                            </div>
                            {/* filter tables end */}
                            
                        </div>
                        {/* table details end */}
                        {/* vip booth start */}
                        <div className="flex flex-col gap-[25px]">
                            {/* vip card */}
                            <TableDetailCard/>
                            <TableDetailCard/>
                            <TableDetailCard/>
                            <TableDetailCard/>
                            <AltTableDetailCard/>
                            <AltTableDetailCard/>
                            {/* vip card */}
                        </div>
                        {/* vip booth end */}
                       
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}



export default VenueDetails;