
import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import TableCard from "../components/TableCard";
import VenuesCard from "../components/VenuesCard";
import EventsCard from "../components/EventsCard";
import VenueRateCard from "../components/VenueRateCard";
import Footer from "../components/Footer";

const TablesAndVenues : React.FC = () => {

    return (

        <div className="w-full bg-[#0D0D18] min-h-screen overflow-hidden">
            <Navbar/>

            <div className="max-w-[430px] mx-auto min-h-screen overflow-hidden">
                {/* main section */}
                <div className="flex flex-col mt-[180px] gap-[34px] mx-auto min-h-screen max-w-[399px] mb-[80px]">
                    {/* header */}
                    <div className="flex flex-col gap-[8px] max-w-[399px] w-full items-center">
                        {/* header background */}
                        <div className="w-full h-[160px] bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat">

                        </div>
                        <div className="flex gap-[12px]">
                            <div className="w-[20px] h-[8px] bg-[#00BDF9] rounded-[30px]"></div>
                            <div className="w-[8px] h-[8px] bg-[#FFFFFF] rounded-[100px]"></div>
                            <div className="w-[8px] h-[8px] bg-[#FFFFFF] rounded-[100px]"></div>
                            <div className="w-[8px] h-[8px] bg-[#FFFFFF] rounded-[100px]"></div>
                        </div>
                    </div>
                    {/* search venue and tables */}
                    <div className="flex flex-col gap-[20px] w-[399px] overflow-hidden">
                        <SearchBar/>
                        {/* filters */}
                        <div className="overflow-scroll">
                            <div className="flex gap-[10px] justify-start w-max">
                            {/* filter items */}
                            <div className="h-[44px] rounded-[12px] border-[1px] border-solid border-[#FE4CB5] px-[8px] py-[9px] flex">
                                <img src="/icons/mdi_location.png"/>
                                <p className="font-poppins font-medium text-[14px] text-[#FFFFFF]">Nearby</p>
                            </div>
                            <div className="h-[44px] rounded-[12px] border-[1px] border-solid border-[#FE4CB5] px-[8px] py-[9px] flex ">
                                <img src="/icons/ion_people.png"/>
                                <p className="font-poppins font-medium text-[14px] text-[#FFFFFF]">3 . Tomorrow . 11:30pm</p>
                            </div>
                            
                            <div className="h-[44px] rounded-[12px] border-[1px] border-solid border-[#FE4CB5] px-[8px] py-[9px] flex">
                                <img src="/icons/nimbus_money.png"/>
                                <p className="font-poppins font-medium text-[14px] text-[#FFFFFF]">over $100</p>
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
                        
                    </div>
                    {/* active tables */}
                    <div className="flex flex-col gap-[26px] w-full">
                        <div className="flex justify-between items-center">
                            <h1 className="bg-[linear-gradient(90deg,#FF0096,#00BDF9)] bg-clip-text text-transparent font-poppins font-semibold text-[20px]">Active Tables</h1>
                            <p className="font-poppins font-semibold text-[14px] text-[#FFFFFF]">View all</p>
                        </div>
                        {/* table cards */}
                        <div className="overflow-scroll">
                            <div className="flex gap-[16px] w-max ">
                                {/* card */}
                                <TableCard/>
                                <TableCard/>
                                <TableCard/>
                            </div>
                        </div>
                    </div>

                    {/* popular venues */}
                    <div className="flex flex-col gap-[26px] w-full">
                        <div className="flex justify-between items-center">
                            <h1 className="bg-[linear-gradient(90deg,#FF0096,#00BDF9)] bg-clip-text text-transparent font-poppins font-semibold text-[20px]">Popular Venues</h1>
                            <p className="font-poppins font-semibold text-[14px] text-[#FFFFFF]">View all</p>
                        </div>
                        {/* table cards */}
                        <div className="overflow-scroll">
                            <div className="flex gap-[16px] w-max ">
                                {/* card */}
                                <VenuesCard/>
                                <VenuesCard/>
                                <VenuesCard/>
                                <VenuesCard/>
                            </div>
                        </div>
                    </div>
                    {/* Upcoming Events */}
                    <div className="flex flex-col gap-[26px] w-full">
                        <div className="flex justify-between items-center">
                            <h1 className="bg-[linear-gradient(90deg,#FF0096,#00BDF9)] bg-clip-text text-transparent font-poppins font-semibold text-[20px]">Upcoming Events</h1>
                            <p className="font-poppins font-semibold text-[14px] text-[#FFFFFF]">View all</p>
                        </div>
                        {/* table cards */}
                        <div className="overflow-scroll">
                            <div className="flex gap-[16px] w-max ">
                                {/* card */}
                                <EventsCard/>
                                <EventsCard/>
                                <EventsCard/>
                            </div>
                        </div>
                    </div>
                    {/* Top Rated Venues */}
                    <div className="flex flex-col gap-[26px] w-full">
                        <div className="flex flex-col gap-[10px]">
                            <h1 className="bg-[linear-gradient(90deg,#FF0096,#00BDF9)] bg-clip-text text-transparent font-poppins font-semibold text-[20px]">Top Rated Venues</h1>
                            <p className="font-poppins font-normal text-[14px] text-[#C3BFBF]">See the most rated venues in your location</p>
                        </div>
                        {/* table cards */}
                        
                        <div className="flex flex-col gap-[16px]">
                            {/* card */}
                            <VenueRateCard/>
                            <VenueRateCard/>
                            <VenueRateCard/>
                        </div>
                        
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}



export default TablesAndVenues;