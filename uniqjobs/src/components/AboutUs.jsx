import React from 'react';

// Accordion Item Component (Static, Full Height)
const AccordionItem = ({ title, children }) => {
  return (
    <div className="flex flex-col border rounded-xl bg-white hover:shadow-2xl transition-all duration-300 h-full">
      {/* Header */}
      <div className="accordion-header p-4 text-left flex items-center justify-between">
        <span className="tracking-wide text-black text-3xl font-bold font-primary">{title}</span>
      </div>

      {/* Content - always open */}
      <div className="accordion-content px-6 pb-4 text-gray-800  text-lg  font-secondary flex-1" style={{ wordSpacing: '0.1rem' }}>
        {children}
      </div>
    </div>
  );
};

// About Section Component bg-[#f5f3f4]
const AboutSection = () => {
  return (
    <section id="aboutUs" className="flex justify-center items-center bg-white  py-20">
      <div className="w-full px-4 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
          <AccordionItem
            title={
              <span>
                Who <span className="text-red-600">We are?</span>
              </span>
            }
          >
            At UniqJobs, we’re more than a training institute — we’re a launchpad for tech careers.
            Established in 2007 by industry professionals from TCS and powered by UNIQ Technologies,
            we’ve been shaping the future of IT talent in Chennai for over 13+ years.
            We’re proud to be ISO 9001:2015 certified, a NASSCOM member, and partnered with 180+ companies for placement support.
          </AccordionItem>

          <AccordionItem
            title={
              <span>
                What <span className="text-red-600">We Do?</span>
              </span>
            }
          >
            We specialize in industry-ready software training programs with 100% placement assurance.
            Our expert-led, practical courses are designed to help freshers, career changers, and working professionals
            gain real-world tech skills.
          </AccordionItem>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
