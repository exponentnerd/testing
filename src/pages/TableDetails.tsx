
import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import TableCard from "../components/TableCard";
import VenuesCard from "../components/VenuesCard";
import EventsCard from "../components/EventsCard";
import VenueRateCard from "../components/VenueRateCard";
import Footer from "../components/Footer";

const TableDetails : React.FC = () => {

    return (

        <div className="w-full bg-[#0D0D18] min-h-screen overflow-hidden">
            <Navbar/>

            <div className="max-w-[430px] mx-auto min-h-screen overflow-hidden">
                {/* main section */}
                <div className="flex flex-col mt-[180px] gap-[40px] mx-auto min-h-screen max-w-[399px] mb-[73px]">
                    {/* header */}
                    <div className="flex max-w-[400px] gap-[94px] w-full items-center justify-between">
                        
                            <img src="icons/back-arrow.png" alt="" />
                            <p className="font-poppins font-semibold text-[22px] text-[#FFFFFF]">Join Table</p>
                            <img src="icons/humbleicons-share.png"/>
                    
                    </div>
                    {/* content */}
                    <div className="flex flex-col gap-[30px]">
                        {/* table summary */}
                        <div className="flex max-w-[398px] w-full">
                            {/* summary */}
                            <div className="flex flex-col gap-[12px] grow">
                                <div className="flex flex-col gap-[4px]">
                                    <h2 className="font-poppins text-[#FFFFFF] font-semibold text-[20px]">Funky Friday</h2>
                                    <p className="text-[#FFFFFF] text-[12px]">by <span className="font-poppins font-semibold text-[16px] text-[#FE4CB5] underline">Tape London</span></p>
                                </div>
                                <div className="flex gap-[10px] items-center">
                                    <img src="icons/proicons_location.png" alt="" />
                                    <p className="font-poppins font-normal text-[14px] text-[#FFFFFF]">Downtown . London</p>
                                </div>
                            </div>
                            {/* image */}
                            <div className="bg-[url('images/hero-bg.png')] bg-center bg-cover rounded-[12px] overflow-hidden h-fit w-fit">
                            <div className="w-[199px] h-[89px]  p-[14px]  flex flex-col justify-end items-center">
                                <div className="bg-[#626262]/25 py-[8px] px-[20px] rounded-[30px]">
                                    <p className="font-poppins font-medium text-[14px] text-[#FFFFFF]">See more</p>
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* date and time */}
                        <div className="flex gap-[12px] items-center bg-[#121226] rounded-[12px] p-[14px]">
                            <img src="icons/mdi:date-range.png"/>
                            <div className="flex flex-col">
                                <p className="text-[#C3BFBF] font-poppins text-[12px] font-medium">Date & Time</p>
                                <p className="text-[#FFFFFF] font-poppins text-[14px] font-medium">2025-12-15  .  11:30PM till late</p>
                            </div>    
                        </div>
                        {/* table details */}
                        <div className="flex flex-col gap-[14px]">
                            <h3 className="text-[#FFFFFF] font-poppins text-[16px] font-semibold">Table Details</h3>
                            <div className="rounded-[10px] p-[10px] bg-[#7764CA]/10">
                                <div className="flex flex-col gap-[10px] w-[380px]">
                                    <div className="flex border-b-[0.25px] border-b-[#C3BFBF] justify-between py-[10px] items-center">
                                        <div className="flex items-center justify-center h-[28px] rounded-[30px] py-[8px] px-[20px] bg-[#1F41BB]">
                                            <p className="text-[#C3BFBF] font-poppins text-[16px] font-bold">VIP Booth</p>
                                        </div>
                                        <div className="flex gap-[10px] items-center">
                                            <img src="icons/formkit_people.png" alt="" />
                                            <p className="text-[#FFFFFF] font-poppins text-[16px] font-normal">9 People</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        
                                        <p className="text-[#FFFFFF] font-poppins text-[14px] font-normal">Total table cost</p> 
                                        <p className="text-[#A66CFF] font-poppins text-[14px] font-medium">$6500</p>
                                        
                                    </div>
                                    <div className="flex justify-between items-center">
                                        
                                        <p className="text-[#FFFFFF] font-poppins text-[14px] font-normal">Guests paid</p> 
                                        <p className="text-[#FF6FBB] font-poppins text-[14px] font-medium">$4334</p>
                                        
                                    </div>

                                    <div className="flex border-t-[0.25px] border-t-[#C3BFBF] justify-between py-[10px] items-center">
                                        <p className="text-[#FFFFFF] font-poppins text-[14px] font-normal">Remaining</p> 
                                        <p className="text-[#00CFFF] font-poppins text-[14px] font-medium">$2166</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-[10px] p-[10px] bg-[#7764CA]/10">
                                <div className="flex flex-col gap-[10px] w-[380px]">
                                    <div className="flex justify-between items-center">
                                        <p className="text-[#FFFFFF] font-poppins text-[16px] font-normal">Cost per slot</p> 
                                        <p className="text-[#FF3FA4] font-poppins text-[20px] font-medium">$722</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-[#FFFFFF] font-poppins text-[16px] font-normal">Available slots</p> 
                                        <p className="text-[#00CFFF] font-poppins text-[16px] font-medium">3 remaining</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* host information */}
                        <div className="flex flex-col gap-[10px]">
                            <h3 className="text-[#FFFFFF] font-poppins text-[16px] font-semibold">Host Information</h3>
                            <div className="p-[14px] rounded-[12px] bg-[#121226]">
                                <div className="flex flex-col gap-[17px] w-[372px]">
                                    <div className="flex justify-between">
                                        <div className="flex gap-[10px]">
                                            <div className="w-[35px] h-[35px] rounded-[100px] bg-[#FFFFFF]">

                                            </div>
                                            <div className="flex flex-col gap-[1px]">
                                               <p className="text-[#FFFFFF] font-poppins font-normal italic text-[12px]">Maya (F)</p> 
                                                <div className="flex items-center gap-[1px]">
                                                    <img src="icons/materials_star.png" alt="" />
                                                    <p className="text-[#FFFFFF] font-poppins font-semibold italic text-[10px]">4.7</p> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-[28px] bg-[linear-gradient(90deg,#A66CFF,#00BDF9)] py-[8px] px-[20px] rounded-[30px] flex items-center justify-center ">
                                            <p className="text-[#FFFFFF] font-poppins font-semibold  text-[12px]">3 Spots left</p> 
                                        </div>
                                    </div>
                                    {/* current table memebers */}
                                    <div className="flex flex-col gap-[14px]">
                                        <p className="text-[#C3BFBF] font-poppins font-normal  text-[14px]">Current table Members (6)</p>

                                        <div className="flex gap-[5px] items-center">
                                            {/* table member card */}
                                            <div className="flex gap-[6px] items-center">
                                                <div className="w-[35px] h-[35px] rounded-[100px] bg-[#FFFFFF]">
                                                </div>
                                                <p className="text-[#FFFFFF] font-poppins font-medium text-[10px] w-[29px]">Jada <br/><span className="italic">(F)</span></p>             
                                            </div>
                                            {/* table member card */}
                                            <div className="flex gap-[6px] items-center">
                                                <div className="w-[35px] h-[35px] rounded-[100px] bg-[#FFFFFF]">
                                                </div>
                                                <p className="text-[#FFFFFF] font-poppins font-medium text-[10px] w-[29px]">Jada <br/><span className="italic">(F)</span></p>             
                                            </div>
                                            {/* table member card */}
                                            <div className="flex gap-[6px] items-center">
                                                <div className="w-[35px] h-[35px] rounded-[100px] bg-[#FFFFFF]">
                                                </div>
                                                <p className="text-[#FFFFFF] font-poppins font-medium text-[10px] w-[29px]">Jada <br/><span className="italic">(F)</span></p>             
                                            </div>
                                            <p className="text-[#C3BFBF] font-poppins font-normal text-[14px]">and 2 others</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* number of spots start */}
                        <div className="flex flex-col gap-[10px]">
                            {/* heading start */}
                            <div className="flex flex-col gap-[20px]">
                                <h3 className="text-[#FFFFFF] font-poppins text-[16px] font-semibold">Number of spots</h3>
                                {/* spots selection */}
                                <div className="flex gap-[40px] justify-center">
                                    {/* minus button */}
                                    <div className="w-[34px] h-[46px]  flex justify-center items-center bg-[#2F2E2E] rounded-[12px] p-[10px]">
                                        <p className="font-poppins font-bold text-[16px] text-[#FFFFFF]">-</p>
                                    </div>
                                    {/* minus button end */}
                                    {/* spots */}
                                    <div className="flex flex-col gap-[3px] items-center">
                                        <div className="w-[34px] h-[50px] rounded-[12px] border-[0.25px] border-[#C3BFBF] flex justify-center items-center">
                                            <p className="font-poppins font-bold text-[20px] text-[#FFFFFF]">2</p>

                                        </div>
                                        <p className="font-poppins font-normal text-[12px] text-[#C3BFBF]">Spots</p>
                                    </div>
                                    {/* spots end */}
                                    {/* plus button */}
                                    <div className="w-[34px] h-[46px] flex justify-center items-center bg-[#2F2E2E] rounded-[12px] p-[10px]">
                                        <p className="font-poppins font-bold text-[16px] text-[#FFFFFF]">+</p>
                                    </div>
                                    {/* plus button end */}
                                </div>
                                {/* spots selection end */}
                            </div>
                            {/* heading end */}
                            {/* your contribution start */}
                            <div className=" border-t-[0.5px] py-[10px] gap-[10px] border-t-[#C3BFBF] flex justify-between items-center">
                                <h1 className="font-poppins font-normal text-[20px] text-[#FFFFFF]">Your Contribution</h1>
                                <div className="flex flex-col gap-[8px] items-end">
                                    <h1 className="font-poppins font-medium text-[20px] text-[#FE4CB5]">$1444</h1>
                                    <p className="font-poppins font-normal text-[12px] text-[#C3BFBF]">2 slots x $722</p>
                                </div>
                            </div>
                              {/* your contribution end  */}
                        </div>
                        {/* number of spots end */}
                        {/* payment method start */}
                        <div className="flex flex-col gap-[10px]">
                            {/* heading start */}
                                <h3 className="text-[#FFFFFF] font-poppins text-[16px] font-semibold">Payment Method</h3>     
                            {/* heading end */}
                            
                            
                                <div className="flex justify-between items-center rounded-[12px] p-[14px] gap-[10px] bg-[#121226] h-[57px]">
                                    <div className="flex gap-[10px]">
                                        <img src="icons/visa.png" alt="" />
                                        <p className="font-poppins font-semibold text-[16px] text-[#FFFFFF]">Visa .....0800</p>
                                    </div>
                                    <img src="icons/right-white.png" alt="" />
                                </div>

                                <p className="font-poppins font-normal text-[12px] text-[#FFFFFF] self-center">Payment will be processed after host approval</p>
                            
                        </div>
                        {/* payment method end */}
                        {/* group preferences start */}
                        <div className="flex flex-col gap-[10px]">
                            {/* heading start */}
                                <h3 className="text-[#FFFFFF] font-poppins text-[16px] font-semibold">Group Preferences</h3>     
                            {/* heading end */}
                            
                            
                                <div className="flex items-center rounded-[12px] p-[14px] bg-[#121226] gap-[8px] flex-wrap">
                                   
                                    {/* preference */}
                                    <div className="inline flex justify-center items-center rounded-[50px] border-[1px] border-[#C3BFBF] px-[10px]">
                                        <p className="inline text-[#C3BFBF] font-poppins font-normal text-[14px] text-nowrap">Good vibes</p>
                                    </div>
                                    {/* preference */}
                                    <div className="inline flex justify-center items-center rounded-[50px] border-[1px] border-[#C3BFBF] px-[10px]">
                                        <p className="inline text-[#C3BFBF] font-poppins font-normal text-[14px] text-nowrap">Networking</p>
                                    </div>
                                    {/* preference */}
                                    <div className="inline flex justify-center items-center rounded-[50px] border-[1px] border-[#C3BFBF] px-[10px]">
                                        <p className="inline text-[#C3BFBF] font-poppins font-normal text-[14px] text-nowrap">Shots</p>
                                    </div>
                                    {/* preference */}
                                    <div className="inline flex justify-center items-center rounded-[50px] border-[1px] border-[#C3BFBF] px-[10px]">
                                        <p className="inline text-[#C3BFBF] font-poppins font-normal text-[14px] text-nowrap">Good vibes</p>
                                    </div>
                                    {/* preference */}
                                    <div className="inline flex justify-center items-center rounded-[50px] border-[1px] border-[#C3BFBF] px-[10px]">
                                        <p className="inline text-[#C3BFBF] font-poppins font-normal text-[14px] text-nowrap">shots</p>
                                    </div>
                                    {/* preference */}
                                    <div className=" inline flex justify-center items-center rounded-[50px] border-[1px] border-[#C3BFBF] px-[10px]">
                                        <p className="inline text-[#C3BFBF] font-poppins font-normal text-[14px] text-nowrap">hanging out with</p>
                                    </div>
                                   
                                </div>

                            
                        </div>
                        {/* group preferences end */}
                        {/* introduce yourself start */}
                        <div className="flex flex-col gap-[10px]">
                            {/* heading start */}
                                <h3 className="text-[#FFFFFF] font-poppins text-[16px] font-semibold">Introduce Yourself</h3>     
                            {/* heading end */}
                            
                            
                                <textarea className="rounded-[12px] p-[14px] bg-[#121226] border-[0.5px] p-[14px] border-[#C3BFBF] font-poppins font-normal text-[12px] text-[#C3BFBF] h-[74px]">
                                   
                                </textarea>
                                <p className="font-poppins font-normal text-[10px] text-[#FFFFFF]">Don't include sensitive personal information</p>
                            
                        </div>
                        {/* introduce yourself end */}
                        {/* cancellation policy start */}
                        <div className="rounded-[12px] bg-[#ECBED9] border-[0.25px] border-[#C3BFBF] h-[78px] flex justify-center items-center">
                            <p className="font-poppins font-normal text-[12px] text-[#1A1A1A]">
                               <span className="font-bold">Cancellation Policy: </span>Free cancellation up to 2 hours before the <br/>
                               event. Payment link will be sent upon approval for optional <br/>
                               prepayment. 
                            </p>
                        </div>
                        {/* cancellation policy end */}
                        {/* buttons start */}
                        <div className="flex gap-[12px]">
                            <div className="grow shrink-[0] basis-[0]">
                                <Button fullWidth>Next</Button>
                            </div>
                            <div className="grow shrink-[0] basis-[0]">
                                <Button variant="outline" fullWidth>Cancel</Button>
                            </div>
                        </div>
                        {/* buttons end */}
                    </div>
                   
                               
                    

                    
                   
                    
                
                </div>
                <Footer/>
            </div>
        </div>
    )
}



export default TableDetails;