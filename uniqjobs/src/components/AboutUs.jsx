import React, { useRef, useState, useEffect } from 'react';

// Accordion Item Component
const AccordionItem = ({ title, children, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : '0px';
    }
  }, [isOpen]);

  return (
    <div className="transition-all duration-700">
      {/* Header */}
      <div
        className={`accordion-header w-full p-4 text-left cursor-pointer flex items-center justify-between border rounded-xl bg-white hover:shadow-2xl transition-all duration-300 ${
          isOpen ? 'rounded-b-none border-b-0' : ''
        }`}
        onClick={onClick}
      >
        <span className="tracking-wide text-black text-3xl font-bold font-primary">{title}</span>
        <span className={`arrow transition-transform duration-500 transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="accordion-content overflow-hidden transition-all duration-700 border border-t-0 rounded-b-xl bg-white"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <div className="px-6 pb-4 text-gray-800 tracking-wide text-lg font-secondary">
          {children}
        </div>
      </div>
    </div>
  );
};

// About Section Component
const AboutSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="aboutUs" className="flex justify-center items-center bg-[#f5f3f4] py-10">
      <div className="w-full px-4 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
          <AccordionItem
            title={
              <span>
                About <span className="text-red-600">Us</span>
              </span>
            }
            isOpen={openIndex === 0}
            onClick={() => handleToggle(0)}
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
            isOpen={openIndex === 1}
            onClick={() => handleToggle(1)}
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
