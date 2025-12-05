import React from "react";

interface Props {
  open: boolean;
  toggle: () => void;
}

const HamburgerButton: React.FC<Props> = ({ open, toggle }) => {
  return (
    <button
      aria-label="Toggle menu"
      onClick={toggle}
      className="w-10 h-10 flex items-center justify-center md:hidden"
    >
      <span
        className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"}`}
      />
      <span
        className={`block w-6 h-[2px] bg-white transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"} my-0.5`}
      />
      <span
        className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${open ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"}`}
      />
    </button>
  );
};

export default HamburgerButton;
