import Button from "./Button"


const AltTableDetailCard : React.FC = () => {
    return (
        <div className="flex items-center justify-center rounded-[12px] border-[0.25px] py-[9px] px-[10px] border-[#C3BFBF] bg-[#121226]">
            {/* content start */}
            <div className="flex flex-col py-[10px] gap-[20px] w-[366px]">
                {/* content description */}
                <div className="flex justify-between">
                    <p className="font-poppins font-semibold text-[18px] text-[#FFFFFF]">
                        VIP Booth
                    </p>
                    <div className="flex items-center justify-center rounded-[50px] bg-[#FE4CB5] px-[10px]">
                        <p className="font-poppins font-normal text-[12px] text-[#1A1A1A]">
                        3 Spots left
                        </p>
                    </div>
                </div>
                {/* content description end */}
                {/* no of guest start */}
                <div className="flex gap-[8px] items-center">
                    <img src="icons/users.png" alt="" />
                    <p className="font-poppins font-normal text-[14px] text-[#FFFFFF]">6/9 Guests</p>
                </div>
                {/* no of guest end */}
                {/* cost start */}
                <div className="flex flex-col p-[10px] rounded-[10px] bg-[#2F2E2E] gap-[8px]">
                    <div className="flex justify-between">
                        <p className="font-poppins font-medium text-[16px] text-[#FFFFFF]">$ Total</p>
                        <p className="font-poppins font-normal text-[16px] text-[#FE4CB5]">$5000</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-poppins font-normal text-[14px] text-[#C3BFBF]">Cost Per Slot</p>
                        <p className="font-poppins font-normal text-[14px] text-[#C3BFBF]">$825</p>
                    </div>
                </div> 
                {/* cost end */}
                {/* hosted by start */}
                <div className="flex gap-[10px] items-center">
                    <div className="w-[35px] h-[35px] rounded-[100px] bg-[#FFFFFF] bg-[url('images/maya.png')] bg-center bg-cover bg-no-repeat"></div>
                    <div className="flex gap-[4px] items-center">
                        <p className="font-poppins font-normal italic text-[12px] text-[#FFFFFF] ">Hosted by</p>
                        <p className="font-poppins font-normal italic text-[12px] text-[#FFFFFF] ">Maya S.</p>
                        <div className="flex items-center">
                            <div className="w-[16px] h-[16px] flex items-center justify-center"><img src="icons/materials_star.png" alt="" /></div>
                            
                            <p className="font-poppins font-semibold italic text-[10px] text-[#FFFFFF]">4.7</p>
                        </div>
                    </div>
                </div>
                {/* hosted by end */}
                {/* preference start */}
                <div className="flex items-center gap-[8px] flex-wrap">
                
                    {/* preference */}
                    <div className="inline flex justify-center items-center rounded-[50px] border-[0.5px] border-[#C3BFBF] px-[10px]">
                        <p className="inline text-[#C3BFBF] font-poppins font-normal text-[12px] text-nowrap">Exclusive</p>
                    </div>
                    {/* preference */}
                    <div className="inline flex justify-center items-center rounded-[50px] border-[0.5px] border-[#C3BFBF] px-[10px]">
                        <p className="inline text-[#C3BFBF] font-poppins font-normal text-[12px] text-nowrap">Dedicated Host</p>
                    </div>{/* preference */}
                    <div className="inline flex justify-center items-center rounded-[50px] border-[0.5px] border-[#C3BFBF] px-[10px]">
                        <p className="inline text-[#C3BFBF] font-poppins font-normal text-[12px] text-nowrap">Strippers</p>
                    </div>{/* preference */}
                    <div className="inline flex justify-center items-center rounded-[50px] border-[0.5px] border-[#C3BFBF] px-[10px]">
                        <p className="inline text-[#C3BFBF] font-poppins font-normal text-[12px] text-nowrap">Bottle Service</p>
                    </div>{/* preference */}
                    
                
                </div>
                {/* preference end */}
                {/* buttons start */}
                
                <div className="grow shrink-[0] basis-[0]">
                    <Button fullWidth>Join Table</Button>
                </div>
                    
                
                {/* buttons end */}
            </div>
            {/* content end */}

        </div>
    )
}

export default AltTableDetailCard;