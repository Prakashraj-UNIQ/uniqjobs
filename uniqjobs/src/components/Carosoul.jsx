import React, { useState, useEffect } from 'react';

const videoData = [
  {
    id: 'digital-prism',
    title: 'Development',
    headTitle: 'Development',
    rank: '#1',
    description: 'Why is Development the #1 Choice in IT?',
    youtubeId: 'iL28QrgPyEo',
  },
  {
    id: 'tech-haven',
    title: 'Testing',
    headTitle: 'Testing',
    rank: '#2',
    description: 'The Unsung Hero of Software Success.',
    youtubeId: 'nkcLgAzC7lQ',
  },
  {
    id: 'neural-dreams',
    title: 'IT Support',
    headTitle: 'IT Support',
    rank: '#3',
    description: 'The Backbone of Every Tech Company.',
    youtubeId: 'xZjnLNcNLzU',
  },
];

export default function VideoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % videoData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + videoData.length) % videoData.length);
  };

  useEffect(() => {
    // Optional: Auto-advance feature
    // const timer = setInterval(() => nextSlide(), 8000);
    // return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="bg-black lg:min-h-screen flex items-center justify-center overflow-hidden ">
      {/* Background effects */}
      {/* <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/20 to-fuchsia-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-violet-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-fuchsia-500/10 rounded-full filter blur-3xl"></div>
      </div> */}
    
      <div className="w-full px-2 sm:px-8 lg:px-20">
        <h2 className="text-white text-2xl sm:text-2xl font-primary font-bold text-center">
            <span className="text-red-600">{videoData[currentSlide].rank}</span> {videoData[currentSlide].headTitle}
        </h2>
        <p className="text-zinc-200 text-base font-secondary font-bold text-center mb-2">
            {videoData[currentSlide].description}
        </p>
        <div className="carousel-container relative">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden z-20">
            <div
              className="progress-bar absolute top-0 left-0 h-full bg-gradient-to-r from-[#ba181b] to-[#ba181b]"
              style={{ width: `${((currentSlide + 1) / videoData.length) * 100}%` }}
            ></div>
          </div>

          {/* Navigation buttons */}
          <button
            className="nav-button absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white"
            onClick={prevSlide}
            title="Previous slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="nav-button absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white"
            onClick={nextSlide}
            title="Next slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="carousel-track relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
            {videoData.map((video, index) => {
              let className = 'carousel-items absolute top-0 left-0 w-full h-full';
              if (index === currentSlide) className += ' active';
              else if (index === (currentSlide + 1) % videoData.length) className += ' next';
              else if (index === (currentSlide - 1 + videoData.length) % videoData.length) className += ' prev';
              else className += ' hidden';

              return (
                <div key={video.id} className={className}>
                  <div className="w-full h-full p-4 sm:p-8">
                    <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                      <iframe
                        className="absolute inset-0 w-full h-full object-cover"
                        src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      {/* <div className="absolute inset-0 bg-gradient-to-br from-violet-500/40 to-purple-500/40 mix-blend-overlay"></div> */}
                      {/* <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">{video.title}</h3>
                        <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">{video.description}</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
            {videoData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-8 sm:w-12 h-1 sm:h-1.5 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white/40' : 'bg-white/20'
                } hover:bg-white/60`}
                title={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
