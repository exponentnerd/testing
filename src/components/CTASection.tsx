import React from "react";
import Button from "./Button";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

const CTASection: React.FC<CTAProps> = ({
  title = "Ready to Experience Premium Nightlife?",
  description = "Join thousands of party-goers already enjoying exclusive venues.",
  buttonText = "Browse Tables and Venues",
}) => {
  return (
    <div
      className="w-full max-w-3xl mx-auto bg-[#1A0712]/50 border border-[#FF0096]/30 rounded-xl flex flex-col items-center justify-between text-center p-8 gap-6 shadow-md"
      style={{ minHeight: "280px" }}
    >
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-white text-[22px] font-semibold leading-tight">
          {title}
        </h3>
        <p className="text-[#E4E4E4] text-[14px]">{description}</p>
      </div>

      <div className="w-full mt-auto">
        <Button fullWidth>{buttonText}</Button>
      </div>
    </div>
  );
};

export default CTASection;
