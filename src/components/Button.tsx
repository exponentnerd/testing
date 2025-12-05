import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  fullWidth = false,
  onClick,
}) => {
    const Wrapper = styled.div`

    .solidstyle{
      box-sizing: border-box;
      background:linear-gradient(90deg, #FF0096 0%, #00BDF9 100%);
      color: #FFFFFF;

    }
    .outlinestyle{
      box-sizing: border-box;
      position:relative;
      // background-color: transparent;
      color: #FFFFFF;
      // border: 2px solid transparent;
      // background-image:linear-gradient(#04050A, #04050A), linear-gradient(90deg, #FF0096 0%, #00BDF9 100%);
      // background-origin: border-box;
      // background-clip: padding-box, border-box;

    }

    .outlinestyle::before{
      content:"";
      position:absolute;
      inset:0;
      z-index:1;
      background:linear-gradient(90deg, #FF0096 0%, #00BDF9 100%);
      border-radius: calc(infinity * 1px);
      padding: 1px;
      // mask-image: linear-gradient(transparent, transparent);
      mask: 
        linear-gradient(#000 0 0) exclude, 
        linear-gradient(#000 0 0) content-box;
  
    }
  `
  // Force solid button styles

  // Force outline button styles

  return (
    <Wrapper>
    <button
      onClick={onClick}
      className={`font-poppins text-[16px] font-medium rounded-full py-[14px] px-[24px] transition-all duration-300 
        ${fullWidth ? "w-full" : ""} ${variant=="solid"?"solidstyle":"outlinestyle"} hover:opacity-90`}
      
    >
      {children}
    </button>
    </Wrapper>
  );


};

export default Button;
