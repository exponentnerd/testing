import Button from "./Button"


const VenueRateCard : React.FC = () => {
    return (
        <div className="rounded-[12px] w-[399px] h-[146px] bg-[#1A1A1A]/30  py-[15px] px-[10px]">
            <div className="flex gap-[10px] items-center justify-between">
                <div className="flex flex-col gap-[10px] items-center">
                    <div className="flex rounded-[100px] p-[10px] w-[60px] h-[60px] bg-[#2F2E2E] justify-center items-center">
                        <h1 className="font-poppins text-[#00BDF9] font-bold text-[24px]">#1</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center">
                            <img src="icons/material-symbols-light_star-rounded.png" alt="" />
                            <p className="font-poppins font-semibold italic text-[10px] text-[#FFFFFF]">5.0</p>
                        </div>
                        <p className="font-poppins italic font-light text-[10px] text-[#C3BFBF]">By 50 guests</p>
                    </div>
                    
                </div>
                {/* card details */}
                <div className="flex gap-[26px] justify-between items-center">
                    <div className="flex flex-col gap-[10px]">
                        {/* event name*/}    
                            <h2 className="font-poppins font-semibold text-[16px] text-[#FF5EF1]">Afrobeat Friday</h2>            
                        {/* venue info */}
                        <div className="flex flex-col gap-[4px]">
                            {/* address */}
                            <div className="flex gap-[10px] items-center">
                                <img src="icons/proicons_location.png" alt="" />
                                <p className="font-poppins font-normal text-[12px] text-[#C3BFBF]">Acqua Toronto</p>
                            </div>
                            {/* time */}
                            <div className="flex gap-[10px] items-center">
                                <img src="icons/time.png" alt="" />
                                <p className="font-poppins font-normal text-[12px] text-[#C3BFBF]">Dec 2 . 11:30 PM</p>
                            </div>
                            {/* price */}
                            <div className="flex gap-[10px] items-center">
                                <img src="icons/time.png" alt="" />
                                <p className="font-poppins font-normal text-[12px] text-[#C3BFBF]">Min spend: $550</p>
                            </div>
                            {/* pairing */}
                            <div className="flex gap-[10px] items-center">
                                <img src="icons/users.png" alt="" />
                                <p className="font-poppins font-normal text-[12px] text-[#00BDF9]">Pairing available</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="bg-[url('images/hero-bg.png')] w-[88px] h-[118px] bg-cover bg-center bg-no-repeat rounded-[10px] ">

                    </div>
            
                </div>
                
            </div>
        </div>
    )
}

export default VenueRateCard;