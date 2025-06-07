import { useState } from "react";
import video1 from '../../assets/images/video1.jpg';
import video2 from '../../assets/images/video2.jpg';
import video3 from '../../assets/images/video3.jpg';
import video9 from '../../assets/images/video9.jpg';
import video10 from '../../assets/images/video10.jpg';
import video11 from '../../assets/images/video11.jpg';
import video12 from '../../assets/images/video12.jpg';
import student3 from '../../assets/images/student3.jpg';
import video7 from '../../assets/images/video7.jpg';
import video8 from '../../assets/images/video8.jpg';



const videoList = [
  {
    id: "tM0H3oI2OHQ",
    title: "Village Girl To IT Employee",
    thumbnail: video1,
    description:'Discover top IT roles and how freshers can land them.',
    intro: 'May 2025',
    branch: 'Trichy Branch',
  },
  {
    id: "0mhvvCrEMdE",
    title: "Mechanical Engineer to Software Engineer",
    thumbnail: video2,
    description:'Secure IT placements right after internship training.',
    intro: 'May 2025',
    branch: 'Madurai Branch',

  },
  {
    id: "PbV5VXaBS1k",
    title: "Zero to Assistant Manager in Top MNC",
    thumbnail: video3,
    description:"Be careful Freshers, Don't Learn this Course.",
    intro: 'April 2025',
    branch: 'Chennai Branch',

  },
  
 
  {
    id: "957S1PygTVc",
    title: "How to get High Salary It Jobs ? ",
    thumbnail: video7,
    description:"Be careful Freshers, Don't Learn this Course.",
    intro: 'April 2025',
    branch: 'Chennai Branch',

  },
  {
    id: "JIA4oM2nc14",
    title: "Mechanical Engineer to Software Engineer",
    thumbnail: video8,
    description:"Be careful Freshers, Don't Learn this Course.",
    intro: 'April 2025',
    branch: 'Chennai Branch',

  },
   {
    id: "5xnZdSThaQk",
    title: "Tamil Medium to Tcs Employee Journey",
    thumbnail: video3,
    description:"Be careful Freshers, Don't Learn this Course.",
    intro: 'April 2025',
    branch: 'Chennai Branch',

  },
  {
    id: "568_R6Ggchg",
    title: "Success story of SARAVANA",       
    thumbnail: video9,
    description:" Now working in GERMAN COMPANY",
    intro: 'April 2025',
    branch: 'Chennai Branch',

  },
  {
    id: "2gpC4u0Aw2w",
    title: "BBO to IT Company",       
    thumbnail: video10,
    description:" Now working in GERMAN COMPANY",
    intro: 'April 2025',
    branch: 'Chennai Branch',

  },
  {
    id: "n_gPOKu522s",
    title: "Failed in 25 interviews !!! ",       
    thumbnail: video11,
    description:"Then How did I get top MNC companies jobs with more than 15 lakh salary",
    intro: 'April 2025',
    branch: 'Chennai Branch',

  },
  {
    id: "Bckuce7aoEQ",
    title: "Success story of RAJ",       
    thumbnail: video12,
    description:"Now working in IBM with 18 lakh salary",
    intro: 'April 2025',
    branch: 'Chennai Branch',

  },
  {
    id: "Low5Oq5dFK0",
    title: "My Success Story as a Fresher ",
    thumbnail: video3,
    description:"Be careful Freshers, Don't Learn this Course.",
    intro: 'April 2025',
    branch: 'Chennai Branch',

  },
  {
    id: "7RJVRjz7eA0",
    title: "Engineering Student to IT With Career Gap",       
    thumbnail: student3,
    description:"Now working in IBM with 18 lakh salary",
    intro: 'April 2025',
    branch: 'Chennai Branch',

  },

];

export default function VideoGallery() {
  const [currentVideo, setCurrentVideo] = useState(videoList[0].id);

  return (
    <div className="bg-black py-4">
  <p className="text-white text-xl font-bold font-primary border-t-2 border-[#444] mx-4 sm:mx-10 md:mx-20 pt-2">
    Placed Candidates Reviews
  </p>

  <div className="flex flex-col lg:flex-row gap-6 pt-5 px-4 sm:px-10 lg:px-20">
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
    <div className="w-full lg:w-[500px] max-h-[500px] overflow-x-auto lg:overflow-y-auto custom-scrollbar">
      <div className="flex flex-row lg:flex-col gap-4">
        {videoList.map((video) => (
          <div
            key={video.id}
            className="group cursor-pointer p-2 min-w-[18rem] md:min-w-[20rem] lg:min-w-0"
            onClick={() => setCurrentVideo(video.id)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              title={video.title}
              className="w-full h-auto rounded hover:opacity-80 transition"
            />
            <h3 className="text-lg font-semibold font-secondary tracking-wide text-white group-hover:underline">
              {video.title}
            </h3>
            <p className="text-white/90 text-sm mt-1 leading-5">
              {video.description}
            </p>
            <div className="flex flex-wrap mt-2 text-white/60 text-sm leading-5">
              <p className="pr-2 border-r border-white/60">{video.intro}</p>
              <p className="pl-2">{video.branch}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
}
