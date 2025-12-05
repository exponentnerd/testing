import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import LogoutButton from "../components/LogoutButton";

const LandingPage: React.FC = () => {

  const navigate = useNavigate();
  
  return (
    <div className="relative w-full min-h-screen bg-[#04050A] text-white font-poppins overflow-hidden bg-[url('/images/hero-bg.png')] bg-fixed bg-center bg-cover">
      
      <Navbar />
      {/* Hero Section */}
      <div
        className="w-full min-h-screen bg-cover bg-center pb-10 flex flex-col items-center "
        
      >
        <div className="max-w-[430px] min-h-screen items-center mx-auto">
          
        <div className="w-[398px] flex flex-col justify-center items-center gap-[60px] mt-[180px]">
          {/* Headline + Description */}
          <div className="flex flex-col justify-center items-center gap-[45px] w-full">
            <div className="flex flex-col justify-center items-center gap-[36px] w-full">
              <div className="w-full flex flex-col justify-center items-center gap-[23px]">
                <h1 className="bg-gradient-to-right from-[#FF0096] to-[#00BDF9] bg-clip-text text-transparent text-[40px] font-semibold text-center leading-tight">
                  Share the Night. Share the Table.
                </h1>
                <p className="text-[#FFFFFF] text-[18px] font-normal text-center max-w-[328px] leading-relaxed">
                  Book high-end nightclub tables solo or share the experience.
                  Join exclusive venues without paying thousands alone.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col w-[365px] gap-[18px]">
              <Button fullWidth onClick={()=>navigate("/tables-and-venues")}>Browse Tables and Venues</Button>
              <Button variant="outline" fullWidth onClick={()=>navigate("/how-it-works")}>
                Learn How it Works
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center items-center gap-[30px]">
              {[
                { value: "50+", label: "Premium Venues" },
                { value: "1000+", label: "Happy Guests" },
                { value: "70%", label: "Cost Savings" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <h2
                    className="text-[35px] font-semibold font-[Inter]"
                    style={{
                      background:
                        "linear-gradient(90deg, #FF0096 0%, #00BDF9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.value}
                  </h2>
                  <p
                    className="text-[12px] font-medium font-[Inter]"
                    style={{
                      background:
                        "linear-gradient(90deg, #FF0096 0%, #00BDF9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="w-full flex flex-col gap-[14px]">
            <FeatureCard
              title="Premium Venues"
              desc="Access exclusive high-end nightclub tables"
            />
            <FeatureCard
              title="Share & Save"
              desc="Split costs with others and enjoy together"
            />
            <FeatureCard
              title="Secure Payments"
              desc="Easy booking with secure payment options"
            />

            {/* CTA Section */}
            <div
              className="p-6 bg-[#1A0712]/50 border border-[#FF0096]/30 rounded-xl flex flex-col items-center text-center shadow-md mt-6"
              style={{
                minHeight: "240px",
                boxShadow: "0 0 15px rgba(255, 0, 150, 0.1)",
              }}
            >
              <h3 className="text-[#FFFFFF] text-[22px] font-semibold leading-tight mb-3">
                Ready to Experience <br /> Premium Nightlife?
              </h3>
              <p className="text-[#E4E4E4] text-[14px] mb-6 max-w-[300px]">
                Join thousands of party-goers already enjoying exclusive venues.
              </p>
              <div className="w-[80%]">
                <Button fullWidth={false} onClick={()=>navigate("tables-and-venues")}>Browse Tables and Venues</Button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
