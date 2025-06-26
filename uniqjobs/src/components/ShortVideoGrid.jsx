import { useState } from 'react'
import no1 from '../assets/images/shorts/no1.jpg'
import no2 from '../assets/images/shorts/no2.jpg'
import no3 from '../assets/images/shorts/no3.jpg'
import no4 from '../assets/images/shorts/no4.jpg'
import no5 from '../assets/images/shorts/no5.jpg'
import no6 from '../assets/images/shorts/no6.jpg'
import no7 from '../assets/images/shorts/no7.jpg'
import no8 from '../assets/images/shorts/no8.jpg'
// import no9 from '../assets/images/shorts/no9.jpg'
// import no10 from '../assets/images/shorts/no10.jpg'
// import no11 from '../assets/images/shorts/no11.jpg'
// import no12 from '../assets/images/shorts/no12.jpg'
// import no13 from '../assets/images/shorts/no13.jpg'
// import no14 from '../assets/images/shorts/no14.jpg'

const ShortVideoGrid = () => {
    const videoList = [
      {
        id: "s0hun1-ZmBQ",
        title: "",
        // thumbnail: student1,
      },
      {
        id: "yC8eOkzTlXQ",
        title: "",
        // thumbnail: student2,
      },
      {
        id: "LMHKiO6v2J0",
        title: "",
        // thumbnail: student3,
      },
      {
        id: "DOX-zabbgto",
        title: "",
        // thumbnail: student3,
      },
      {
        id: "qnqED4LHjmQ",
        title: "",
        // thumbnail: student3,
      },
      {
        id: "4YP39T-i_Vc",
        title: "",
        // thumbnail: student3,
      },
      {
        id: "6FYgce6dlW8",
        title: "",
        // thumbnail: student3,
      },
      {
        id: "UwWfDal5Bpw",
        title: "",
        // thumbnail: student3,
      },
      {
        id: "WSZTX3lXs_k",
        title: "",
        // thumbnail: student3,
      },
      {
        id: "Rdxvlg3UYFE",
        title: "",
        // thumbnail: student3,
      },
      {
        id: "Hll-ej9u_Eg",
        title: "",
        // thumbnail: student3,
      },
      {
        id: "Hll-ZRZtJHSJtNs",
        title: "",
        // thumbnail: student3,
      },
      {
        id: "UphdIvhJXNE",
        title: "",
        // thumbnail: student3,
      },
    
    ];
    const [currentVideo, setCurrentVideo] = useState(videoList[0].id);
  return (
    <div className="bg-black">
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-8 gap-6 w-full px-6">
        {/* Sticky Left Side */}
        <div className="sm:sticky top-5 h-fit lg:flex justify-center items-start col-span-1 lg:col-span-2">
            
          <div className="sm:h-160 w-full lg:w-100 border border-white rounded-2xl">
            <iframe
              width="100%"
              height="100%"
              className="rounded-2xl"
              src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1&mute=0&rel=0`}
              title="Selected Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Grid*/}
        <div className="relative col-span-1  lg:col-span-6 gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:space-y-6">
            <div
              className="relative h-auto w-full border rounded-xl cursor-pointer"
              onClick={() => setCurrentVideo(videoList[0].id)}
            >
              <img
                src={no1}
                alt={videoList[0].title}
                title={videoList[0].title}
                className="w-full h-auto rounded-xl hover:opacity-85 transition"
              />
              <div className=" bg-gradient-to-t from-black/80 to-transparent  rounded-xl bottom-0 left-0 right-0 h-1/2">
                <div className='py-4 flex flex-col justify-end h-full text-white'>
                  <h1 className='text-lg font-bold'>Shalini</h1>
                  <h1>B.E Machanical Engineering</h1>
                  <p>Current Salary -12LPA</p>
                </div>
              </div>
            </div>
            <div
              className="relative h-auto w-full border rounded-xl cursor-pointer"
              onClick={() => setCurrentVideo(videoList[5].id)}
            >
              <img
                src={no5}
                alt={videoList[0].title}
                title={videoList[0].title}
                className="w-full h-auto rounded-xl hover:opacity-85 transition"
              />
              <div className=" bg-gradient-to-t from-black/80 to-transparent  rounded-xl bottom-0 left-0 right-0 h-1/2">
                <div className='py-4 flex flex-col justify-end h-full text-white'>
                  <h1 className='text-lg font-bold'>Shalini</h1>
                  <h1>B.E Machanical Engineering</h1>
                  <p>Current Salary -12LPA</p>
                </div>
              </div>
            </div>
            {/* <div
              className="relative h-auto w-full border rounded-xl cursor-pointer"
              onClick={() => setCurrentVideo(videoList[2].id)}
            >
              <img
                src={no9}
                alt={videoList[0].title}
                title={videoList[0].title}
                className="w-full h-auto rounded-xl hover:opacity-85 transition"
              />
              <div className=" bg-gradient-to-t from-black/80 to-transparent  rounded-xl bottom-0 left-0 right-0 h-1/2">
                <div className='py-4 flex flex-col justify-end h-full text-white'>
                  <h1 className='text-lg font-bold'>Shalini</h1>
                  <h1>B.E Machanical Engineering</h1>
                  <p>Current Salary -12LPA</p>
                </div>
              </div>
            </div>
            <div
              className="relative h-auto w-full border rounded-xl cursor-pointer"
              onClick={() => setCurrentVideo(videoList[3].id)}
            >
              <img
                src={no13}
                alt={videoList[0].title}
                title={videoList[0].title}
                className="w-full h-auto rounded-xl hover:opacity-85 transition"
              />
              <div className=" bg-gradient-to-t from-black/80 to-transparent  rounded-xl bottom-0 left-0 right-0 h-1/2">
                <div className='py-4 flex flex-col justify-end h-full text-white'>
                  <h1 className='text-lg font-bold'>Shalini</h1>
                  <h1>B.E Machanical Engineering</h1>
                  <p>Current Salary -12LPA</p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="sm:space-y-6">
            <div
              className="relative h-auto mt-25 w-full border rounded-xl cursor-pointer"
              onClick={() => setCurrentVideo(videoList[1].id)}
            >
              <img
                src={no2}
                alt={videoList[0].title}
                title={videoList[0].title}
                className="w-full h-auto rounded-xl hover:opacity-85 transition"
              />
              <div className=" bg-gradient-to-t from-black/80 to-transparent  rounded-xl bottom-0 left-0 right-0 h-1/2">
                <div className='py-4 flex flex-col justify-end h-full text-white'>
                  <h1 className='text-lg font-bold'>Shalini</h1>
                  <h1>B.E Machanical Engineering</h1>
                  <p>Current Salary -12LPA</p>
                </div>
              </div>
              
            </div>
            <div
              className="relative h-auto w-full border rounded-xl cursor-pointer"
              onClick={() => setCurrentVideo(videoList[4].id)}
            >
              <img
                src={no6}
                alt={videoList[0].title}
                title={videoList[0].title}
                className="w-full h-auto rounded-xl hover:opacity-85 transition"
              />
              <div className=" bg-gradient-to-t from-black/80 to-transparent  rounded-xl bottom-0 left-0 right-0 h-1/2">
                <div className='py-4 flex flex-col justify-end h-full text-white'>
                  <h1 className='text-lg font-bold'>Shalini</h1>
                  <h1>B.E Machanical Engineering</h1>
                  <p>Current Salary -12LPA</p>
                </div>
              </div>
            </div>
            {/* <div
              className="relative h-auto w-full border rounded-xl cursor-pointer"
              onClick={() => setCurrentVideo(videoList[6].id)}
            >
              <img
                src={no10}
                alt={videoList[0].title}
                title={videoList[0].title}
                className="w-full h-auto rounded-xl hover:opacity-85 transition"
              />
              <div className=" bg-gradient-to-t from-black/80 to-transparent  rounded-xl bottom-0 left-0 right-0 h-1/2">
                <div className='py-4 flex flex-col justify-end h-full text-white'>
                  <h1 className='text-lg font-bold'>Shalini</h1>
                  <h1>B.E Machanical Engineering</h1>
                  <p>Current Salary -12LPA</p>
                </div>
              </div>
            </div>
            <div
              className="relative h-auto w-full border rounded-xl cursor-pointer"
              onClick={() => setCurrentVideo(videoList[7].id)}
            >
              <img
                src={no14}
                alt={videoList[0].title}
                title={videoList[0].title}
                className="w-full h-auto rounded-xl hover:opacity-85 transition"
              />
              <div className=" bg-gradient-to-t from-black/80 to-transparent  rounded-xl bottom-0 left-0 right-0 h-1/2">
                <div className='py-4 flex flex-col justify-end h-full text-white'>
                  <h1 className='text-lg font-bold'>Shalini</h1>
                  <h1>B.E Machanical Engineering</h1>
                  <p>Current Salary -12LPA</p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="sm:space-y-6">
            <div
              className="relative h-auto w-full border rounded-xl cursor-pointer"
              onClick={() => setCurrentVideo(videoList[2].id)}
            >
              <img
                src={no3}
                alt={videoList[0].title}
                title={videoList[0].title}
                className="w-full h-auto rounded-xl hover:opacity-85 transition"
              />
              <div className=" bg-gradient-to-t from-black/80 to-transparent  rounded-xl bottom-0 left-0 right-0 h-1/2">
                <div className='py-4 flex flex-col justify-end h-full text-white'>
                  <h1 className='text-lg font-bold'>Shalini</h1>
                  <h1>B.E Machanical Engineering</h1>
                  <p>Current Salary -12LPA</p>
                </div>
              </div>
            </div>
            <div
              className="relative h-auto w-full border rounded-xl cursor-pointer"
              onClick={() => setCurrentVideo(videoList[8].id)}
            >
              <img
                src={no7}
                alt={videoList[0].title}
                title={videoList[0].title}
                className="w-full h-auto rounded-xl hover:opacity-85 transition"
              />
              <div className=" bg-gradient-to-t from-black/80 to-transparent  rounded-xl bottom-0 left-0 right-0 h-1/2">
                <div className='py-4 flex flex-col justify-end h-full text-white'>
                  <h1 className='text-lg font-bold'>Shalini</h1>
                  <h1>B.E Machanical Engineering</h1>
                  <p>Current Salary -12LPA</p>
                </div>
              </div>
              
            </div>
            {/* <div
              className="relative h-auto w-full border rounded-xl cursor-pointer"
              onClick={() => setCurrentVideo(videoList[10].id)}
            >
              <img
                src={no11}
                alt={videoList[0].title}
                title={videoList[0].title}
                className="w-full h-auto rounded-xl hover:opacity-85 transition"
              />
              <div className=" bg-gradient-to-t from-black/80 to-transparent  rounded-xl bottom-0 left-0 right-0 h-1/2">
                <div className='py-4 flex flex-col justify-end h-full text-white'>
                  <h1 className='text-lg font-bold'>Shalini</h1>
                  <h1>B.E Machanical Engineering</h1>
                  <p>Current Salary -12LPA</p>
                </div>
              </div>
              
            </div>
            <div
              className="relative h-auto w-full border rounded-xl cursor-pointer"
              onClick={() => setCurrentVideo(videoList[11].id)}
            >
              <img
                src={no1}
                alt={videoList[0].title}
                title={videoList[0].title}
                className="w-full h-auto rounded-xl hover:opacity-85 transition"
              />
             <div className=" bg-gradient-to-t from-black/80 to-transparent  rounded-xl bottom-0 left-0 right-0 h-1/2">
                <div className='py-4 flex flex-col justify-end h-full text-white'>
                  <h1 className='text-lg font-bold'>Shalini</h1>
                  <h1>B.E Machanical Engineering</h1>
                  <p>Current Salary -12LPA</p>
                </div>
              </div>
              
            </div> */}
          </div>
          <div className="sm:space-y-6">
            <div
              className="relative h-auto mt-30 w-full border rounded-xl cursor-pointer"
              onClick={() => setCurrentVideo(videoList[3].id)}
            >
              <img
                src={no4}
                alt={videoList[0].title}
                title={videoList[0].title}
                className="w-full h-auto rounded-xl hover:opacity-85 transition"
              />
              <div className=" bg-gradient-to-t from-black/80 to-transparent  rounded-xl bottom-0 left-0 right-0 h-1/2">
                <div className='py-4 flex flex-col justify-end h-full text-white'>
                  <h1 className='text-lg font-bold'>Shalini</h1>
                  <h1>B.E Machanical Engineering</h1>
                  <p>Current Salary -12LPA</p>
                </div>
              </div>
            </div>
            <div
              className="relative h-auto w-full border rounded-xl cursor-pointer"
              onClick={() => setCurrentVideo(videoList[9].id)}
            >
              <img
                src={no8}
                alt={videoList[0].title}
                title={videoList[0].title}
                className="w-full h-auto rounded-xl hover:opacity-85 transition"
              />
              <div className=" bg-gradient-to-t from-black/80 to-transparent  rounded-xl bottom-0 left-0 right-0 h-1/2">
                <div className='py-4 flex flex-col justify-end h-full text-white'>
                  <h1 className='text-lg font-bold'>Shalini</h1>
                  <h1>B.E Machanical Engineering</h1>
                  <p>Current Salary -12LPA</p>
                </div>
              </div>
              
            </div>
            {/* <div
              className="relative h-auto w-full border rounded-xl cursor-pointer"
              onClick={() => setCurrentVideo(videoList[14].id)}
            >
              <img
                src={no12}
                alt={videoList[0].title}
                title={videoList[0].title}
                className="w-full h-auto rounded-xl hover:opacity-85 transition"
              />
              <div className=" bg-gradient-to-t from-black/80 to-transparent  rounded-xl bottom-0 left-0 right-0 h-1/2">
                <div className='py-4 flex flex-col justify-end h-full text-white'>
                  <h1 className='text-lg font-bold'>Shalini</h1>
                  <h1>B.E Machanical Engineering</h1>
                  <p>Current Salary -12LPA</p>
                </div>
              </div>
              
            </div>
            <div
              className="relative h-auto w-full border rounded-xl cursor-pointer"
              onClick={() => setCurrentVideo(videoList[15].id)}
            >
              <img
                src={no1}
                alt={videoList[0].title}
                title={videoList[0].title}
                className="w-full h-auto rounded-xl hover:opacity-85 transition"
              />
              <div className=" bg-gradient-to-t from-black/80 to-transparent  rounded-xl bottom-0 left-0 right-0 h-1/2">
                <div className='py-4 flex flex-col justify-end h-full text-white'>
                  <h1 className='text-lg font-bold'>Shalini</h1>
                  <h1>B.E Machanical Engineering</h1>
                  <p>Current Salary -12LPA</p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="absolute bg-gradient-to-t from-black/80 to-transparent  rounded-xl bottom-0 left-0 right-0 h-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default ShortVideoGrid;
