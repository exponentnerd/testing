import { useNavigate } from "react-router-dom";
import Button from "./Button"


const TableCard : React.FC = () => {
    const navigate = useNavigate();
    return (
    
        <div className="flex flex-col rounded-[18px] p-[15px] pb-[20px] gap-[14px] w-[368px] bg-[#121226] ">
                            {/* card header */}
                            <p className="font-poppins font-semibold text-[20px] text-[#FFFFFF]">Funky Friday</p>
                            {/* card image */}
                            <div className="flex flex-col rounded-[12px] p-[14px] gap-[68px] h-[156px] w-full bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat">
                                <div className="flex justify-start">
                                    <div className="bg-[#FE4CB5] h-[21px] rounded-[25px] p-[10px] flex justify-center items-center">
                                        <p className="font-poppins font-semibold text-[12px] text-[#FFFFFF]">VIP Booth</p>
                                    </div>
                                </div>
                                <div className="flex rounded-[10px] p-[10px] bg-[#2F2E2E]/65 justify-between">
                                    <div className="flex gap-[10px] grow">
                                        <img src="icons/proicons_location.png"/>
                                        <p className="font-poppins font-normal text-[14px] text-[#FFFFFF]">Tape . London</p>
                                    </div>
                                    <div className="flex gap-[10px] grow justify-end">
                                     <img src="icons/solar_calendar-linear.png"/>
                                        <p className="font-poppins font-normal text-[14px] text-[#FFFFFF]">Tonight</p>
                                    </div>
                                </div>
                            </div>
                            {/* card details */}
                            <div className="flex flex-col gap-[14px]">
                                <div className="flex gap-[10px] items-center">
                                    <img src="icons/formkit_people.png"/>
                                    <p className="font-poppins font-normal text-[16px] text-[#FFFFFF]">Table for 9</p>
                                    <div className="p-[10px] rounded-[25px] h-[24px] flex justify-center items-center bg-[#2F2E2E]/70">
                                        <p className="font poppins font-medium text-[16px] text-[#00BDF9]">3 Spots Left</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[14px]">
                                    <div className="flex gap-[37px] bg-[#2F2E2E]/30 p-[10px] rounded-[10px] justify-between">
                                        <div className="flex gap-[4px] items-center grow">
                                            <p className="font-poppins font-normal text-[20px] text-[#FE4CB5]">$</p>
                                            <p className="font-poppins font-normal text-[16px] text-[#FFFFFF]">Cost per slot</p>
                                        </div> 
                                        <div>
                                            <p className="font-poppins font-normal text-[20px] text-[#FE4CB5]">$722</p>
                                        </div>
                                    </div>

                                    <div className=" bg-[#7764CA]/10 rounded-[10px] p-[10px]">
                                        <div className="flex flex-col gap-[10px]">
                                            <div className="flex flex-col gap-[10px]">
                                                <div className="flex justify-between">
                                                    <p className="font-poppins font-normal text-[16px] text-[#FFFFFF]">Total table cost</p>
                                                    <p className="font-poppins font-medium text-[16px] text-[#A66CFF]">$6500</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="font-poppins font-normal text-[16px] text-[#FFFFFF]">Guests paid</p>
                                                    <p className="font-poppins font-medium text-[16px] text-[#FE4CB5]">$4334</p>
                                                </div>
                                                <div className="flex justify-between border-t-[#C3BFBF] border-t-[0.25px] border-t-solid">
                                                    <p className="font-poppins font-normal text-[16px] text-[#FFFFFF]">Remaining</p>
                                                    <p className="font-poppins font-normal text-[16px] text-[#00BDF9]">$2166</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* hosted by */}
                                    <div className="flex gap-[10px] items-center">
                                        <div className="w-[35px] h-[35px] rounded-[100px] bg-[#FFFFFF] bg-[url('images/maya.png')] bg-center bg-cover bg-no-repeat"></div>
                                        <div className="flex gap-[4px] items-center">
                                            <p className="font-poppins font-normal italic text-[12px] text-[#FFFFFF]">Hosted by</p>
                                            <p className="font-poppins font-normal italic text-[12px] text-[#FFFFFF]">Maya S.</p>
                                            <div className="flex items-center">
                                                <img src="icons/material-symbols-light_star-rounded.png" alt="" />
                                                <p className="font-poppins font-semibold italic text-[10px] text-[#FFFFFF]">4.7</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-[12px] items-center justify-between">
                                    <div className="grow">
                                        <Button variant="solid" fullWidth onClick={()=>navigate("/table-details")}>Join This Table</Button>
                                    </div>  
                                    <div className="w-[36px] h-[36px] rounded-[50px] border-[1px] p-[4px] bg-[#121226] border-[#FE4CB5] flex justify-center items-center">
                                        <img src="icons/mdi-light_share.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}

export default TableCard;