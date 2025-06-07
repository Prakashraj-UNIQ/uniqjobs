import React from 'react'
import mainbg from '../assets/images/cta-cover4.jpg' 
import SecondaryButton from '../components/Courses/SecondaryButton'
const CtaBanner = () => {
  return (
    <div>
      <div className="relative overflow-hidden w-full h-[350px]">
  {/* Background Image */}
  <img
    src={mainbg}
    alt="Banner Background"
    className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-95 z-10"></div>

  {/* Optional CTA Content */}
  <div className="relative z-20 p-6 text-white flex flex-col items-start justify-center h-full sm:pl-10 lg:pl-20 w-full sm:w-3/5">
    <h1 className="text-xl lg:text-3xl font-bold font-primary mb-2">Take Charge of Your Career
</h1>
    <p className="mt-2 font-secondary text-sm lg:text-lg mb-2">Get expert career guidance, unlock endless learning opportunities, take industry-relevant assessments, and land top job offers — all with UniqJobs Career Creator.
</p>
  <SecondaryButton buttonText={"Explore Now"} />
  </div>
</div>

    </div>
  )
}

export default CtaBanner
