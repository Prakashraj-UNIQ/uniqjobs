import React from 'react'

const Contact = () => {

const myStyle2 = {
  '--spread': '90deg',
  '--shimmer-color': '#ffffff',
  '--radius': '100px',
  '--speed': '1.5s',
  '--cut': '0.1em',
  '--bg': 'radial-gradient(ellipse 80% 50% at 50% 120%, rgba(62, 61, 117), rgba(18, 18, 38))',
};
  return (
    <div id="contectForm" className=" flex items-center justify-center  lg:p-6  xl:p-12 bg-white">


      <div className="mx-auto w-full max-w-7xl bg-white">
        <div className="mb-12">
          <h1 className="text-center text-2xl sm:text-4xl lg:text-4xl mt-6  lg:mt-0 xl:text-5xl text-black font-primary font-black">
            Kickstart Your IT Career Today<span className="text-red-600"> Let’s Talk!</span></h1>
        </div>
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-18 gap-0 lg:gap-8">
            <div>
              <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input type="text" name="name" id="name" placeholder="Your full name, please"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white font-secondary font-bold py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md" />
              </div>
              <div className="mb-5 hidden sm:block">
                <label htmlFor="Degree" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
                  Highest Degree
                </label>
                <div className="relative">
                  <select name="Degree" id="Degree"
                    className="peer w-full appearance-none rounded-md border border-[#e0e0e0] font-secondary font-bold bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md">
                    <option value="">Choose your qualification (e.g., ME / M.Tech)</option>
                    <option value="B.Com">B.Com</option>
                    <option value="MBA">MBA</option>
                    <option value="MCA">MCA</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="ME/M.Tech">ME / M.Tech</option>
                    <option value="Others">Others</option>
                  </select>
                  <div
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-transform duration-300 peer-focus:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mb-5 block sm:hidden ">
                <label htmlFor="Degree" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
                  Highest Degree
                </label>
                <div className="relative">
                  <select name="Degree" id="Degree"
                    className="peer w-full appearance-none rounded-md border border-[#e0e0e0] font-secondary font-bold bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md">
                    <option value="">Choose your qualification</option>
                    <option value="B.Com">B.Com</option>
                    <option value="MBA">MBA</option>
                    <option value="MCA">MCA</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="ME/M.Tech">ME / M.Tech</option>
                    <option value="Others">Others</option>
                  </select>

             
                  <div
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-transform duration-300 peer-focus:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mb-5 hidden sm:block">
                <label htmlFor="Degree" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
                  What Are You Looking For?
                </label>
                <div className="relative">
                  <select name="Degree" id="Degree"
                    className="peer w-full appearance-none rounded-md border border-[#e0e0e0] font-secondary font-bold bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md">
                    <option value="">Select a course option (e.g., Only Placement)</option>
                    <option value="B.Com">Only Course</option>
                    <option value="MBA">Course with Assured Job</option>
                    <option value="MCA">Fast Track Course with Job</option>
                    <option value="B.Sc">Only Placement</option>
                  </select>

              
                  <div
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-transform duration-300 peer-focus:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mb-5 block sm:hidden">
                <label htmlFor="Degree" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
                  What Are You Looking For?
                </label>
                <div className="relative">
                  <select name="Degree" id="Degree"
                    className="peer w-full appearance-none rounded-md border border-[#e0e0e0] font-secondary font-bold bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md">
                    <option value="">Select a course option</option>
                    <option value="B.Com">Only Course</option>
                    <option value="MBA">Course with Assured Job</option>
                    <option value="MCA">Fast Track Course with Job</option>
                    <option value="B.Sc">Only Placement</option>
                  </select>

           
                  <div
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-transform duration-300 peer-focus:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input type="email" name="email" id="email" placeholder="Where we can reach you"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white font-secondary font-bold py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md" />
              </div>
            </div>
            <div>
              <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
                  College Name
                </label>
                <input type="text" name="name" id="name" placeholder="Your college or university"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white font-secondary font-bold py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md" />
              </div>
              <div className="mb-5">
                <label htmlFor="phone" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
                  Graduation Year
                </label>
                <input type="number" name="phone" id="phone" placeholder="When did you complete your degree?"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white font-secondary font-bold py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md" />
              </div>
              <div className="mb-5 hidden sm:block">
                <label htmlFor="Degree" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
                  Preferred Location
                </label>
                <div className="relative">
                  <select name="Degree" id="Degree"
                    className="peer w-full appearance-none rounded-md border border-[#e0e0e0] font-secondary font-bold bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md">
                    <option value="">Choose your training city (e.g., Salem)</option>
                    <option value="B.Com">Chennai</option>
                    <option value="MBA">Coimbatore</option>
                    <option value="MCA">Madurai</option>
                    <option value="B.Sc">Trichy</option>
                    <option value="ME/M.Tech">Thirunelveli</option>
                    <option value="Others">Salem</option>
                    <option value="Others">Pondicherry</option>
                    <option value="Others">Bangalore</option>
                    <option value="Others">Tirupati</option>
                    <option value="Others">Online</option>
                  </select>

                  <div
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-transform duration-300 peer-focus:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mb-5 block sm:hidden">
                <label htmlFor="Degree" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
                  Preferred Location
                </label>
                <div className="relative">
                  <select name="Degree" id="Degree"
                    className="peer w-full appearance-none rounded-md border border-[#e0e0e0] font-secondary font-bold bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md">
                    <option value="">Choose your training city</option>
                    <option value="B.Com">Chennai</option>
                    <option value="MBA">Coimbatore</option>
                    <option value="MCA">Madurai</option>
                    <option value="B.Sc">Trichy</option>
                    <option value="ME/M.Tech">Thirunelveli</option>
                    <option value="Others">Salem</option>
                    <option value="Others">Pondicherry</option>
                    <option value="Others">Bangalore</option>
                    <option value="Others">Tirupati</option>
                    <option value="Others">Online</option>
                  </select>

                 
                  <div
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-transform duration-300 peer-focus:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="mb-3 block text-base font-medium jakarta-bold text-[#07074D]">
                  Contact Number <span className="text-red-600">*</span>
                </label>
                <input type="number" name="email" id="email" placeholder="Your mobile number"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white font-secondary font-bold py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md" />
              </div>
            </div>
          </div>
          <div className="py-10 max-w-7xl mx-auto flex justify-center">
            <button className=" group relative cursor-pointer overflow-hidden whitespace-nowrap px-6 py-4 text-white [background:var(--bg)] [border-radius:var(--radius)]  transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(62,61,117,0.7)] flex justify-center " style={myStyle2} >
              <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-[-100%] rotate-gradient">
                      <div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))]"></div>
                  </div>
              </div>
              <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
              <span className="z-10 w-48 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center font-secondary  text-base font-semibold leading-none tracking-tight text-white">Send a Message</span>
          </button>
          </div>
        </form>
      </div>
  </div>
  )
}

export default Contact
