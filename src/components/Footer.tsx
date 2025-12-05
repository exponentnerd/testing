import React from "react";

const Footer: React.FC = () => {
  const links = [
    "Bookings",
    "Active Tables",
    "Upcoming Events",
    "Venues",
    "Saved",
    "How it works",
    "About",
    "Contact Us",
    "Get Promoter Code",
  ];

  const bottomLinks = [
    { label: "Profile", icon: "/icons/profile.png" },
    { label: "Support", icon: "/icons/support.png" },
    { label: "Language", icon: "/icons/language.png" },
  ];

  const socialLinks = [
    { icon: "/icons/instagram.png", url: "#" },
    { icon: "/icons/tiktok.png", url: "#" },
    { icon: "/icons/email.png", url: "#" },
  ];

  return (
    <footer className="w-full bg-[#0F1625] text-white font-poppins flex justify-center py-10 px-6 mt-[120px]">
      <div className="w-full max-w-[284px] flex flex-col gap-[70px]">
        {/* Top Section */}
        <div className="flex flex-col gap-[40px]">
          {/* Logo and Links Section */}
          <div className="flex flex-col gap-4">
            {/* Logo + Gradient Text */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/images/lg.png"
                alt="logo"
                className="w-[44px] h-[42px] rounded-[25px]"
              />
              <span
                className="text-[18px] font-semibold tracking-wide"
                style={{
                  background: "linear-gradient(90deg, #FF0096 0%, #00BDF9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                NYTMATE
              </span>
            </div>

            {/* Navigation links */}
            {links.map((item, index) => (
              <div
                key={index}
                className="px-[14px] py-[10px] rounded-[12px] cursor-pointer hover:bg-white/5 transition-all duration-200"
              >
                <div className="text-[#FFFFFF] text-[12px] font-normal font-poppins">
                  {item}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Links with Icons (FORCED SPACE) */}
          <div className="flex flex-col mt-6">
            {bottomLinks.map((item, index) => (
              <div
                key={index}
                className="w-full px-[14px] py-[12px] rounded-[12px] border border-[#B3B4B4] cursor-pointer hover:border-[#FF0096] transition-all duration-200 bg-[#0F1625]"
                style={{
                  marginBottom: "16px", // 💥 visible gap between buttons
                }}
              >
                <div className="flex items-center gap-[12px]">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-5 h-5 object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                  <span className="text-[#FFFFFF] text-[13px] font-normal font-poppins">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Join Us Section (moved upward slightly) */}
          <div className="mt-8 flex flex-col gap-4">
            <div className="text-[#FFFFFF] text-[11px] font-normal -mt-2">
              Join Us
            </div>
            <div className="flex items-center" style={{ gap: "24px" }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social.icon}
                    alt="social icon"
                    className="w-6 h-6 object-contain hover:opacity-80 transition"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Terms & Policies Section (forced upward) */}
        <div className="flex flex-col gap-2 mt-[-28px]">
          <div className="text-[#B3B4B4] text-[12px] font-normal font-poppins cursor-pointer hover:text-white">
            TERMS OF SERVICE
          </div>
          <div className="text-[#B3B4B4] text-[12px] font-normal font-poppins cursor-pointer hover:text-white">
            PRIVACY POLICY
          </div>
          <div className="text-[#B3B4B4] text-[12px] font-normal font-poppins mt-1">
            2025 NYTMATE.COM
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
