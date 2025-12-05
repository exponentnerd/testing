import Button from "./Button"


const EventsCard : React.FC = () => {
    return (
        <div className="rounded-[12px] w-[368px] h-[264px] bg-[#121226]/20  py-[15px] px-[10px]">
            <div className="flex flex-col gap-[20px]">
                {/* card details */}
                <div className="flex gap-[67px] justify-between items-center">
                    <div className="flex flex-col gap-[10px]">
                        {/* event name*/}    
                         <h2 className="font-poppins font-semibold text-[20px] text-[#FF5EF1]">Afrobeat Friday</h2>            
                        {/* venue info */}
                        <div className="flex flex-col gap-[10px]">
                            {/* address */}
                            <div className="flex gap-[10px] items-center">
                                <img src="icons/proicons_location.png" alt="" />
                                <p className="font-poppins font-normal text-[14px] text-[#C3BFBF]">Acqua Toronto</p>
                            </div>
                            {/* time */}
                            <div className="flex gap-[10px] items-center">
                                <img src="icons/time.png" alt="" />
                                <p className="font-poppins font-normal text-[14px] text-[#C3BFBF]">Dec 2 . 11:30 PM</p>
                            </div>
                            {/* price */}
                            <div className="flex gap-[10px] items-center">
                                <img src="icons/time.png" alt="" />
                                <p className="font-poppins font-normal text-[14px] text-[#C3BFBF]">Min spend: $550</p>
                            </div>
                            {/* pairing */}
                            <div className="flex gap-[10px] items-center">
                                <img src="icons/users.png" alt="" />
                                <p className="font-poppins font-normal text-[14px] text-[#00BDF9]">Pairing available</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="bg-[url('images/hero-bg.png')] w-[105px] h-[140px] bg-cover bg-center bg-no-repeat rounded-[10px] ">

                    </div>
 
                </div>
                <div className="flex gap-[12px] items-center justify-between">
                        <div className="grow">
                            <Button variant="solid" fullWidth>View and Book</Button>
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

export default EventsCard;