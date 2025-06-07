import React, { useEffect, useRef, useState } from "react";

const uniqLines = [
  "If you don't have laptop we will give you rental laptop",
  "Minimum 3.5–8 Hour Sessions",
  "Communication class is mandatory",
  "Daily English 2 Min Voice Notes",
  "Tickora Facial Attendance System",
  "Train Until You’re Placed",
];

// const uniqSubtexts = [
//   "Stay focused, stay ready",
//   "Real-time, real-industry exposure",
//   "Speak with confidence",
//   "Speak. Improve. Stand out in interviews.",
//   "Stay committed every day",
//   "No cutoff, only results",
// ];

const otherLines = [
  "Laptop optional",
  "Just 1-hour classes",
  "Communication class is not mandatory",
  "No practice, no pressure, no progress",
  "No attendance, no tracking",
  "Fixed-duration courses — placed or not",
];

// const otherSubtexts = [
//   "no real-world preparation",
//   "Minimal engagement",
//   "Not a priority",
//   "Just passive learning",
//   "Lack of discipline",
//   "With or without placement",
// ];

const WhyChoose = () => {
  const sectionRef = useRef(null);
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          // Stagger the appearance
          uniqLines.forEach((_, i) => {
            setTimeout(() => {
              setVisibleLines((prev) => [...prev, i]);
            }, i * 1000); 
          });
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="whyChoose" className="py-16 bg-white  px-2 sm:px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl lg:text-5xl text-black font-black font-primary">
          Why <span className="text-primary-600">Choose UNIQ?</span>
        </h2>
        <p className="mt-4 max-w-5xl mx-auto text-gray-600 text-lg font-secondary font-medium">
          Choosing the right training institute can make or break your IT career. Here's how UNIQ goes beyond
          traditional training setting you up not just for a certificate, but for a real job with real confidence.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* UNIQ Approach */}
        <div className="relative rounded-2xl border-2 border-green-500 p-4 sm:p-6">
          <div className="absolute -top-4  lg:left-1/2 lg:-translate-x-1/2 bg-green-600 px-3 py-1 text-white text-base font-primary font-semibold rounded-full">
            UNIQ Training Approach
          </div>
          <h3 className="text-2xl font-bold text-black text-center font-primary mb-6">
            Built for Placement Success
          </h3>
          <ul className="space-y-4 font-secondary text-lg font-medium">
            {uniqLines.map((line, i) => (
              <li
                key={`uniq-${i}`}
                className={`flex items-center transition-opacity duration-500 ${
                  visibleLines.includes(i) ? "opacity-100" : "opacity-0"
                }`}
              >
                <svg className="mr-2 h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <span className="text-black">{line}</span>
                {/* <span className="hidden sm:block text-gray-400 ml-3">{uniqSubtexts[i]}</span> */}
              </li>
            ))}
          </ul>
        </div>

        {/* Other Institutes Approach */}
        <div className="relative rounded-2xl border-2 border-dashed p-6">
          <div className="absolute -top-4  lg:left-1/2 lg:-translate-x-1/2 bg-gray-800 px-3 py-1 text-white text-base font-primary font-semibold rounded-full">
            Other Institutes Approach
          </div>
          <h3 className="text-2xl font-bold text-black text-center font-primary mb-6">
            Basic Training, Limited Results
          </h3>
          <ul className="space-y-4 font-secondary text-lg font-medium">
            {otherLines.map((line, i) => (
              <li
                key={`other-${i}`} 
                className={`flex items-center transition-opacity duration-500 ${
                  visibleLines.includes(i) ? "opacity-100" : "opacity-0"
                }`}
              >
                <svg className="mr-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <span className="text-black">{line}</span>
                {/* <span className="hidden sm:block text-gray-400 ml-3">{otherSubtexts[i]}</span> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
