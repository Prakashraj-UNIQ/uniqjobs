import React, { useEffect, useRef, useState } from 'react';

const TestimonialCarousel = () => {
  const cards = [
    {
      studentName: "Anupriya",
      courseDetails: "Production Support",
      description:
        "Hi, I’m Anupriya. I completed my B.E (ECE) in 2018 but struggled to find a job. Then, I joined the software testing course at Uniq Technologies, recommended by a friend. The friendly staff taught everything from basics with clear examples and practical training, including daily assessments. Thanks to their support and guidance, I secured a job and received multiple offers. I’m very grateful to Uniq Technologies.",
    },
    {
      studentName: "Sujaya",
      courseDetails: "Software Tester",
      description:
        "Hi, I’m Sujaya. I completed my BE (CSE) in 2017 and was working in non-technical support, but I wanted to shift to software. A friend recommended Uniq Technologies, so I researched and enrolled in their course. The friendly staff provided excellent training and support. Thanks to them, I’ve now been placed in a software company with a good package. I’m very grateful to Uniq Technologies.",
    },
    {
      studentName: "Durga Devi",
      courseDetails: "Production Support",
      description:
        "I’m Durga Devi, a 2019 graduate with no prior technical background. I wanted to build a career in the MNC sector, and that’s when I found Uniq Technologies. I joined their software testing course, and the experience was excellent—supportive staff, strong practical training, and clear guidance. After completing the course, I attended an interview and got placed with a good package. Thanks to Uniq Technologies for this valuable opportunity!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cards.length;
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }, 4000); // change card every 4 seconds

    return () => clearInterval(intervalRef.current);
  }, [totalCards]);

  return (
    <div className="max-w-[510px]">
        
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${100 * totalCards}%` }}
      >
        {cards.map((card, index) => (
          <div className="w-full flex-shrink-0" key={index}>
            <div className="px-20 py-10">
              <div className="relative overflow-hidden bg-gradient-to-r from-[#0b090a] to-[#ba181b] rounded-xl shadow-2xl p-8 text-white">
                {/* Skewed background overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12"></div>

                {/* Content Layer */}
                <div className="relative z-10">
                  <svg className="w-12 h-12 mb-4 text-red-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className="text-lg font-medium font-secondary mb-4">"{card.description}"</p>

                  <div className="flex items-center font-primary">
                    {/* <img
                      src="https://randomuser.me/api/portraits/women/91.jpg"
                      alt={card.studentName}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-purple-300"
                    /> */}
                    <div>
                      <h4 className="font-semibold">{card.studentName}</h4>
                      <p className="text-red-200">{card.courseDetails}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
