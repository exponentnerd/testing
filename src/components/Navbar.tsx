import React, { useState } from "react";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = auth.currentUser; // This checks if someone is logged in

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="relative z-[1]">
      {/* Navbar */}
      <nav className="fixed top-0 w-full">
        <div className="w-full max-w-[430px] h-[150px] border-b-[0.25px] border-[#B3B4B4] flex justify-center bg-[#04050A]/80 backdrop-blur-md z-[100] mx-auto">
          <div className="flex max-w-[398px] w-full self-start mt-[80px] justify-between px-4">

            {/* Left: Hamburger + Logo */}
            <div className="flex items-center gap-[12px]">
              <button
                onClick={toggleMenu}
                className="bg-transparent border-none p-0 focus:outline-none"
              >
                <img
                  src="/icons/hambuger.png"
                  alt="Menu"
                  className="w-[35px] h-[35px] object-contain"
                />
              </button>

              <img
                src="/images/lg.png"
                alt="NYTMATE Logo"
                className="h-[50px] object-contain"
              />
            </div>

            {/* Right: Auth Buttons */}
            <div className="flex items-center gap-4">

              {/* Conditional: Show "Sign In" OR "Log Out" */}
              {user ? (
                <button
                  onClick={handleLogout}
                  className="text-[#FFFFFF] text-[16px] font-poppins font-medium cursor-pointer hover:opacity-80 transition-all bg-transparent border-none"
                >
                  Log Out
                </button>
              ) : (
                <a
                  href="/login"
                  className="text-[#FFFFFF] text-[16px] font-poppins font-normal cursor-pointer hover:opacity-80 transition-all"
                >
                  Sign In
                </a>
              )}

              {/* Get Started Button */}
              <button
                onClick={() => navigate("/create-account")}
                style={{
                  background: "linear-gradient(90deg, #FF0096 0%, #00BDF9 100%)",
                }}
                className="w-[129px] h-[40px] rounded-[50px] font-poppins text-[16px] font-normal text-white flex items-center justify-center hover:opacity-90 transition-all"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <SideBar open={menuOpen} toggle={toggleMenu} />
    </div>
  );
};

export default Navbar;