import { useNavigate } from "react-router-dom";
import Button from "./Button"


const VenuesCard : React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col rounded-[18px] w-[368px] h-[390px] bg-[#121226]/20 gap-[14px] items-center overflow-hidden">
                            {/* card image */}
                            <div className="h-[163px] w-full bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat">
                                <div className="flex gap-[2px] bg-[#FE4CB5]/70 px-[10px] rounded-[20px] h-[20px] w-fit mt-[16px] ml-[234px] flex items-center justify-center">
                                    <img src="icons/mingcute_user-add-light.png"/>
                                    <p className="text-[#FFFFFF] w-max text-[10px] font-medium font-poppins">Pairing Available</p>
                                </div>
                            </div>
                            {/* card details */}
                            <div className="flex flex-col gap-[30px] max-w-[330px] w-full">
                                <div className="flex flex-col gap-[10px]">
                                    {/* venue name and rating */}
                                    <div className="flex justify-between">
                                        <h2 className="font-poppins font-semibold text-[20px] text-[#FF5EF1]">Tape</h2>
                                        <div className="flex items-center">
                                            <img src="icons/material-symbols-light_star-rounded.png"/>
                                            <p className="font-poppins text-[#FFFFFF] font-bold text-[12px]">4.7</p>
                                        </div>
                                    </div>
                                    {/* venue info */}
                                    <div className="flex flex-col gap-[10px]">
                                        {/* address */}
                                        <div className="flex gap-[10px] items-center">
                                            <img src="icons/proicons_location.png" alt="" />
                                            <p className="font-poppins font-normal text-[14px] text-[#C3BFBF]">Main street. London</p>
                                        </div>
                                        {/* time */}
                                        <div className="flex gap-[10px] items-center">
                                            <img src="icons/time.png" alt="" />
                                            <p className="font-poppins font-normal text-[14px] text-[#C3BFBF]">11:30 PM till late</p>
                                        </div>
                                        {/* available tables and price */}
                                        <div className="flex gap-[10px] items-center justify-between">
                                            <div className="flex items-center gap-[10px]">
                                                <img src="icons/users.png" alt="" />
                                                <p className="font-poppins font-normal text-[14px] text-[#00BDF9]">15 tables available</p>
                                            </div>
                                            <p className="font-poppins font-bold text-[14px] text-[#FFFFFF]">Min spend: $550</p>
                                        </div>
                                    </div>
                                </div>

                                   

                                <div className="flex gap-[12px] items-center justify-between">
                                    <div className="grow">
                                        <Button variant="solid" fullWidth onClick={()=>navigate("/venue-details")}>View and Book</Button>
                                    </div>  
                                    <div className="w-[36px] h-[36px] rounded-[50px] border-[1px] p-[4px] bg-[#121226] border-[#FE4CB5] flex justify-center items-center">
                                        <img src="icons/mdi-light_share.png" alt="" />
                                    </div>
                                    <div className="w-[36px] h-[36px] rounded-[50px] border-[1px] p-[4px] bg-[#121226] border-[#FE4CB5] flex justify-center items-center">
                                        <img src="icons/mdi-light_share.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}

export default VenuesCard;