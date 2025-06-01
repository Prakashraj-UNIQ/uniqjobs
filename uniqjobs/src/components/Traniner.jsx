import React, { useEffect, useRef, useState } from 'react';
import hussainsir from '../assets/images/Hussainsir.png'
import dineshsir from '../assets/images/Dineshsir.png'
import rameshsir from '../assets/images/rameshsir.png'
import '../components/com.css'


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef([]);
  const indicatorsRef = useRef([]);
  const autoAdvanceTimer = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      role: '#Founder',
      name: 'Muhammad Hussain',
      position: 'Java Full Stack Developer',
      image: hussainsir,
    },
    {
      role: '#Team Lead',
      name: 'Ramesh Kumar',
      position: 'Java Full Stack Developer',
      image: rameshsir,
    },
    
    {
      role: '#Team Lead',
      name: 'Dinesh Kumar',
      position: 'Python Full Stack Developer',
      image: dineshsir,
    },
  ];

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const updateSlides = () => {
    slidesRef.current.forEach((slide, index) => {
      if (!slide) return;
      slide.className = 'carousel-item absolute top-0 left-75 w-[350px] h-full';
      if (index === currentSlide) {
        slide.classList.add('active');
      } else if (index === (currentSlide + 1) % slides.length) {
        slide.classList.add('next');
      } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
        slide.classList.add('prev');
      } else {
        slide.classList.add('hidden');
      }
    });

    indicatorsRef.current.forEach((indicator, index) => {
      if (!indicator) return;
      indicator.className = `w-8 sm:w-12 h-1 sm:h-1.5 rounded-full transition-colors ${
        index === currentSlide ? 'bg-white/40' : 'bg-white/20'
      } hover:bg-white/60`;
    });
  };

  const resetAutoAdvance = () => {
    clearInterval(autoAdvanceTimer.current);
    autoAdvanceTimer.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    updateSlides();
    resetAutoAdvance();
    return () => clearInterval(autoAdvanceTimer.current);
  }, [currentSlide]);

  return (
    <div>
      <h2 className='text-3xl font-bold font-primary pt-8 text-center'>Our Tech Legends</h2>
      <div className="bg-white flex items-center justify-center overflow-hidden">
       

      <div className="w-full max-w-6xl mx-auto">
        <div className="carousel-container relative">
          <div
            className="carousel-track relative h-[300px] sm:h-[300px] md:h-[520px]"
            onTouchStart={(e) => (touchStartX.current = e.changedTouches[0].screenX)}
            onTouchEnd={(e) => {
              touchEndX.current = e.changedTouches[0].screenX;
              handleSwipe();
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                ref={(el) => (slidesRef.current[index] = el)}
                className="carousel-item"
              >
                <div className="h-full p-4 sm:p-8">
                  <div className="flex justify-between flex-col items-center w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group bg-gradient-to-r from-[#0b090a] to-[#ba181b]">
                    <p className="font-primary text-center mt-8 text-white">{slide.role}</p>
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-75 h-75 rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="text-center text-white mb-5">
                      <h1 className="text-xl font-primary font-medium mt-2">{slide.name}</h1>
                      <p className="text-sm font-primary">{slide.position}</p>
                    </div>
                     {/*  Conditionally render shine effect */}
        {index === currentSlide && (
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="shine"></div>
          </div>
        )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                ref={(el) => (indicatorsRef.current[index] = el)}
                onClick={() => setCurrentSlide(index)}
                title={`Go to slide ${index + 1}`}
                className="w-8 sm:w-12 h-1 sm:h-1.5 rounded-full bg-black/20 hover:bg-black/60 transition-colors"
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Carousel;
