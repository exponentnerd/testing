import Button from "./Button"


const InstructionsCard : React.FC = () => {
    return (
        <div className="flex py-[20px] gap-[34px] border-[0.25px] rounded-[12px] w-[398px] bg-[#1D0D2F]/70 border-[#FF47B3]/20 justify-center">
            <div className="w-[50px] h-[50px] bg-[#FE73C5] rounded-[100px]">

            </div>
            {/* instruction start */}
            <div className="flex flex-col gap-[5px] w-[258px]">
                <div className="flex gap-[20px]">
                    <h3 className="font-poppins font-semibold text-[25px] text-[#FF47B3] ">1</h3>
                    <h3 className="font-poppins font-semibold text-[20px] text-[#FFFFFF] ">Browse Venues & <br/>Tables</h3>
                </div>
                <p className="font-poppis font-normal text-[16px] text-[#B3B4B4]">Explore our curated selection of <br/>
                    premium nightclubs and find the <br/>
                    perfect table for your night out.
                </p>
            </div>
            {/* instruction end */}
        </div>
    )
}

export default InstructionsCard;