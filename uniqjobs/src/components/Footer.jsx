import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className=" relative bg-black text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-80">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full filter blur-3xl animate-float1"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-sky-500 rounded-full filter blur-3xl animate-float2"></div>
        <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-green-500 rounded-full filter blur-3xl animate-float3"></div>
      </div>

      <div className="relative py-5 px-2 lg:px-24 sm:py-20">
        <div className="block lg:flex gap-18">
          <div className="group w-full sm:w-[350px] ">
            <div className="flex items-center space-x-2 mb-6">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-red-500 font-primary">
                <Link to={'/'} >Uniq Jobs</Link> 
              </h2>
            </div>
            <p className="text-gray-300 mb-6 text-justify font-secondary">
              At UniqJobs, we’re more than a training institute — we’re a
              launchpad for tech careers. Established in 2007 by industry
              professionals from TCS and powered by UNIQ Technologies, we’ve
              been shaping the future of IT talent in Chennai for over 13+
              years. We’re proud to be ISO 9001:2015 certified, a NASSCOM
              member, and partnered with 180+ companies for placement support.
            </p>

            <div className="flex space-x-4 mb-5 lg-mb-0">
              <ul className="flex space-x-5 text-black font-secondary">
                <li>
                  <a
                    href="https://www.facebook.com/share/1H6HomtGnP/"
                    target="_blank"
                    className="hover:text-red-600  transform"
                  >
                    <svg
                      className="w-8 h-8 fill-white hover:fill-blue-600 transition duration-300 ease-in-out"
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
                      className="w-8 h-8 fill-white hover:fill-pink-500 transition duration-300 ease-in-out"
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
                      <g id="SVGRepo_iconCarrier">
                        <circle cx="24" cy="24" r="20"></circle>
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
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@uniqtechnologiesofficial?si=TjCFfum3corJj1K_"
                    target="_blank"
                  >
                    <svg
                      className="w-8 h-8 fill-white hover:fill-red-600 transition duration-300 ease-in-out"
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
                      className="w-8 h-8 p-2 bg-white rounded-full fill-black hover:bg-sky-600 transition duration-300 ease-in-out"
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
                      className="w-8 h-8 fill-white hover:fill-sky-400 transition duration-300 ease-in-out"
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
                      className="w-8 h-8 p-2 bg-white rounded-full fill-black hover:bg-amber-400 transition duration-300 ease-in-out"
                      version="1.0"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="64px"
                      height="64px"
                      viewBox="0 0 64 64"
                      enableBackground="new 0 0 64 64"
                      xmlSpace="preserve"
                      fill="#000000"
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
                            fill="#000000"
                            d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M32,38c-7.732,0-14-6.268-14-14 s6.268-14,14-14s14,6.268,14,14S39.732,38,32,38z"
                          ></path>{" "}
                          <path
                            fill="#000000"
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

          <div className=" w-full grid grid-row-1 sm:grid-cols-2 lg:grid-cols-3 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                <span className="relative z-10 jakarta-bold">Quick Links</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </h3>
              <ul className="space-y-3 font-secondary">
                <li>
                  <Link
                    to={'/'}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full  opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={'UniqVsOther'}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full  opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    Uniq vs Other's
                  </Link>
                </li>
                <li>
                  <Link
                    to={'successStory'}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full  opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    Our Success Story
                  </Link>
                </li>
                <li>
                  <Link
                    to={'profiles'}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full  opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    Traniners Profile
                  </Link>
                </li>
                <li>
                  <Link
                   to={'aboutus'}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full  opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                <span className="relative z-10 jakarta-bold">
                  Training Courses
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </h3>
              <ul className="space-y-3 font-secondary">
                <li>
                  <Link
                    to={'courses'}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full  opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    Java Full Stack Development
                  </Link>
                </li>
                <li>
                  <Link
                    to={'pythonCourse'}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full  opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    Python Full Stack Development
                  </Link>
                </li>
                <li>
                  <Link
                    to={'DotnetCourse'}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full  opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    Dotnet Full Stack Development
                  </Link>
                </li>
                <li>
                  <Link
                    to={'DataEngineerCourse'}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full  opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    Data Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    to={'ProductionCourse'}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full  opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    Production Support
                  </Link>
                </li>
                <li>
                  <Link
                   to={'devOps'}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full  opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    DevOps / AWS
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden sm:block">
              <h3 className="text-lg font-semibold mb-6 jakarta-bold">
                Get in Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center animate-pulse">
                      <svg
                        className="w-4 h-4 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-300">Email</p>
                    <a
                      href="mailto:info@uniqtechnologies.co.in?subject=Hello&body=I%20want%20to%20contact%20you"
                      className="text-white hover:text-red-400 transition"
                    >
                      info@uniqtechnologies.co.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center animate-pulse"
                       style={{ animationDelay: "0.2s" }}
                    >
                      <svg
                        className="w-4 h-4 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-300">Phone</p>
                    <a
                      href="tel:+9600114466"
                      className="text-white hover:text-red-400 transition"
                    >
                      +91 96001 14466
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <svg
                        className="w-4 h-4 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 32 32"
                        style={{
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 2
                        }}  

                        version="1.1"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:serif="http://www.serif.com/"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g id="Layer1">
                            {" "}
                            <path d="M16,2c-6.071,0 -11,4.929 -11,11c0,2.778 1.654,6.081 3.699,9.019c2.939,4.224 6.613,7.707 6.613,7.707c0.386,0.365 0.99,0.365 1.376,-0c0,-0 3.674,-3.483 6.613,-7.707c2.045,-2.938 3.699,-6.241 3.699,-9.019c0,-6.071 -4.929,-11 -11,-11Zm0,5.5c-3.036,0 -5.5,2.464 -5.5,5.5c0,3.036 2.464,5.5 5.5,5.5c3.036,-0 5.5,-2.464 5.5,-5.5c0,-3.036 -2.464,-5.5 -5.5,-5.5Zm0,2c1.932,0 3.5,1.568 3.5,3.5c0,1.932 -1.568,3.5 -3.5,3.5c-1.932,-0 -3.5,-1.568 -3.5,-3.5c0,-1.932 1.568,-3.5 3.5,-3.5Z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-300">Main Branch Address</p>
                    <a
                      href="https://maps.app.goo.gl/thg9aZn4NXCxH1MR6?g_st=aw"
                      target="_blank"
                      className="text-white hover:text-red-400 transition"
                    >
                      #1 Shifa Arcade, 3rd Floor, Bharathi Nagar 1st Street, N
                      Usman Rd, T. Nagar, Chennai, TamilNadu 600 017.
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                <span className="relative z-10 jakarta-bold">Placements</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </h3>
              <ul className="space-y-3 font-secondary">
                <li>
                  <Link
                    to={'studentReview'}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full  opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    Student Review
                  </Link>
                </li>
                <li>
                  <Link
                    to={'InterviewQuestions'}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full  opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    Interview Questions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-5 sm:mb-0">
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                <span className="relative z-10 jakarta-bold">Facilities</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </h3>
              <ul className="space-y-3 font-secondary">
                <li>
                  <Link
                    to={'classRooms'}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full  opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    Class Rooms
                  </Link>
                </li>
                <li>
                  <Link
                    to={'Hostel'}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full  opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    Hotel Facilities
                  </Link>
                </li>
              </ul>
            </div>

            <div className="block sm:hidden">
              <h3 className="text-lg font-semibold mb-6 jakarta-bold">
                Get in Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center animate-pulse">
                      <svg
                        className="w-4 h-4 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-300">Email</p>
                    <a
                      href="mailto:info@uniqtechnologies.co.in?subject=Hello&body=I%20want%20to%20contact%20you"
                      className="text-white hover:text-red-400 transition"
                    >
                      info@uniqtechnologies.co.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <svg
                        className="w-4 h-4 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-300">Phone</p>
                    <a
                      href="tel:+9600114466"
                      className="text-white hover:text-red-400 transition"
                    >
                      +91 96001 14466
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <svg
                        className="w-4 h-4 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 32 32"
                        style={{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 2
                        }}

                        version="1.1"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:serif="http://www.serif.com/"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g id="Layer1">
                            {" "}
                            <path d="M16,2c-6.071,0 -11,4.929 -11,11c0,2.778 1.654,6.081 3.699,9.019c2.939,4.224 6.613,7.707 6.613,7.707c0.386,0.365 0.99,0.365 1.376,-0c0,-0 3.674,-3.483 6.613,-7.707c2.045,-2.938 3.699,-6.241 3.699,-9.019c0,-6.071 -4.929,-11 -11,-11Zm0,5.5c-3.036,0 -5.5,2.464 -5.5,5.5c0,3.036 2.464,5.5 5.5,5.5c3.036,-0 5.5,-2.464 5.5,-5.5c0,-3.036 -2.464,-5.5 -5.5,-5.5Zm0,2c1.932,0 3.5,1.568 3.5,3.5c0,1.932 -1.568,3.5 -3.5,3.5c-1.932,-0 -3.5,-1.568 -3.5,-3.5c0,-1.932 1.568,-3.5 3.5,-3.5Z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-300">Main Branch Address</p>
                    <a
                      href="https://maps.app.goo.gl/thg9aZn4NXCxH1MR6?g_st=aw"
                      target="_blank"
                      className="text-white hover:text-red-400 transition"
                    >
                      #1 Shifa Arcade, 3rd Floor, Bharathi Nagar 1st Street, N
                      Usman Rd, T. Nagar, Chennai, TamilNadu 600 017.
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; <span id="year" className="text-red-400"></span> UniqJobs.
            All rights reserved.
          </p>
          <div className="flex smflex-row flex-col space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>

      <div className="orb absolute w-64 h-64 rounded-full bg-gradient-to-r from-red-500/10 to-red-500/10 filter blur-3xl pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
