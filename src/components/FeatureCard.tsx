import React from "react";
import PremiumIcon from "/icons/premium.png";
import ShareIcon from "/icons/share.png";
import PaymentsIcon from "/icons/payments.png";

interface Props {
  title: string;
  desc: string;
}

const FeatureCard: React.FC<Props> = ({ title, desc }) => {
  const getIcon = () => {
    switch (title) {
      case "Premium Venues":
        return (
          <img
            src={PremiumIcon}
            alt="Premium Venues"
            className="w-12 h-12 mx-auto mt-6 mb-5 object-contain block"
          />
        );
      case "Share & Save":
        return (
          <img
            src={ShareIcon}
            alt="Share & Save"
            className="w-12 h-12 mx-auto mt-6 mb-5 object-contain block"
          />
        );
      case "Secure Payments":
        return (
          <img
            src={PaymentsIcon}
            alt="Secure Payments"
            className="w-12 h-12 mx-auto mt-6 mb-5 object-contain block"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="
        flex flex-col justify-center items-center text-center
        gap-4 px-6 py-10 
        bg-[#1A0712]/60 border border-[#FF0096]/30 
        rounded-xl hover:scale-[1.03] transition-transform duration-300
        shadow-[0_0_20px_rgba(255,0,150,0.15)]
        w-full
      "
      style={{
        minHeight: "220px",
      }}
    >
      {getIcon()}
      <h3
        className="text-[20px] font-semibold font-[Poppins]"
        style={{
          color: "#FFFFFF",
        }}
      >
        {title}
      </h3>
      <p
        className="text-[15px] font-normal font-[Poppins] leading-relaxed max-w-[280px]"
        style={{
          color: "#E4E4E4",
        }}
      >
        {desc}
      </p>
    </div>
  );
};

export default FeatureCard;
