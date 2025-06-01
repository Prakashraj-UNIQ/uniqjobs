import React from "react";

const CheckIcon = () => (
  <svg
    className="shrink-0 h-5 w-5 text-green-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const MailIcon = () => (
   <svg
                        className="w-4 h-4 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 32 32"
                        style={{
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 2
                        }}  

                        version="1.1"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:serif="http://www.serif.com/"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g id="Layer1">
                            {" "}
                            <path d="M16,2c-6.071,0 -11,4.929 -11,11c0,2.778 1.654,6.081 3.699,9.019c2.939,4.224 6.613,7.707 6.613,7.707c0.386,0.365 0.99,0.365 1.376,-0c0,-0 3.674,-3.483 6.613,-7.707c2.045,-2.938 3.699,-6.241 3.699,-9.019c0,-6.071 -4.929,-11 -11,-11Zm0,5.5c-3.036,0 -5.5,2.464 -5.5,5.5c0,3.036 2.464,5.5 5.5,5.5c3.036,-0 5.5,-2.464 5.5,-5.5c0,-3.036 -2.464,-5.5 -5.5,-5.5Zm0,2c1.932,0 3.5,1.568 3.5,3.5c0,1.932 -1.568,3.5 -3.5,3.5c-1.932,-0 -3.5,-1.568 -3.5,-3.5c0,-1.932 1.568,-3.5 3.5,-3.5Z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const HouseCard = ({
  title,
  owner,
  price,
  priceLabel,
  sharingOptions,
  address,
  phoneNumbers
}) => {
  return (
    <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row items-center md:items-stretch bg-white border-2 border-primary-400 rounded-lg shadow-lg m-5">
      {/* Left Side */}
      <div className="md:w-1/4 p-6 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-2xl text-gray-900 mt-2 font-bold font-primary">{title}</h3>
          <p className="mt-2 text-gray-600">{owner}</p>
          <div className="mt-4 font-bold">
            <span className="text-4xl font-bold font-secondary">{price}{priceLabel}</span>
          </div>
        </div>
      </div>

      {/* Middle */}
      <div className="md:w-1/2 p-6 border-t md:border-t-0 md:border-l border-gray-200">
        <ul className="mt-2 space-y-3">
          
          {Array.isArray(sharingOptions) &&
            sharingOptions.map((option, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckIcon />
                <span>{option}</span>
              </li>
            ))}
        </ul>
      </div>

      {/* Right Side */}
      <div className="md:w-1/4 p-6 border-t md:border-t-0 md:border-l border-gray-200 flex flex-col items-center justify-center">
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center animate-pulse">
                <MailIcon />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-base font-bold font-primary text-black">Address</p>
              <span className="text-black hover:text-primary-400 transition">{address}</span>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div
                className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center animate-pulse"
                style={{ animationDelay: "0.2s" }}
              >
                <PhoneIcon />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-base font-bold font-primary text-black">Phone</p>
              {Array.isArray(phoneNumbers) &&
                phoneNumbers.map((number, i) => (
                  <span key={i} className="block text-black hover:text-primary-400 transition">
                    {number}
                  </span>
                ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

// ✅ Default props
HouseCard.defaultProps = {
  sharingOptions: [],
  phoneNumbers: [],
};

export default HouseCard;
