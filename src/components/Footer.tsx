import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-center py-6 text-sm text-neutral-400 bg-[#1a1e23]">
      &copy; {new Date().getFullYear()} Sinan Tokmak
    </footer>
  );
};

export default Footer;
