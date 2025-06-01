import { useState } from "react";
import student1 from "../assets/images/student1.jpg";
import student2 from "../assets/images/student2.jpg"; 
import student3 from "../assets/images/student3.jpg";


const videoList = [
  {
    id: "5xnZdSThaQk",
    title: "",
    thumbnail: student1,
  },
  {
    id: "mik1dI0cdfg",
    title: "",
    thumbnail: student2,
  },
  {
    id: "957S1PygTVc",
    title: "",
    thumbnail: student3,
  },

];

export default function VideoGallery() {
  const [currentVideo, setCurrentVideo] = useState(videoList[0].id);

  return (
    <div className="flex flex-row gap-6 mt-5 px-5 lg:px-20">
      {/* Main Video Player */}
      <div className="flex w-full flex-col items-center justify-center">
        <div className="w-full max-w-5xl mb-4 rounded-lg shadow-lg overflow-hidden">
          <iframe
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1&mute=1&rel=0`}
            title="Selected Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="w-165 overflow-x-auto max-h-[500px]">
        <div className="flex flex-col w-100  space-x-4">
          {videoList.map((video) => (
            <div
              key={video.id}
              className="cursor-pointer p-2 min-w-[18rem] md:min-w-[20rem]"
              onClick={() => setCurrentVideo(video.id)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                title={video.title}
                className="w-full h-auto rounded hover:opacity-90 transition"
              />
              <p className="text-sm mt-2">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
