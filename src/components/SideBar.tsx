import React from "react";

interface Props {
  open: boolean;
  toggle: () => void;
}

const SideBar: React.FC<Props> = ({ open, toggle }) => {
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
    <>
      {/* Overlay */}
      <div
        className={`z-99 fixed inset-0 bg-black/60 backdrop-blur-[4px] transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggle}
      ></div>

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-[250px] sm:w-[280px] 
        bg-[#0F162580] backdrop-blur-[16px] border-r border-white/10 
        text-white transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-xl 
        ${open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} 
        z-[100] overflow-y-auto`}
      >
        <div className="flex flex-col h-full px-6 py-8 font-poppins">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
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

            {/* Close Button styled like Get Started */}
            <button
              onClick={toggle}
              style={{
                background: "linear-gradient(90deg, #FF0096 0%, #00BDF9 100%)",
                borderRadius: "9999px",
                padding: "8px 18px",
                color: "#FFFFFF",
                fontSize: "12px",
                fontWeight: 500,
                border: "none",
                fontFamily: "Poppins",
              }}
              className="hover:opacity-90 transition-all"
            >
              Close
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3 mb-[40px]">
            {links.map((item, index) => (
              <div
                key={index}
                className={`px-[14px] py-[10px] rounded-[12px] cursor-pointer hover:bg-white/5 transition-all duration-200 ${
                  item === "Get Promoter Code" ? "mb-[24px]" : ""
                }`}
              >
                <div className="text-[#FFFFFF] text-[13px] font-normal font-poppins">
                  {item}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Buttons */}
          <div className="flex flex-col items-center mt-2 mb-[50px] gap-[22px]">
            {bottomLinks.map((item, index) => (
              <div
                key={index}
                className="w-[85%] px-[14px] py-[12px] rounded-[10px] border border-[#B3B4B4] cursor-pointer hover:border-[#FF0096] transition-all duration-200 flex items-center justify-center gap-[10px] bg-white/5 backdrop-blur-sm"
              >
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
            ))}
          </div>

          {/* Join Us Section */}
          <div className="mt-[16px] flex flex-col items-center gap-[22px]">
            <div className="text-[#FFFFFF] text-[12px] font-normal">Join Us</div>
            <div className="flex items-center justify-center" style={{ gap: "30px" }}>
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
      </aside>
    </>
  );
};

export default SideBar;
