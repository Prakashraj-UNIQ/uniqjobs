import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";



export default function ContactPopup() {
    const myStyle2 = {
  '--spread': '90deg',
  '--shimmer-color': '#ffffff',
  '--radius': '100px',
  '--speed': '1.5s',
  '--cut': '0.1em',
  '--bg': 'radial-gradient(ellipse 80% 50% at 50% 120%, rgba(62, 61, 117), rgba(18, 18, 38))',
};
  const MotionDiv = motion.div;
  const [isOpen, setIsOpen] = useState(false);

  // Show form on page load
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          />
{/* <motion.div
  className="fixed top-1/2 left-1/2 z-50 w-full max-w-md p-6 bg-white rounded-2xl shadow-lg transform -translate-x-1/2 -translate-y-1/2"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
></motion.div> */}
          {/* Form Container */}
          <motion.div
            className="absolute sm:fixed -top-10 left-1/2 z-1005 w-full  max-w-5xl p-6 bg-white rounded-2xl shadow-lg transform -translate-x-1/2"
initial={{ y: -300, opacity: 0 }}
animate={{ y: 100, opacity: 1 }}
exit={{ y: -300, opacity: 0 }}
          >
            <div className="flex justify-center items-center mb-4">
               <h1 className="text-center text-2xl sm:text-4xl lg:text-3xl mb-2 text-black font-primary font-black">
                  Kickstart Your IT Career Today<span className="text-red-600"> Let’s Talk!</span></h1>
              <button onClick={closeForm} className="absolute  top-5 right-3 sm:right-8 text-gray-500 hover:text-gray-700 text-xl"><svg width="24px" height="24px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cancel</title> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="work-case" fill="#f00000" transform="translate(91.520000, 91.520000)"> <polygon id="Close" points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"> </polygon> </g> </g> </g></svg></button>
            </div>
            <form>
  <div className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-18 gap-0 lg:gap-8">
    <div>
      <div className="mb-5">
        <label htmlFor="name" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
          Full Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your full name, please"
          className="w-full rounded-md border border-[#e0e0e0] bg-white font-secondary font-bold py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md"
        />
      </div>
      <div className="mb-5 hidden sm:block">
        <label htmlFor="Degree" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
          Highest Degree
        </label>
        <div className="relative">
          <select
            name="Degree"
            id="Degree"
            className="peer w-full appearance-none rounded-md border border-[#e0e0e0] font-secondary font-bold bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md"
          >
            <option value="">Choose your qualification (e.g., ME / M.Tech)</option>
            <option value="B.Com">B.Com</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
            <option value="B.Sc">B.Sc</option>
            <option value="ME/M.Tech">ME / M.Tech</option>
            <option value="Others">Others</option>
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-transform duration-300 peer-focus:rotate-180">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Degree select - sm:hidden */}
      <div className="mb-5 block sm:hidden">
        <label htmlFor="DegreeMobile" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
          Highest Degree
        </label>
        <div className="relative">
          <select
            name="DegreeMobile"
            id="DegreeMobile"
            className="peer w-full appearance-none rounded-md border border-[#e0e0e0] font-secondary font-bold bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md"
          >
            <option value="">Choose your qualification</option>
            <option value="B.Com">B.Com</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
            <option value="B.Sc">B.Sc</option>
            <option value="ME/M.Tech">ME / M.Tech</option>
            <option value="Others">Others</option>
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-transform duration-300 peer-focus:rotate-180">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* What Are You Looking For? Select - Desktop */}
      <div className="mb-5 hidden sm:block">
        <label htmlFor="lookingFor" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
          What Are You Looking For?
        </label>
        <div className="relative">
          <select
            name="lookingFor"
            id="lookingFor"
            className="peer w-full appearance-none rounded-md border border-[#e0e0e0] font-secondary font-bold bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md"
          >
            <option value="">Select a course option (e.g., Only Placement)</option>
            <option value="Only Course">Only Course</option>
            <option value="Course with Assured Job">Course with Assured Job</option>
            <option value="Fast Track Course with Job">Fast Track Course with Job</option>
            <option value="Only Placement">Only Placement</option>
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-transform duration-300 peer-focus:rotate-180">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* What Are You Looking For? Select - Mobile */}
      <div className="mb-5 block sm:hidden">
        <label htmlFor="lookingForMobile" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
          What Are You Looking For?
        </label>
        <div className="relative">
          <select
            name="lookingForMobile"
            id="lookingForMobile"
            className="peer w-full appearance-none rounded-md border border-[#e0e0e0] font-secondary font-bold bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md"
          >
            <option value="">Select a course option</option>
            <option value="Only Course">Only Course</option>
            <option value="Course with Assured Job">Course with Assured Job</option>
            <option value="Fast Track Course with Job">Fast Track Course with Job</option>
            <option value="Only Placement">Only Placement</option>
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-transform duration-300 peer-focus:rotate-180">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
          Email Address <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Where we can reach you"
          className="w-full rounded-md border border-[#e0e0e0] bg-white font-secondary font-bold py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md"
        />
      </div>
    </div>

    <div>
      <div className="mb-5">
        <label htmlFor="collegeName" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
          College Name
        </label>
        <input
          type="text"
          name="collegeName"
          id="collegeName"
          placeholder="Your college or university"
          className="w-full rounded-md border border-[#e0e0e0] bg-white font-secondary font-bold py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="graduationYear" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
          Graduation Year
        </label>
        <input
          type="number"
          name="graduationYear"
          id="graduationYear"
          placeholder="When did you complete your degree?"
          className="w-full rounded-md border border-[#e0e0e0] bg-white font-secondary font-bold py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md"
        />
      </div>

      {/* Preferred Location Desktop */}
      <div className="mb-5 hidden sm:block">
        <label htmlFor="preferredLocation" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
          Preferred Location
        </label>
        <div className="relative">
          <select
            name="preferredLocation"
            id="preferredLocation"
            className="peer w-full appearance-none rounded-md border border-[#e0e0e0] font-secondary font-bold bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md"
          >
            <option value="">Choose preferred location</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Others">Others</option>
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-transform duration-300 peer-focus:rotate-180">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Preferred Location Mobile */}
      <div className="mb-5 block sm:hidden">
        <label htmlFor="preferredLocationMobile" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
          Preferred Location
        </label>
        <div className="relative">
          <select
            name="preferredLocationMobile"
            id="preferredLocationMobile"
            className="peer w-full appearance-none rounded-md border border-[#e0e0e0] font-secondary font-bold bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md"
          >
            <option value="">Choose location</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Others">Others</option>
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-transform duration-300 peer-focus:rotate-180">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="mobile" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
          Mobile Number <span className="text-red-600">*</span>
        </label>
        <input
          type="tel"
          name="mobile"
          id="mobile"
          placeholder="Enter your mobile number"
          className="w-full rounded-md border border-[#e0e0e0] bg-white font-secondary font-bold py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md"
        />
      </div>
    </div>
  </div>

  <div className="flex justify-center items-center">
    <a href="#contectForm">
            <button className=" group relative cursor-pointer overflow-hidden whitespace-nowrap px-6 py-4 text-white [background:var(--bg)] [border-radius:var(--radius)]  transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(62,61,117,0.7)] flex justify-center " style={myStyle2} >
              <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-[-100%] rotate-gradient">
                      <div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))]"></div>
                  </div>
              </div>
              <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
              <span className="z-10 w-48 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center ibm-normal text-base font-semibold leading-none tracking-tight text-white">Talk to Us Today</span>
          </button>
          </a>
  </div>
</form>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
