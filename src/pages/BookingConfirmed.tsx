
import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import TableCard from "../components/TableCard";
import VenuesCard from "../components/VenuesCard";
import EventsCard from "../components/EventsCard";
import VenueRateCard from "../components/VenueRateCard";
import Footer from "../components/Footer";

const BookingConfirmed : React.FC = () => {

    return (

        <div className="w-full bg-[#0D0D18] min-h-screen overflow-hidden">
            <Navbar/>

            <div className="max-w-[430px] mx-auto min-h-screen overflow-hidden">
                {/* main section */}
                <div className="flex flex-col mt-[180px] gap-[24px] mx-auto max-w-[400px] mb-[73px]">
                    {/* header */}
                    <div className="flex max-w-[400px] w-full items-center justify-between h-[24px]">
                        
                                
                    </div>
                    {/* content */}
                    <div className="flex flex-col gap-[308px] max-w-[400px] w-full">
                        <div className="flex flex-col gap-[17px] items-center">
                            <div className="flex flex-col gap-[56px] h-[156px] items-center justify-between">
                                <h3 className="font-poppins font-semibold text-[18px] text-[#FFFFFF]">Request Successfully Sent</h3>
                                <img src="icons/time-blue.png" alt="" />
                            </div>
                            <p className="font-poppins font-normal text-[14px] text-[#FFFFFF] text-center">
                                Your request to join the table has been successfully <br/>
                                sent to the host, you will be notified once they <br/>
                                respond.
                            </p>   
                        </div>   
                        <div className="flex flex-col gap-[14px] items-center">
                            <div className="w-full">
                                <Button fullWidth>Go to Bookings</Button>
                            </div>
                            <div className="p-[10px] h-[56px] ">
                                <p className="font-poppins font-semibold text-[16px] text-[#FFFFFF]">Back to Home</p>
                            </div>
                        </div>   
                    </div>
                   
                </div>
                <Footer/>
            </div>
        </div>
    )
}



export default BookingConfirmed;