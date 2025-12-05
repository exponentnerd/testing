import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const HeroSection: React.FC = () => {
  return (
    <section
      className="pt-40 pb-20 px-6 md:px-12 bg-cover bg-center text-center"
      // ✅ FIXED: use /images path (public folder is served from root)
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto flex flex-col items-center gap-8"
      >
        <h1 className="text-3xl md:text-5xl font-semibold text-[#FF0096] leading-tight">
          Share the Night. Share the Table.
        </h1>

        <p className="text-white/90 text-lg md:text-xl max-w-md">
          Book high-end nightclub tables solo or share the experience. Join
          exclusive venues without paying thousands alone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <Button fullWidth>Browse Tables and Venues</Button>
          <Button variant="outline" fullWidth>
            Learn How it Works
          </Button>
        </div>

        <div className="flex justify-center items-center gap-10 mt-10 flex-wrap">
          {[
            { value: "50+", label: "Premium Venues" },
            { value: "1000+", label: "Happy Guests" },
            { value: "70%", label: "Cost Savings" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2 }}
              className="flex flex-col items-center"
            >
              <span className="text-4xl text-[#FF0096] font-semibold">
                {stat.value}
              </span>
              <span className="text-xs text-[#FF0096]">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
