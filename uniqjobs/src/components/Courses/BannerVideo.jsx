import { useState, useRef, useEffect } from 'react';



export default function ModalVideoSection({videoId, imageUrl}) {
  const [modalOpen, setModalOpen] = useState(false);
  const iframeWrapperRef = useRef(null);

  useEffect(() => {
    if (modalOpen) {
      iframeWrapperRef.current.innerHTML = `
        <div className='relative w-full h-0 pb-[56.25%]'>
          <iframe
            className='absolute top-0 left-0 w-full h-full rounded-3xl'
            src='https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0'
            frameborder='0'
            allow='autoplay; encrypted-media'
            allowfullscreen
          ></iframe>
        </div>
      `;
    } else {
      if (iframeWrapperRef.current) {
        iframeWrapperRef.current.innerHTML = '';
      }
    }
  }, [modalOpen, videoId]);

  return (
    <main className="relative flex flex-col justify-center overflow-hidden">
      <div className="flex justify-center ">
        <div>
          {/* Video thumbnail button */}
          <button
            className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
            onClick={() => setModalOpen(true)}
            aria-label="Watch the video"
          >
            <img
              className="rounded-xl shadow-2xl transition-shadow duration-300 ease-in-out"
              src={imageUrl}
              width="1400"
              height="700"
              alt="Modal video thumbnail"
            />

            <svg
              className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
            >
              <circle
                className="fill-white"
                cx="36"
                cy="36"
                r="36"
                fillOpacity=".8"
              />
              <path
                className="fill-red-600 drop-shadow-2xl"
                d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36Z"
              />
            </svg>
          </button>

          {/* Modal backdrop */}
          {modalOpen && (
            <div
              className="fixed inset-0 z-[99998] bg-black bg-opacity-50 transition-opacity"
              onClick={() => setModalOpen(false)}
            />
          )}

          {/* Modal wrapper */}
          {modalOpen && (
            <div className="fixed inset-0 z-[99999] flex items-center justify-center px-4 md:px-6 py-6">
              <div
                className="absolute inset-0"
                onClick={() => setModalOpen(false)}
              />
              <div
                className="max-w-5xl w-full bg-black rounded-3xl shadow-2xl overflow-hidden relative z-10"
                ref={iframeWrapperRef}
              />
            </div>
          )}
        </div>
  
      </div>
    </main>
  );
}
