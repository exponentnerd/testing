import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const VerificationCode : React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-[url('/images/create-account.png')] bg-fixed bg-center bg-no-repeat bg-cover">
            <div className="flex flex-col gap-[40px] max-w-[430px] min-h-screen items-center mx-auto">
                {/* see how it works link */}
                <div className="flex flex-col self-stretch box-border pt-[80px] pr-[25px] pl-[24px] pb-[46px] justify-center items-center bg-[#151414] border-b-[0.25px] border-[#B3B4B4] border-solid">
                    <div className="flex self-stretch justify-between items-center shrink-[0]">
                        <svg className="shrink-[0]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.82497 13L12.725 17.9C12.925 18.1 13.021 18.3333 13.013 18.6C13.005 18.8667 12.9006 19.1 12.7 19.3C12.5 19.4833 12.2666 19.5793 12 19.588C11.7333 19.5967 11.5 19.5007 11.3 19.3L4.69996 12.7C4.59996 12.6 4.52896 12.4917 4.48696 12.375C4.44496 12.2583 4.42463 12.1333 4.42596 12C4.4273 11.8667 4.4483 11.7417 4.48896 11.625C4.52963 11.5083 4.6003 11.4 4.70096 11.3L11.301 4.7C11.4843 4.51667 11.7136 4.425 11.989 4.425C12.2643 4.425 12.5016 4.51667 12.701 4.7C12.901 4.9 13.001 5.13767 13.001 5.413C13.001 5.68834 12.901 5.92567 12.701 6.125L7.82497 11H19C19.2833 11 19.521 11.096 19.713 11.288C19.905 11.48 20.0006 11.7173 20 12C19.9993 12.2827 19.9033 12.5203 19.712 12.713C19.5206 12.9057 19.2833 13.0013 19 13H7.82497Z" fill="white"/>
                        </svg>
                        <p className="first-letter:uppercase text-[#FF0096] underline font-poppins font-[16px] font-normal text-center"><a href="/how-it-works">see how it works</a></p>
                    </div>
                </div>
                {/* content*/}
                <div className="flex flex-col w-full max-w-[358px] gap-[100px] mb-[54px]">
                    
                    <div className="flex flex-col self-stretch items-start gap-[47px]">
                         {/* header */}
                         <div className="flex flex-col gap-[26px]">
                            <h1 className="font-poppins font-bold text-[30px] text-[#00BDF9]">Enter verification <br/>code</h1>
                            <p className="font-poppins font-semibold text-[20px] text-[#FFFFFF]">Please enter the verification code <br/>sent to mynytmate@gmail.com</p>
                         </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-[28px]">
                            <div className="flex gap-[10px] justify-center">
                                <div className="py-[10px] px-[20px] bg-[#ECECEC] rounded-[10px] w-[81px] h-[58px] flex flex-col justify-center items-center"><p className="font-poppins font-semibold text-[25px] text-[#FF0096]">3</p></div>
                                <div className="py-[10px] px-[20px] bg-[#ECECEC] rounded-[10px] w-[81px] h-[58px] flex flex-col justify-center items-center"><p className="font-poppins font-semibold text-[25px] text-[#FF0096]">1</p></div>
                                <div className="py-[10px] px-[20px] bg-[#ECECEC] rounded-[10px] w-[81px] h-[58px] flex flex-col justify-center items-center"><p className="font-poppins font-semibold text-[25px] text-[#FF0096]">7</p></div>
                                <div className="py-[10px] px-[20px] bg-[#ECECEC] rounded-[10px] w-[81px] h-[58px] flex flex-col justify-center items-center"><p className="font-poppins font-semibold text-[25px] text-[#FF0096]">7</p></div>
                                
                            </div>
                            <Button variant="solid" fullWidth onClick={()=>navigate("/verified")}>Verify email</Button>
                        </div>
                        <div className="flex  self-stretch justify-center py-[10px] px-[20px]">
                            <p className="font-poppins font-semibold text-[14px] text-[#FFFFFF]">Didn’t receive email? <a href="" className="text-[#00BDF9]">Click here to resend</a></p>
                        </div>
                        <div className="flex  self-stretch justify-center">
                            <a href="/login" className="flex gap-[4px]">
                                <div className="w-[24px] h-[24px] flex flex-col items-center justify-center"><img src="/icons/back-arrow.png"/></div>
                                <p className="font-poppins font-semibold text-[14px] text-[#FFFFFF] pr-[4px]">Back to Login</p>
                            </a>
                            
                        </div>
                    </div>
                      
                    
                </div>
            </div>
        </div>
    )
}

export default VerificationCode;