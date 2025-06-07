import { useState } from "react";
import student1 from "../assets/images/student1.jpg";
import student2 from "../assets/images/student2.jpg"; 
import student3 from "../assets/images/student3.jpg";

import SecondaryButton from "./Courses/SecondaryButton";


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
      <div className="bg-[#F2F2F2]">
  <div className="flex flex-col lg:flex-row gap-6 px-2 sm:px-10 lg:px-20 pt-6">
    {/* Main Video Player */}
    <div className="flex w-full flex-col items-center justify-center">
      <div className="w-full max-w-5xl mb-4 rounded-lg shadow-lg overflow-hidden">
        <iframe
          width="100%"
          height="300px"
          className="sm:h-[400px] md:h-[500px]"
          src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1&mute=1&rel=0`}
          title="Selected Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    {/* Thumbnails */}
    <div className="w-full lg:w-[320px] max-h-[500px] overflow-x-auto lg:overflow-y-auto">
      <div className="flex flex-row lg:flex-col gap-4">
        {videoList.map((video) => (
          <div
            key={video.id}
            className="cursor-pointer p-2 min-w-[16rem] sm:min-w-[18rem] lg:min-w-0"
            onClick={() => setCurrentVideo(video.id)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              title={video.title}
              className="w-full h-auto rounded hover:opacity-90 transition"
            />
            <p className="text-sm mt-2 text-gray-800 font-medium">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className="flex justify-center items-center py-6">
    <SecondaryButton buttonText={"Explore Student Success"} />
  </div>
</div>

  );
}
