import React from 'react'
import { useNavigate } from 'react-router-dom'

const SecondaryButton = ({ buttonText }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/aboutus`); // Navigate to contact form route
  };

  return (
    <div>
      <button
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-black text-white py-3 px-8 rounded-full hover:from-black hover:to-red-600 transition duration-900 ease-in-out shadow-lg hover:shadow-xl"
      >
        <span>{buttonText}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 12l-6 4V8l6 4zm8 0l-6 4V8l6 4z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SecondaryButton;
