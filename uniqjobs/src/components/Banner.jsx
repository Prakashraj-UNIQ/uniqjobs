import React from "react";
import mainbg from "../assets/images/cta-cover4.jpg";
import CountUpBox from "./CountUpBox";
import { Link } from "react-router-dom";
// import BannerLeft from "./Courses/BannerLeft";
import SecondaryButton from '../components/Courses/SecondaryButton'

const Banner = () => {
  //   const myStyle = {
  //   "--spread": "90deg",
  //   "--radius": "8px",
  //   "--cut": "0.1em",
  //   "--bg": "white",
  // };
  const myStyle2 = {  
    "--spread": "90deg",
    "--shimmer-color": "#ffffff",
    "--radius": "100px",
    "--speed": "1.5s",  
    "--cut": "0.1em",
    "--bg":
      "radial-gradient(ellipse 80% 50% at 50% 120%, rgba(62, 61, 117), rgba(18, 18, 38))",
  };
  // center_15%
  return (
    <div>
      <div className="h-[calc(100vh-200px)] overflow-hidden relative">
        <img
          src={mainbg}
          alt="Banner Background"
          className="absolute w-full h-full -z-9  inset-0 object-cover  object-[top_15%] opacity-100"
        />
        <div className="absolute w-full h-full -z-9 inset-0 bg-gradient-to-r from-black to-transparent opacity-95"></div>
          {/* <div class="absolute -left-[30rem] -top-[25rem] aspect-square h-[50rem] rounded-full shadow-2xl shadow-gray-900/10"></div> */}
          {/* <div class="absolute -bottom-[20rem] -right-[32rem] aspect-square h-[50rem] rounded-full shadow-2xl shadow-gray-900/20">
            <div class="absolute left-1/2 top-1/2 aspect-square h-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-2xl shadow-gray-900/30"></div>
          </div> */}
          
          {/* <div className="hidden xl:flex justify-center items-center ">
          <div
            className="relative  group inline-block px-4 py-2 overflow-hidden text-black [border-radius:var(--radius)]"
            style={myStyle}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-[-100%] rotate-gradient">
                <div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,black_var(--spread),transparent_var(--spread))]"></div>
              </div>
            </div>

            <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>

            <p className="relative z-10 text-center font-primary font-medium  text-lg whitespace-nowrap m-0 font-medium">
              South India's{" "}
              <span className="text-white font-medium">
                No.1 Software Training and Placement Centre
              </span>
            </p>
          </div>
        </div> */}
          <div className=" w-full sm:w-1/2   py-10 lg:py-20 pl-4 sm:pl-10 lg:pl-20 text-white">
              {/* <BannerLeft
            title="Java Fullstack Development"
            subtitle="Learn Java, Spring Boot, HTML, CSS, JavaScript, React, MySQL, and version control (Git) — everything you need to build modern, scalable web applications."
            counter={[32526, 10203, 1001]}
          /> */}
          <div>
       <p className="relative z-10 font-secondary sm:text-xl text-base text-primary-600  m-0 mb-2 font-medium">
            South India's{" "}
            <span className="text-white font-medium">
              No.1 Software Training and Placement Centre
            </span>
          </p>
         <h1 className="text-2xl sm:text-3xl text-zinc-200  z-1 lg:text-5xl font-primary font-bold blur-animate ">
            "Dreaming of Becoming a{" "}
            <span className="text-primary-600">Software Engineer?"</span>
          </h1>
          <p className="font-secondary mt-6 text-white text-lg">We’ve been shaping the future of IT talent in Chennai and for over 13+ years. We’re proud to be ISO 9001:2015 certified, a NASSCOM member, and partnered with 180+ companies for placement support.</p>
          <div className="hidden lg:flex gap-x-6 mt-6 font-primary">
            {/* {counter.map((count, index)=>(
                <CountUpBox2 key={index} value={count} label={labels[index]} />
            ))} */}
          </div>
          <div className="flex items-center mt-6" data-aos="fade-up"> 
            <SecondaryButton buttonText='Talk to Us Today' />
          </div>
           
    </div>
          </div>
          <div className="hidden pl-6 py-25 w-1/2 h-Full flex flex-col">
            <p className="text-center font-primary  text-lg mb-4 block xl:hidden">
            Empowering Careers{" "}
            <span className="text-white font-medium">Since 2007</span>
          </p>
          <p className="relative z-10 font-primary  text-lg text-white whitespace-nowrap m-0 mb-2 font-medium">
            South India's{" "}  
            <span className="text-white font-medium">
              No.1 Software Training and Placement Centre
            </span>
          </p>
            <h1 className="text-3xl sm:text-3xl text-white  z-1 lg:text-5xl font-primary font-bold blur-animate ">
            "Dreaming of Becoming a{" "}
            <span className="text-white">Software Engineer?</span>
          </h1>
          <h1 className="text-2xl sm:text-3xl text-red-600  lg:text-4xl font-primary font-bold mt-2 blur-animate">
            Let’s Make It Happen!"
          </h1>

          <div className="flex mt-8 ">
            <button
              className=" group relative cursor-pointer overflow-hidden whitespace-nowrap px-6 py-4 text-white [background:var(--bg)] [border-radius:var(--radius)]  transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(62,61,117,0.7)] flex justify-center "
              style={myStyle2}
            >
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-[-100%] rotate-gradient">
                  <div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))]"></div>
                </div>
              </div>
              <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
              <span className="z-10 w-48 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center font-secondary text-base font-semibold leading-none tracking-tight text-white">
                <Link to={"aboutus"}>Talk to Us Today</Link>
              </span>
            </button>
          </div>
          </div>
