import { useState,useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(prev => !prev);
  };

   useEffect(() => {
    setIsNavOpen(false);
  }, [location.pathname]); 
  
  return (
    <div className="flex w-full items-center justify-between border-b border-gray-900 px-6 py-4 lg:px-24 z-1000 bg-black">
      <div className="text-2xl   text-white z-1005 font-primary font-bold"><Link to={'/'}>Uniq<span className="text-primary-600">Jobs</span></Link></div>
      <div className="flex items-center justify-between gap-5 ">
        {/* Berger Menu */}
        <div className="relative block xl:hidden z-1005">
          <div id="toggle-button" className={`icon nav-icon-2 ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
              <span></span>
              <span></span>
              <span></span>
          </div>
        </div>
        <p className="hidden xl:block text-white text-center text-xl font-primary font-medium tracking-lg ">Empowering Careers <span className="text-primary-600 font-medium">Since 2007</span></p>
        <div className="hidden lg:block border-gray-800 border-l pl-4">
          <ul className="flex space-x-5 text-black">
            <li><a href="https://www.facebook.com/share/1H6HomtGnP/" target="_blank" className="hover:text-primary-600  transform">
                <svg className="w-9 h-9 fill-white hover:fill-blue-600 transition duration-300 ease-in-out "
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#DFDFD6"
                    strokeWidth="0.384">
                    <path
                      d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z">
                    </path>
                  </g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z">
                    </path>
                  </g>
                </svg>
              </a></li>
            <li><a href="https://www.instagram.com/uniqtechs?igsh=MXM2dDRnYW16cncyNQ==" target="_blank">
                <svg className="w-9 h-9 p-1 bg-white rounded-full fill-black hover:bg-pink-600 transition duration-300 ease-in-out"  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path><path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path></g></svg>
              </a></li>
            <li><a href="https://youtube.com/@uniqtechnologiesofficial?si=TjCFfum3corJj1K_" target="_blank">
                <svg className="w-9 h-9 fill-white hover:fill-red-600 transition duration-300 ease-in-out" height="200px"
                  width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <polygon points="78.9,450.3 162.7,401.1 78.9,351.9 "></polygon>
                      <path
                        d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,446.8L241,446.8 c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1 V446.8z">
                      </path>
                    </g>
                  </g>
                </svg>
              </a></li>
            <li><a href="https://twitter.com/Uniqtechs?t=Uq2VphiMgcDiTzDgQRuYQg&s=08" target="_blank">
              <svg className="w-9 h-9 p-2 bg-white rounded-full fill-black hover:bg-sky-600 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32">
                <path d="M 4.0175781 4 L 13.091797 17.609375 L 4.3359375 28 L 6.9511719 28 L 14.246094 19.34375 L 20.017578 28 L 20.552734 28 L 28.015625 28 L 18.712891 14.042969 L 27.175781 4 L 24.560547 4 L 17.558594 12.310547 L 12.017578 4 L 4.0175781 4 z M 7.7558594 6 L 10.947266 6 L 24.279297 26 L 21.087891 26 L 7.7558594 6 z"></path>
                </svg>
       
              </a></li>
            <li><a href="https://t.me/uniqtechnologies" target="_blank">
                <svg className="w-9 h-9 fill-white hover:fill-sky-400 transition duration-300 ease-in-out" viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zM23.613 11.119l-2.544 11.988c-0.188 0.85-0.694 1.056-1.4 0.656l-3.875-2.856-1.869 1.8c-0.206 0.206-0.381 0.381-0.781 0.381l0.275-3.944 7.181-6.488c0.313-0.275-0.069-0.431-0.482-0.156l-8.875 5.587-3.825-1.194c-0.831-0.262-0.85-0.831 0.175-1.231l14.944-5.763c0.694-0.25 1.3 0.169 1.075 1.219z">
                    </path>
                  </g>
                </svg>
              </a></li>
            <li><a href="https://maps.app.goo.gl/thg9aZn4NXCxH1MR6?g_st=aw" target="_blank">
              <svg className="w-9 h-9 p-2 bg-white rounded-full fill-black hover:bg-amber-400 transition duration-300 ease-in-out" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#000000" d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M32,38c-7.732,0-14-6.268-14-14 s6.268-14,14-14s14,6.268,14,14S39.732,38,32,38z"></path> <path fill="#000000" d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34 c-5.523,0-10-4.478-10-10s4.477-10,10-10s10,4.478,10,10S37.523,34,32,34z"></path> </g> </g></svg>
              </a></li>
          </ul>
        </div>
      </div>
      <MobileMenu isNavOpen={isNavOpen}/>
    </div>
  );
};

export default Header;
