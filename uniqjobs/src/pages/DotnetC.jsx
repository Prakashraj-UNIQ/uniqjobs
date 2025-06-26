import React from "react";
import BannerLeft from "../components/Courses/BannerLeft";
import BannerVideo from "../components/Courses/BannerVideo";
import img from "../assets/images/productioncover.jpg";
import RoadmapItem from "../components/Courses/RoadmapItem";
import Faq from '../components/Courses/Faq'
import DownloadSyllabus from '../components/Courses/DownloadSyllabus'

const DotnetC = () => {
 

  const icons = [
    <svg
      viewBox="0 0 2050 2050"
      data-name="Layer 3"
      id="Layer_3"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-white group-hover:fill-red-600"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style></style>
        </defs>
        <title></title>
        <path
          className="cls-1"
          d="M882.7,1062.9H465.1a45.1,45.1,0,0,1-45-45V600.3a45,45,0,0,1,45-45H882.7a44.9,44.9,0,0,1,45,45v417.6A45,45,0,0,1,882.7,1062.9Z"
        ></path>
        <path
          className="cls-1"
          d="M1584.9,728.8H1091.2a45,45,0,0,1,0-90h493.7a45,45,0,0,1,0,90Z"
        ></path>
        <path
          className="cls-1"
          d="M1584.9,984.1H1091.2a45,45,0,0,1,0-90h493.7a45,45,0,0,1,0,90Z"
        ></path>
        <path
          className="cls-1"
          d="M1584.9,1239.4H465.1a45,45,0,1,1,0-90H1584.9a45,45,0,0,1,0,90Z"
        ></path>
        <path
          className="cls-1"
          d="M1584.9,1494.7H465.1a45,45,0,0,1,0-90H1584.9a45,45,0,0,1,0,90Z"
        ></path>
        <path
          className="cls-2"
          d="M671.6,926.9a45,45,0,0,1-45-45V759.5a45,45,0,0,1,90,0V881.9A45.1,45.1,0,0,1,671.6,926.9Z"
        ></path>
        <path
          className="cls-2"
          d="M753,792.9H594.8a45,45,0,0,1,0-90H753a45,45,0,0,1,0,90Z"
        ></path>
      </g>
    </svg>,
    <svg
      className="fill-white group-hover:fill-red-600"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fill-rule="nonzero"
          clip-rule="nonzero"
          d="M7.00017 5.5C5.61936 5.5 4.5 6.61936 4.5 8.00017C4.5 9.38097 5.61936 10.5003 7.00017 10.5003C7.71226 10.5003 8.3538 10.2036 8.81009 9.725C9.09591 9.4252 9.57065 9.41386 9.87045 9.69968C10.1703 9.9855 10.1816 10.4602 9.89577 10.76C9.16817 11.5232 8.13926 12.0003 7.00017 12.0003C4.79094 12.0003 3 10.2094 3 8.00017C3 5.79094 4.79094 4 7.00017 4C8.13445 4 9.15952 4.47309 9.88658 5.23069C10.1734 5.52954 10.1636 6.00432 9.86477 6.29112C9.56591 6.57793 9.09114 6.56817 8.80433 6.26931C8.3484 5.79424 7.70928 5.5 7.00017 5.5Z"
        ></path>{" "}
        <path
          fill-rule="nonzero"
          clip-rule="nonzero"
          d="M6.58638 0.102166C6.8199 -0.0340553 7.10867 -0.0340553 7.34219 0.102166L12.0565 2.85217C12.4143 3.06088 12.5351 3.52011 12.3264 3.8779C12.1177 4.23569 11.6585 4.35654 11.3007 4.14783L6.96429 1.61828L1.5 4.80578V11.1942L6.96429 14.3817L11.3007 11.8522C11.6585 11.6435 12.1177 11.7643 12.3264 12.1221C12.5351 12.4799 12.4143 12.9391 12.0565 13.1478L7.34219 15.8978C7.10867 16.0341 6.8199 16.0341 6.58638 15.8978L0.372097 12.2728C0.141683 12.1384 0 11.8918 0 11.625V4.375C0 4.10825 0.141683 3.86157 0.372097 3.72717L6.58638 0.102166Z"
        ></path>{" "}
        <path
          fill-rule="nonzero"
          clip-rule="nonzero"
          d="M12.1799 5.25C12.456 5.25 12.6799 5.47386 12.6799 5.75V10.25C12.6799 10.5261 12.456 10.75 12.1799 10.75C11.9038 10.75 11.6799 10.5261 11.6799 10.25V5.75C11.6799 5.47386 11.9038 5.25 12.1799 5.25Z"
        ></path>{" "}
        <path
          fill-rule="nonzero"
          clip-rule="nonzero"
          d="M14.3201 5.25C14.5962 5.25 14.8201 5.47386 14.8201 5.75V10.25C14.8201 10.5261 14.5962 10.75 14.3201 10.75C14.044 10.75 13.8201 10.5261 13.8201 10.25V5.75C13.8201 5.47386 14.044 5.25 14.3201 5.25Z"
        ></path>{" "}
        <path
          fill-rule="nonzero"
          clip-rule="nonzero"
          d="M10.5 6.92993C10.5 6.65379 10.7239 6.42993 11 6.42993H15.5C15.7761 6.42993 16 6.65379 16 6.92993C16 7.20607 15.7761 7.42993 15.5 7.42993H11C10.7239 7.42993 10.5 7.20607 10.5 6.92993Z"
        ></path>{" "}
        <path
          fill-rule="nonzero"
          clip-rule="nonzero"
          d="M10.5 9.07007C10.5 8.79393 10.7239 8.57007 11 8.57007H15.5C15.7761 8.57007 16 8.79393 16 9.07007C16 9.34621 15.7761 9.57007 15.5 9.57007H11C10.7239 9.57007 10.5 9.34621 10.5 9.07007Z"
        ></path>{" "}
      </g>
    </svg>,
    <svg
      className="fill-white group-hover:fill-red-600"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 2H0V7H16V2ZM4 4.5C4 5.05228 3.55228 5.5 3 5.5C2.44772 5.5 2 5.05228 2 4.5C2 3.94772 2.44772 3.5 3 3.5C3.55228 3.5 4 3.94772 4 4.5Z"
        ></path>{" "}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 9H0V14H16V9ZM3 12.5C3.55228 12.5 4 12.0523 4 11.5C4 10.9477 3.55228 10.5 3 10.5C2.44772 10.5 2 10.9477 2 11.5C2 12.0523 2.44772 12.5 3 12.5Z"
        ></path>{" "}
      </g>
    </svg>,
    <svg
      className="fill-white group-hover:fill-red-600"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 550.801 550.801"
      xml:space="preserve"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M475.095,132c-0.031-2.529-0.828-5.023-2.562-6.995L366.325,3.694c-0.021-0.031-0.053-0.042-0.085-0.074 c-0.633-0.709-1.36-1.292-2.141-1.803c-0.232-0.153-0.464-0.288-0.707-0.422c-0.686-0.369-1.392-0.67-2.13-0.892 c-0.2-0.061-0.38-0.14-0.58-0.195C359.87,0.119,359.048,0,358.204,0H97.2c-11.907,0-21.6,9.695-21.6,21.601v507.6 c0,11.913,9.692,21.601,21.6,21.601h356.4c11.918,0,21.6-9.688,21.6-21.601V133.21C475.2,132.804,475.137,132.398,475.095,132z M204.707,515.152l-9.06-30.138h-33.637l-8.363,30.138h-27.535l35.898-117.45h34.857l36.418,117.45H204.707z M277.705,516.902 c-13.413,0-26.66-3.49-33.278-7.15l5.4-21.953c7.137,3.665,18.122,7.314,29.449,7.314c12.197,0,18.646-5.053,18.646-12.72 c0-7.31-5.579-11.502-19.688-16.548c-19.519-6.803-32.244-17.604-32.244-34.679c0-20.039,16.735-35.385,44.439-35.385 c13.247,0,23.003,2.795,29.975,5.928l-5.928,21.441c-4.704-2.262-13.067-5.574-24.563-5.574 c-11.504,0-17.083,5.227-17.083,11.322c0,7.499,6.621,10.811,21.788,16.554c20.734,7.678,30.496,18.478,30.496,35.031 C325.113,500.176,309.952,516.902,277.705,516.902z M416.592,461.311c-9.065,8.543-22.486,12.371-38.164,12.371 c-3.486,0-6.629-0.169-9.065-0.527v41.998h-26.314V399.273c8.185-1.402,19.686-2.437,35.896-2.437 c16.385,0,28.06,3.133,35.896,9.397c7.499,5.928,12.551,15.684,12.551,27.189C427.392,444.931,423.562,454.687,416.592,461.311z M97.2,366.758V21.605h250.204v110.519c0,5.961,4.83,10.8,10.8,10.8h95.396l0.011,223.834H97.2z"></path>{" "}
              <path d="M178.567,417.572h-0.351c-1.743,6.972-3.483,15.852-5.4,22.654l-6.977,24.912h25.969l-7.322-24.912 C182.4,433.245,180.307,424.544,178.567,417.572z"></path>{" "}
              <path d="M380.342,416.871c-5.4,0-9.065,0.521-10.979,1.049v34.668c2.268,0.538,5.052,0.707,8.886,0.707 c14.117,0,22.829-7.146,22.829-19.164C401.077,423.32,393.583,416.871,380.342,416.871z"></path>{" "}
            </g>{" "}
            <g>
              {" "}
              <path d="M131.462,220.198l98.442-50.799v24.15l-74.448,36.223v0.454l74.448,36.218v24.145l-98.442-50.799V220.198z"></path>{" "}
              <path d="M245.134,299.705l43.903-165.153h20.704l-43.889,165.153H245.134z"></path>{" "}
              <path d="M420.104,240.464l-98.444,50.124v-24.149l76.096-36.218v-0.454l-76.096-36.218v-24.15l98.444,50.119V240.464z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>,
    <svg
      className="fill-white group-hover:fill-red-600"
      viewBox="0 0 846.66 846.66"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style type="text/css">{`.fil0 {fill:white;fill-rule:nonzero}`}</style>
        </defs>
        <g id="Layer_x0020_1">
          <path
            className="fil0"
            d="M539.75 794.68c27.15,0 27.15,41.29 0,41.29l-497.47 0c-11.4,0 -20.64,-9.25 -20.64,-20.65l0 -621.69c0,-5.7 2.31,-10.87 6.04,-14.6l162.3 -162.29c4.03,-4.03 9.31,-6.05 14.59,-6.05l466.89 0c11.4,0 20.65,9.25 20.65,20.65l0 361.36c0,27.16 -41.29,27.16 -41.29,0l0 -340.72 -437.7 0 -150.19 150.2 0 592.5 476.82 0zm-351.21 -181.98c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 -274.68c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 91.56c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 91.56c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 -274.68c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm496.57 238.25c49.84,0 90.24,40.4 90.24,90.24 0,18.1 -5.33,34.95 -14.5,49.07 37.57,24.93 61.47,66.08 64.13,111.2 1.59,27.06 -39.55,29.47 -41.13,2.42 -2.11,-35.69 -22.61,-67.48 -54.13,-84.24 -13.16,7.5 -28.38,11.78 -44.61,11.78 -17.56,0 -33.95,-5.01 -47.81,-13.69 -33.44,16.12 -55.6,49.04 -57.79,86.15 -1.59,27.05 -42.72,24.64 -41.13,-2.42 2.79,-47.18 28.75,-89.88 69.08,-114.28 -7.99,-13.47 -12.58,-29.19 -12.58,-45.99 0,-49.83 40.4,-90.24 90.23,-90.24zm0 41.29c-27.03,0 -48.94,21.92 -48.94,48.95 0,27.03 21.91,48.94 48.94,48.94 27.03,0 48.95,-21.91 48.95,-48.94 0,-27.03 -21.91,-48.95 -48.95,-48.95z"
          />
        </g>
      </g>
    </svg>,
  ];

  const roadmapData = [
    { title: "HTML/CSS/JS", duration: "10 Days", icon: icons[0] },
    { title: "C#", duration: "35 Days - 45 Days", icon: icons[1] },
    { title: "SQL Server", duration: "15 days", icon: icons[2] },
    { title: "ASP.NET", duration: "20 days", icon: icons[3] },
    { title: "Mock Interviews", duration: "15 - 20 days", icon: icons[4] },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center px-4 sm:px-10 lg:px-20 py-10 sm:py-15 lg:py-25 gap-4">
        <div className="w-full lg:w-1/2">
          <BannerLeft
            title="Dotnet Full Stack Development"
            subtitle="Master C#, ASP.NET, ASP.NET Core MVC, HTML, CSS, JavaScript, and SQL Server — everything you need to build modern, enterprise-grade web applications on the Microsoft tech stack."
            counter={[19050, 7010, 400]}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <BannerVideo videoId="xZjnLNcNLzU" imageUrl={img} />
        </div>
      </div>
      <div className="bg-[#f2f2f2] py-4 text-center">
        <h1 className="px-4 text-black text-3xl lg:text-5xl text-center fold-primary font-black">
          From Zero to{" "}
          <span className="text-red-600">Full Stack Hero with 120 Days</span>
        </h1>
        <p className="font-primary font-medium text-xl text-gray-800 mt-4 ">
          DotNet Fullstack Development (HARD)
        </p>
      </div>
      <div className="relative bg-[#f2f2f2] py-5">
        <div className="relative overflow-hidden sm:px-20 py-10">
          <div className="hidden lg:block absolute -top-5 main-wave">
            <svg
              className="wave"
              width="100%"
              height="100%"
              viewBox="0 0 900 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="roadmapGradient"
                  x1="0"
                  y1="0"
                  x2="900"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#0b090a" />
                  <stop offset="100%" stopColor="#ba181b" />
                </linearGradient>
              </defs>

              <path
                d="
              M50 80
              L850 80
             
             
            "
                stroke="url(#roadmapGradient)"
                strokeWidth="6"
                strokeDasharray="5 5"
                fill="none"
              />
            </svg>
          </div>
          <div className="hidden lg:block absolute top-8.5 left-23 border-b-4 border-b-[#0b090a]">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M14 22V16.9612C14 16.3537 13.7238 15.7791 13.2494 15.3995L11.5 14M11.5 14L13 7.5M11.5 14L10 13M13 7.5L11 7M13 7.5L15.0426 10.7681C15.3345 11.2352 15.8062 11.5612 16.3463 11.6693L18 12M10 13L11 7M10 13L9.40011 16.2994C9.18673 17.473 8.00015 18.2 6.85767 17.8573L4 17M11 7L8.10557 8.44721C7.428 8.786 7 9.47852 7 10.2361V12M14.5 3.5C14.5 4.05228 14.0523 4.5 13.5 4.5C12.9477 4.5 12.5 4.05228 12.5 3.5C12.5 2.94772 12.9477 2.5 13.5 2.5C14.0523 2.5 14.5 2.94772 14.5 3.5Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="hidden lg:block absolute bottom-50 right-22.5">
            <svg
              height="64px"
              width="64px"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xml:space="preserve"
              fill="#ba181b"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <style type="text/css"> {`.st0{fill:#000000;}`} </style>{" "}
                <g>
                  {" "}
                  <path
                    className="st0"
                    d="M275.175,74.728c20.637,0,37.372-16.728,37.372-37.364C312.547,16.727,295.812,0,275.175,0 c-20.629,0-37.357,16.727-37.357,37.364C237.818,58,254.546,74.728,275.175,74.728z"
                  ></path>{" "}
                  <polygon
                    className="st0"
                    points="372.199,419.995 282.451,419.995 282.451,354.645 192.737,354.645 192.737,289.282 102.993,289.282 102.993,223.918 26.559,223.918 26.559,250.56 76.359,250.56 76.359,315.923 166.103,315.923 166.103,381.287 255.817,381.287 255.817,446.637 345.568,446.637 345.568,512 460.237,512 460.237,485.366 372.199,485.359 "
                  ></polygon>{" "}
                  <path
                    className="st0"
                    d="M477.983,181.243c-0.636-4.242-4.588-7.168-8.838-6.532l-17.934,2.695l-1.532-10.195 c-0.636-4.147-4.494-6.987-8.635-6.373l-1.878,0.282c-0.261-1.734-0.86-3.447-1.85-5.022l-25.897-41.411 c-2.796-4.466-7.052-7.819-12.053-9.488L352.48,83.334c-15.857-7.392-34.21-6.597-49.42,1.821l-9.748,59.294l-36.128-30.63 l-28.882,18.187l-42.183-19.799c-6.554-3.671-14.82-1.495-18.714,4.92l-0.535,0.867c-1.922,3.187-2.514,6.994-1.618,10.601 c0.888,3.606,3.194,6.705,6.387,8.612l50.277,30.002c6.25,3.736,13.874,4.408,20.687,1.836l29.777-16.041l14.119,56.952 l-46.932-0.238c-7.905-0.022-15.412,3.483-20.456,9.574c-5.044,6.091-7.088,14.119-5.586,21.887l15.788,81.282 c1.748,9.003,10.282,15.03,19.35,13.672l0.679-0.102c8.982-1.344,15.347-9.458,14.516-18.498l-5.347-58.24l70.819,1.648 c10.167,0.231,19.889-4.156,26.443-11.937c6.554-7.775,9.22-18.108,7.262-28.094l-1.814-9.205l-14.564-82.2l37.534,5.542 l27.458,31.844c-1.618,1.648-2.565,3.902-2.204,6.359l1.532,10.21l-17.927,2.695c-4.249,0.636-7.168,4.595-6.525,8.844l7.363,48.99 c0.644,4.241,4.596,7.168,8.838,6.532l76.101-11.446c4.242-0.636,7.161-4.596,6.525-8.844L477.983,181.243z M295.162,168.496 c0-2.558,2.074-4.625,4.624-4.625s4.624,2.067,4.624,4.625c0,2.558-2.074,4.624-4.624,4.624S295.162,171.054,295.162,168.496z M304.714,199.018c-2.551,0-4.625-2.066-4.625-4.624s2.074-4.624,4.625-4.624c2.55,0,4.624,2.066,4.624,4.624 S307.265,199.018,304.714,199.018z M416.745,172.644c4.329,4.205,10.984,5,16.157,1.719l0.304-0.195 c2.182-1.38,3.801-3.316,4.827-5.484l4.104-0.621l0.318,0.232l1.532,10.202l-25.781,3.873L416.745,172.644z"
                  ></path>{" "}
                  <path
                    className="st0"
                    d="M393.667,384.835c6.286,6.568,16.67,6.965,23.44,0.888l0.485-0.426c6.749-6.055,7.486-16.381,1.676-23.353 l-38.701-51.932l-12.342-60.126c-0.838,1.207-1.698,2.4-2.652,3.534c-9.205,10.932-22.692,17.204-36.992,17.204l-6.576-0.152 l14.43,46.909c3.338,6.908,7.681,13.296,12.873,18.968L393.667,384.835z"
                  ></path>{" "}
                  <polygon
                    className="st0"
                    points="273.983,118.899 285.913,125.026 290.848,111.818 284.41,98.075 268.766,107.757 "
                  ></polygon>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 space-y-5 sm:space-y-25 px-2 sm:px-10 lg:px-35">
            {roadmapData.map((item, index) => (
              <RoadmapItem
                key={index}
                title={item.title}
                duration={item.duration}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
        <p className="lg:absolute bottom-15 right-35 font-primary font-bold text-xl pt-4 text-center lg:text-end">
          Total: <span className="text-red-600">100</span> Days to{" "}
          <span className="text-red-600">130</span> Days
        </p>
      </div>
  
      
      {/* <div className="flex items-center justify-center sm:justify-end px-4 sm:px-10 lg:px-20 pb-10 bg-white">
        <DownloadSyllabus />
      </div> */}
    </div>
  );
};

export default DotnetC;
