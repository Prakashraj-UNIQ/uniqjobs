import React, { useState, useEffect, useRef } from 'react';

const slidesData = [
  {
    id: 1,
    src: 'https://www.youtube.com/embed/OSFG4H2ujAU?mute=1',
    title: 'High-Paying IT Jobs for Freshers',
    description: 'Discover top IT roles and how freshers can land them.'
  },
  {
    id: 2,
    src: 'https://www.youtube.com/embed/pQk54UpbbUs?mute=1',
    title: 'Internship + Job Placement for 2025 Freshers',
    description: 'Secure IT placements right after internship training.'
  },
  {
    id: 3,
    src: 'https://www.youtube.com/embed/PxzpaRVMRAg?mute=1',
    title: 'Warning for Freshers: Avoid This Mistake',
    description: "Be careful Freshers, Don't Learn this Course."
  },
  {
    id: 4,
    src: 'https://www.youtube.com/embed/OSFG4H2ujAU?mute=1',
    title: 'High-Paying IT Jobs for Freshers',
    description: 'Discover top IT roles and how freshers can land them.'
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [slidePercentage, setSlidePercentage] = useState(100);
  const intervalRef = useRef(null);

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
        setSlidePercentage(100);
      } else {
        setVisibleSlides(3);
        setSlidePercentage(100 / 3);
      }
    };

    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
  intervalRef.current = setInterval(() => {
    setCurrentSlide((prev) =>
      prev < slidesData.length - visibleSlides ? prev + 1 : 0
    );
  }, 6000); // every 6 seconds

  return () => clearInterval(intervalRef.current);
}, [visibleSlides]);

  const goTo = (index) => {
    if (index <= slidesData.length - visibleSlides) {
      setCurrentSlide(index);
    } else {
      setCurrentSlide(slidesData.length - visibleSlides);
    }
  };

  return (
    <div className="bg-gray-200 container mx-auto px-20 py-10">
      <div className="relative">
        <div className="relative overflow-hidden rounded-lg shadow-xl bg-white">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * slidePercentage}%)` }}
          >
            {slidesData.map((slide) => (
              <div
                key={slide.id}
                className="w-full md:w-1/3 flex-shrink-0 px-2 py-4"
              >
                <div className="rounded-lg overflow-hidden shadow-md h-full">
                  <div className="bg-gray-200 h-48 md:h-64 flex items-center justify-center">
                    <iframe
                      src={slide.src}
                      title={slide.title}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{slide.title}</h3>
                    <p className="text-gray-600 mt-2">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0)}
          disabled={currentSlide === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 -ml-4 ${
            currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() =>
            setCurrentSlide(
              currentSlide < slidesData.length - visibleSlides
                ? currentSlide + 1
                : currentSlide
            )
          }
          disabled={currentSlide >= slidesData.length - visibleSlides}
          className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 -mr-4 ${
            currentSlide >= slidesData.length - visibleSlides
              ? 'opacity-50 cursor-not-allowed'
              : ''
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-primary-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
