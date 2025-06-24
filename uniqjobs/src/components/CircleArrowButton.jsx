import React, { useEffect, useState } from "react";

const CircleArrowButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setVisible(scrollY > window.innerHeight); // Show after first screen
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-24 right-4 z-50 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={handleClick}
        className="group relative w-[76px] h-[76px] overflow-hidden bg-transparent border-none cursor-pointer outline-none"
        aria-label="Scroll to top"
      >
        {/* Outer ring */}
        <span className="absolute inset-[7px] rounded-full border-[3px] border-black transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-75" />

        {/* Inner ring */}
        <span className="absolute inset-[7px] rounded-full border-[4px] border-red-800 scale-[1.3] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100" />

        {/* Arrow wrapper */}
        <div className="absolute top-0 left-0 flex transition-transform duration-500 ease-in-out group-hover:-translate-x-[69px]">
          {/* Up Arrow 1 */}
          <span className="block w-[30px] h-[30px] mt-[24px] ml-[22px] mr-[18px] rotate-[90deg]">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full fill-black"
            >
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
          </span>

          {/* Up Arrow 2 */}
          <span className="block w-[30px] h-[30px] mt-[24px] ml-[22px] mr-[18px] rotate-[90deg]">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full fill-black"
            >
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
          </span>
        </div>
      </button>
    </div>
  );
};

export default CircleArrowButton;