</div>
          <div className="hidden bg-black text-white lg:flex justify-evenly gap-12 py-5 font-secondary">
            <CountUpBox value={125000} label="Candidates Trained" />
            <CountUpBox value={25000} label="Candidates Placed" />
            <CountUpBox value={3000} label="Currently Enrolled Candidates" />
            <CountUpBox value={200} label="Expert Trainers" />
            <CountUpBox value={9} label="Branches" />
          </div>

          <div className="lg:hidden flex justify-center lg:hidden mt-6 border-gray-800">
            <ul className="flex space-x-5 text-black font-secondary">
              <li>
                <a
                  href="https://www.facebook.com/share/1H6HomtGnP/"
                  target="_blank"
                  className="hover:text-white transform"
                >
                  <svg
                    className="w-8 h-8 fill-black hover:fill-blue-600 transition duration-300 ease-in-out"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#DFDFD6"
                      strokeWidth="0.384"
                    >
                      <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path>
                    </g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/uniqtechs?igsh=MXM2dDRnYW16cncyNQ=="
                  target="_blank"
                >
                  <svg
                    viewBox="0 0 48 48"
                    className="w-8 h-8 fill-black hover:fill-pink-500 transition duration-300 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#DFDFD6"
                    strokeWidth="0.00048000000000000007"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#000000"
                      strokeWidth="6.144"
                    >
                      <circle cx="24" cy="24" r="20" fill="#DFDFD6"></circle>
                      <path
                        d="M24 14.1622C27.2041 14.1622 27.5837 14.1744 28.849 14.2321C30.019 14.2855 30.6544 14.481 31.0773 14.6453C31.6374 14.863 32.0371 15.123 32.457 15.5429C32.877 15.9629 33.137 16.3626 33.3547 16.9227C33.519 17.3456 33.7145 17.981 33.7679 19.1509C33.8256 20.4163 33.8378 20.7958 33.8378 23.9999C33.8378 27.2041 33.8256 27.5836 33.7679 28.849C33.7145 30.019 33.519 30.6543 33.3547 31.0772C33.137 31.6373 32.877 32.0371 32.4571 32.457C32.0371 32.8769 31.6374 33.1369 31.0773 33.3546C30.6544 33.519 30.019 33.7144 28.849 33.7678C27.5839 33.8255 27.2044 33.8378 24 33.8378C20.7956 33.8378 20.4162 33.8255 19.151 33.7678C17.981 33.7144 17.3456 33.519 16.9227 33.3546C16.3626 33.1369 15.9629 32.8769 15.543 32.457C15.1231 32.0371 14.863 31.6373 14.6453 31.0772C14.481 30.6543 14.2855 30.019 14.2321 28.849C14.1744 27.5836 14.1622 27.2041 14.1622 23.9999C14.1622 20.7958 14.1744 20.4163 14.2321 19.1509C14.2855 17.981 14.481 17.3456 14.6453 16.9227C14.863 16.3626 15.123 15.9629 15.543 15.543C15.9629 15.123 16.3626 14.863 16.9227 14.6453C17.3456 14.481 17.981 14.2855 19.151 14.2321C20.4163 14.1744 20.7959 14.1622 24 14.1622ZM24 12C20.741 12 20.3323 12.0138 19.0524 12.0722C17.7752 12.1305 16.9028 12.3333 16.1395 12.63C15.3504 12.9366 14.6812 13.3469 14.0141 14.0141C13.3469 14.6812 12.9366 15.3504 12.63 16.1395C12.3333 16.9028 12.1305 17.7751 12.0722 19.0524C12.0138 20.3323 12 20.741 12 23.9999C12 27.259 12.0138 27.6676 12.0722 28.9475C12.1305 30.2248 12.3333 31.0971 12.63 31.8604C12.9366 32.6495 13.3469 33.3187 14.0141 33.9859C14.6812 34.653 15.3504 35.0633 16.1395 35.3699C16.9028 35.6666 17.7752 35.8694 19.0524 35.9277C20.3323 35.9861 20.741 35.9999 24 35.9999C27.259 35.9999 27.6677 35.9861 28.9476 35.9277C30.2248 35.8694 31.0972 35.6666 31.8605 35.3699C32.6496 35.0633 33.3188 34.653 33.9859 33.9859C34.653 33.3187 35.0634 32.6495 35.37 31.8604C35.6667 31.0971 35.8695 30.2248 35.9278 28.9475C35.9862 27.6676 36 27.259 36 23.9999C36 20.741 35.9862 20.3323 35.9278 19.0524C35.8695 17.7751 35.6667 16.9028 35.37 16.1395C35.0634 15.3504 34.653 14.6812 33.9859 14.0141C33.3188 13.3469 32.6496 12.9366 31.8605 12.63C31.0972 12.3333 30.2248 12.1305 28.9476 12.0722C27.6677 12.0138 27.259 12 24 12Z"
                        fill="black"
                      ></path>
                      <path
                        d="M24.0059 17.8433C20.6026 17.8433 17.8438 20.6021 17.8438 24.0054C17.8438 27.4087 20.6026 30.1675 24.0059 30.1675C27.4092 30.1675 30.1681 27.4087 30.1681 24.0054C30.1681 20.6021 27.4092 17.8433 24.0059 17.8433ZM24.0059 28.0054C21.7968 28.0054 20.0059 26.2145 20.0059 24.0054C20.0059 21.7963 21.7968 20.0054 24.0059 20.0054C26.2151 20.0054 28.0059 21.7963 28.0059 24.0054C28.0059 26.2145 26.2151 28.0054 24.0059 28.0054Z"
                        fill="black"
                      ></path>
                      <path
                        d="M31.8507 17.5963C31.8507 18.3915 31.206 19.0363 30.4107 19.0363C29.6154 19.0363 28.9707 18.3915 28.9707 17.5963C28.9707 16.801 29.6154 16.1562 30.4107 16.1562C31.206 16.1562 31.8507 16.801 31.8507 17.5963Z"
                        fill="black"
                      ></path>
                    </g>
                    <g id="SVGRepo_iconCarrier">
                      <circle cx="24" cy="24" r="20"></circle>
                      <path
                        d="M24 14.1622C27.2041 14.1622 27.5837 14.1744 28.849 14.2321C30.019 14.2855 30.6544 14.481 31.0773 14.6453C31.6374 14.863 32.0371 15.123 32.457 15.5429C32.877 15.9629 33.137 16.3626 33.3547 16.9227C33.519 17.3456 33.7145 17.981 33.7679 19.1509C33.8256 20.4163 33.8378 20.7958 33.8378 23.9999C33.8378 27.2041 33.8256 27.5836 33.7679 28.849C33.7145 30.019 33.519 30.6543 33.3547 31.0772C33.137 31.6373 32.877 32.0371 32.4571 32.457C32.0371 32.8769 31.6374 33.1369 31.0773 33.3546C30.6544 33.519 30.019 33.7144 28.849 33.7678C27.5839 33.8255 27.2044 33.8378 24 33.8378C20.7956 33.8378 20.4162 33.8255 19.151 33.7678C17.981 33.7144 17.3456 33.519 16.9227 33.3546C16.3626 33.1369 15.9629 32.8769 15.543 32.457C15.1231 32.0371 14.863 31.6373 14.6453 31.0772C14.481 30.6543 14.2855 30.019 14.2321 28.849C14.1744 27.5836 14.1622 27.2041 14.1622 23.9999C14.1622 20.7958 14.1744 20.4163 14.2321 19.1509C14.2855 17.981 14.481 17.3456 14.6453 16.9227C14.863 16.3626 15.123 15.9629 15.543 15.543C15.9629 15.123 16.3626 14.863 16.9227 14.6453C17.3456 14.481 17.981 14.2855 19.151 14.2321C20.4163 14.1744 20.7959 14.1622 24 14.1622ZM24 12C20.741 12 20.3323 12.0138 19.0524 12.0722C17.7752 12.1305 16.9028 12.3333 16.1395 12.63C15.3504 12.9366 14.6812 13.3469 14.0141 14.0141C13.3469 14.6812 12.9366 15.3504 12.63 16.1395C12.3333 16.9028 12.1305 17.7751 12.0722 19.0524C12.0138 20.3323 12 20.741 12 23.9999C12 27.259 12.0138 27.6676 12.0722 28.9475C12.1305 30.2248 12.3333 31.0971 12.63 31.8604C12.9366 32.6495 13.3469 33.3187 14.0141 33.9859C14.6812 34.653 15.3504 35.0633 16.1395 35.3699C16.9028 35.6666 17.7752 35.8694 19.0524 35.9277C20.3323 35.9861 20.741 35.9999 24 35.9999C27.259 35.9999 27.6677 35.9861 28.9476 35.9277C30.2248 35.8694 31.0972 35.6666 31.8605 35.3699C32.6496 35.0633 33.3188 34.653 33.9859 33.9859C34.653 33.3187 35.0634 32.6495 35.37 31.8604C35.6667 31.0971 35.8695 30.2248 35.9278 28.9475C35.9862 27.6676 36 27.259 36 23.9999C36 20.741 35.9862 20.3323 35.9278 19.0524C35.8695 17.7751 35.6667 16.9028 35.37 16.1395C35.0634 15.3504 34.653 14.6812 33.9859 14.0141C33.3188 13.3469 32.6496 12.9366 31.8605 12.63C31.0972 12.3333 30.2248 12.1305 28.9476 12.0722C27.6677 12.0138 27.259 12 24 12Z"
                        fill="white"
                      ></path>
                      <path
                        d="M24.0059 17.8433C20.6026 17.8433 17.8438 20.6021 17.8438 24.0054C17.8438 27.4087 20.6026 30.1675 24.0059 30.1675C27.4092 30.1675 30.1681 27.4087 30.1681 24.0054C30.1681 20.6021 27.4092 17.8433 24.0059 17.8433ZM24.0059 28.0054C21.7968 28.0054 20.0059 26.2145 20.0059 24.0054C20.0059 21.7963 21.7968 20.0054 24.0059 20.0054C26.2151 20.0054 28.0059 21.7963 28.0059 24.0054C28.0059 26.2145 26.2151 28.0054 24.0059 28.0054Z"
                        fill="white"
                      ></path>
                      <path
                        d="M31.8507 17.5963C31.8507 18.3915 31.206 19.0363 30.4107 19.0363C29.6154 19.0363 28.9707 18.3915 28.9707 17.5963C28.9707 16.801 29.6154 16.1562 30.4107 16.1562C31.206 16.1562 31.8507 16.801 31.8507 17.5963Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@uniqtechnologiesofficial?si=TjCFfum3corJj1K_"
                  target="_blank"
                >
                  <svg
                    className="w-8 h-8 fill-black hover:fill-red-600 transition duration-300 ease-in-out"
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="-143 145 512 512"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <polygon points="78.9,450.3 162.7,401.1 78.9,351.9 "></polygon>
                        <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,446.8L241,446.8 c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1 V446.8z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Uniqtechs?t=Uq2VphiMgcDiTzDgQRuYQg&s=08"
                  target="_blank"
                >
                  <svg
                    className="w-8 h-8 p-2 bg-black rounded-full fill-white hover:bg-sky-600 transition duration-300 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 32 32"
                  >
                    <path d="M 4.0175781 4 L 13.091797 17.609375 L 4.3359375 28 L 6.9511719 28 L 14.246094 19.34375 L 20.017578 28 L 20.552734 28 L 28.015625 28 L 18.712891 14.042969 L 27.175781 4 L 24.560547 4 L 17.558594 12.310547 L 12.017578 4 L 4.0175781 4 z M 7.7558594 6 L 10.947266 6 L 24.279297 26 L 21.087891 26 L 7.7558594 6 z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://t.me/uniqtechnologies" target="_blank">
                  <svg
                    className="w-8 h-8 fill-black hover:fill-sky-400 transition duration-300 ease-in-out"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zM23.613 11.119l-2.544 11.988c-0.188 0.85-0.694 1.056-1.4 0.656l-3.875-2.856-1.869 1.8c-0.206 0.206-0.381 0.381-0.781 0.381l0.275-3.944 7.181-6.488c0.313-0.275-0.069-0.431-0.482-0.156l-8.875 5.587-3.825-1.194c-0.831-0.262-0.85-0.831 0.175-1.231l14.944-5.763c0.694-0.25 1.3 0.169 1.075 1.219z"></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/thg9aZn4NXCxH1MR6?g_st=aw"
                  target="_blank"
                >
                  <svg
                    className="w-8 h-8 p-2 bg-black rounded-full fill-white hover:bg-amber-400 transition duration-300 ease-in-out"
                    version="1.0"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="64px"
                    height="64px"
                    viewBox="0 0 64 64"
                    enableBackground="new 0 0 64 64"
                    xmlSpace="preserve"
                    fill="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path
                          fill="#ffffff"
                          d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M32,38c-7.732,0-14-6.268-14-14 s6.268-14,14-14s14,6.268,14,14S39.732,38,32,38z"
                        ></path>{" "}
                        <path
                          fill="#ffffff"
                          d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34 c-5.523,0-10-4.478-10-10s4.477-10,10-10s10,4.478,10,10S37.523,34,32,34z"
                        ></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
   
      
    </div>
  );
};

export default Banner;
