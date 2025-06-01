import React, { useState } from 'react';

const videos = {
  tab1: [
    { id: 'nnQ8HN9vhQQ', image: '../assests/images/interview-2.jpg' },
    { id: 'cNBhe0aJ9cw', image: '../assests/images/interview-3.jpg' },
  ],
  tab2: [
    { id: 'gPvVasNVUyM', image: '../assests/images/interview-1.jpg' },
    { id: 'gPvVasNVUyM', image: '../assests/images/interview-1.jpg' },
  ],
};

const FullstackTabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (videoId) => {
    setCurrentVideo(videoId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVideo(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Tab Headers */}
      <div className="block lg:flex border-b border-gray-300">
        <button
          className={`py-2 pr-2 font-semibold text-gray-600 border-b-2 sm:pr-4 hover:text-red-600 focus:outline-none ${
            activeTab === 'tab1' ? 'border-red-600 text-red-600' : 'border-transparent'
          }`}
          onClick={() => setActiveTab('tab1')}
        >
          Java Fullstack Development
        </button>
        <button
          className={`px-4 py-2 font-semibold text-gray-600 border-b-2 hover:text-red-600 focus:outline-none ${
            activeTab === 'tab2' ? 'border-red-600 text-red-600' : 'border-transparent'
          }`}
          onClick={() => setActiveTab('tab2')}
        >
          Dotnet Fullstack Development
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 slide-in-drop" style={{ animationDelay: '1000ms' }}>
          {videos[activeTab].map((video, index) => (
            <div className="flex flex-col lg:flex-row px-4" key={index}>
              <button
                className="relative group rounded-xl overflow-hidden transition-shadow duration-300 ease-in-out focus:outline-none"
                onClick={() => openModal(video.id)}
              >
                <img className="w-200 h-full" src={video.image} alt={`Video ${index}`} />
                <svg
                  className="absolute inset-0 m-auto w-24 h-24 pointer-events-none group-hover:scale-110 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle className="fill-white" cx="36" cy="36" r="36" fillOpacity=".8" />
                  <path
                    className="fill-red-600 drop-shadow-2xl"
                    d="M44 36a1 1 0 0 0-.427-.82l-10-7a1 1 0 0 0-1.573.82v14a1 1 0 0 0 1.573.82l10-7a.995.995 0 0 0 .427-.82Z"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && (
          <>
            <div
              className="fixed inset-0 z-[99998] bg-black bg-opacity-50 transition-opacity"
              onClick={closeModal}
            ></div>
            <div className="fixed inset-0 z-[99999] flex items-center justify-center px-4 py-6">
              <div className="absolute inset-0" onClick={closeModal}></div>
              <div className="max-w-5xl w-full bg-black rounded-3xl shadow-2xl overflow-hidden relative z-10">
                <div className="relative w-full h-0 pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-3xl"
                    src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1&rel=0`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="YouTube video"
                  ></iframe>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FullstackTabs;
