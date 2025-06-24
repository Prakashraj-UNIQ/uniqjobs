
import React, { useState,  } from 'react';
import { Link } from 'react-router-dom';
const cards = [
  {
    title: 'Offline Placement',
    subtitle: 'Classroom Training',
    description:
      'Get hands-on training with expert instructors in a classroom setting. Designed for freshers who thrive in a traditional learning environment with real-time guidance.',
    points: [
      'Attend in-person classes with expert trainers',
      'Work on real-time projects and assignments',
      'Receive continuous mentorship and performance reviews',
      'Get placement support through mock interviews and job drives',
    ],
    svg :(
          <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="url(#textGradient)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="url(#textGradient)" d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"></path> <path fill="#231F20" d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> <path fill="url(#textGradient)" d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"></path> </g> </g></svg>
    )
  },
  {
    title: 'Online Placement',
    subtitle: 'Virtual Training',
    description:
      'Learn from anywhere with live virtual classes. Ideal for candidates looking for flexibility without compromising on placement-focused training.',
    points: [
      'Join live online sessions from anywhere',
      'Access recorded videos and study materials',
      'Get personalized doubt clearing and progress tracking',
      'Participate in virtual placement drives',
    ],
    svg :(
      <svg className="pr-5"  viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="url(#textGradient)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" d="M11.8 18.93a.817.817 0 0 1 .07-.128.712.712 0 0 0-.09.2.182.182 0 0 1 .02-.07zm.21-.316c.01-.01.02-.01.03-.02a.643.643 0 0 0-.08.09.178.178 0 0 1 .05-.07z"></path> <path fill="url(#textGradient)" d="M11.8 18.93a.817.817 0 0 1 .07-.128.712.712 0 0 0-.09.2.182.182 0 0 1 .02-.07zm.24-.336a.643.643 0 0 0-.08.09.178.178 0 0 1 .05-.07c.01-.014.02-.014.03-.02zM17 6.954a1 1 0 0 1-.616-.21 11.4 11.4 0 0 0-14.71-.05A1 1 0 0 1 .262 6.63a.988.988 0 0 1 .064-1.4c.074-.075 8.122-7.196 17.29-.05a.988.988 0 0 1 .17 1.394 1 1 0 0 1-.786.38zM11.642 12.674a1.026 1.026 0 0 1-1.41-.12A1.933 1.933 0 0 0 9 11.912a1.936 1.936 0 0 0-1.23.645 1.026 1.026 0 0 1-1.412.12.982.982 0 0 1-.13-1.388A4.058 4.058 0 0 1 9 9.926a4.063 4.063 0 0 1 2.772 1.36.983.983 0 0 1-.13 1.387z"></path> <path fill="url(#textGradient)0" d="M14.72 9.622a1 1 0 0 1-1.41.03A6.792 6.792 0 0 0 9 7.956a6.792 6.792 0 0 0-4.31 1.7 1 1 0 0 1-1.41-.03.99.99 0 0 1 .02-1.4A8.54 8.54 0 0 1 9 5.964a8.54 8.54 0 0 1 5.7 2.26.99.99 0 0 1 .02 1.398z"></path> <ellipse fill="url(#textGradient)" cx="9" cy="14.882" rx="1" ry=".991"></ellipse> </g></svg>    )
  },
  {
    title: 'Direct Placement',
    subtitle: 'Placement Training',
    description:
      'Already skilled? Skip training and get evaluated for direct job placement. We assess your capabilities and connect you with top hiring companies.',
    points: [
      'Submit your resume and skill portfolio',
      'Appear for an assessment and personal evaluation',
      'Get shortlisted by hiring partners',
      'Attend direct interviews — no training required',
    ],
    svg :(
        <svg  fill="url(#textGradient)"  viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.960938 3C17.01837 3 14.751914 5.677091 15.021484 8.6777344L16.419922 24.193359C16.461792 24.657854 16.766758 24.995357 16.988281 25.380859C16.302966 25.717347 15.741597 26.26705 15.390625 26.939453C13.466251 26.64629 12 25.0099 12 23C12.8114 23 13.569403 22.666455 14.113281 22.113281C14.666455 21.569403 15 20.8114 15 20C15 19.454815 14.852797 18.939375 14.591797 18.494141C14.071576 17.604254 13.099366 17 12 17L10 17C9.1885995 17 8.4305967 17.333545 7.8867188 17.886719C7.333545 18.430597 7 19.1886 7 20C7 21.645455 8.3545455 23 10 23C10 25.974659 12.194084 28.45353 15.042969 28.916016C15.253492 30.641401 16.721299 32 18.5 32L24 32L24 35L23 35 A 1.0001 1.0001 0 0 0 22 36L22 40C20.349187 40 18.675836 40.637071 17.347656 41.677734C16.019477 42.718398 15 44.228458 15 46 A 1.0001 1.0001 0 1 0 17 46C17 45.010542 17.600461 44.02104 18.582031 43.251953C19.563602 42.482867 20.889813 42 22 42L23 42L24 42L24 46 A 1.0001 1.0001 0 1 0 26 46L26 42L27 42L28 42C29.110187 42 30.436398 42.482867 31.417969 43.251953C32.399539 44.02104 33 45.010542 33 46 A 1.0001 1.0001 0 1 0 35 46C35 44.228458 33.980523 42.718398 32.652344 41.677734C31.324164 40.637071 29.650813 40 28 40L28 36 A 1.0001 1.0001 0 0 0 27 35L26 35L26 32L31.5 32C33.278701 32 34.746508 30.641401 34.957031 28.916016C37.805916 28.45353 40 25.974659 40 23C40.8114 23 41.569403 22.666455 42.113281 22.113281C42.666455 21.569403 43 20.8114 43 20C43 18.354545 41.645455 17 40 17L38 17C37.1886 17 36.430597 17.333545 35.886719 17.886719C35.677779 18.087247 35.523164 18.301237 35.412109 18.486328 A 1.0001 1.0001 0 0 0 35.408203 18.494141C35.147197 18.939388 35 19.454815 35 20C35 21.645455 36.354545 23 38 23C38 25.0099 36.533749 26.64629 34.609375 26.939453C34.258403 26.26705 33.697034 25.717347 33.011719 25.380859C33.233164 24.995645 33.540141 24.657603 33.582031 24.193359L34.978516 8.6777344C35.248086 5.677091 32.981629 3 30.039062 3L19.960938 3 z M 19.960938 5L30.039062 5C31.766496 5 33.158758 6.5786902 32.986328 8.4980469L31.589844 24.013672C31.535959 24.610849 31.098206 25 30.613281 25L19.386719 25C18.901794 25 18.464172 24.612852 18.410156 24.013672L17.013672 8.4980469C16.841242 6.5786902 18.233504 5 19.960938 5 z M 10 19L12 19C12.37964 19 12.687058 19.195115 12.867188 19.503906 A 1.0001 1.0001 0 0 0 12.867188 19.505859C12.946187 19.640578 13 19.825185 13 20C13 20.283333 12.893198 20.517925 12.712891 20.693359 A 1.0001 1.0001 0 0 0 12.693359 20.712891C12.517923 20.8932 12.283333 21 12 21L11.167969 21 A 1.0001 1.0001 0 0 0 10.841797 21L10 21C9.4454545 21 9 20.554545 9 20C9 19.716667 9.1068019 19.482075 9.2871094 19.306641 A 1.0001 1.0001 0 0 0 9.3066406 19.287109C9.4820751 19.1068 9.7166667 19 10 19 z M 38 19L40 19C40.554545 19 41 19.445455 41 20C41 20.283333 40.893198 20.517925 40.712891 20.693359 A 1.0001 1.0001 0 0 0 40.693359 20.712891C40.517923 20.8932 40.283333 21 40 21L39.167969 21 A 1.0001 1.0001 0 0 0 38.841797 21L38 21C37.445455 21 37 20.554545 37 20C37 19.825185 37.05381 19.640625 37.132812 19.505859C37.191853 19.409059 37.235977 19.353389 37.267578 19.324219 A 1.0001 1.0001 0 0 0 37.306641 19.287109C37.482078 19.106802 37.716667 19 38 19 z M 18.5 27L19.386719 27L30.613281 27L31.5 27C32.340812 27 33 27.659188 33 28.5C33 29.340812 32.340812 30 31.5 30L25.167969 30 A 1.0001 1.0001 0 0 0 24.841797 30L18.5 30C17.659188 30 17 29.340812 17 28.5C17 27.659188 17.659188 27 18.5 27 z M 24 37L24.832031 37 A 1.0001 1.0001 0 0 0 25.158203 37L26 37L26 40L25.167969 40 A 1.0001 1.0001 0 0 0 24.841797 40L24 40L24 37 z"></path></g></svg>    )
  },
];

const AutoAnimatedCards = () => {
  const defaultIndex = 0;
  const [hoverIndex, setHoverIndex] = useState(null);
  const activeIndex = hoverIndex !== null ? hoverIndex : defaultIndex;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex(prev => (prev + 1) % cards.length);
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <div className="hidden sm:flex justify-center items-center gap-x-6 py-10 px-2 sm:px-10  bg-white">
      {cards.map((card, i) => {
        const isActive = i === activeIndex;
        return (
          <div
          onMouseEnter={() => setHoverIndex(i)}
  onMouseLeave={() => setHoverIndex(null)}
            key={i}
            className={`group relative flex flex-col justify-between transition-all duration-700 ease-in-out  min-w-[280px] h-[480px] p-8 rounded-2xl shadow-xl text-white ${
              isActive ? 'w-[700px] bg-gradient-to-r from-[#0b090a] to-[#ba181b]' : 'w-[280px] bg-white'
            }` }
          >
            <div>
              <span className={`inline-flex justify-center items-center px-3 py-1.5 font-primary  rounded-full text-sm font-semibold mb-4 ${isActive ? 'text-white bg-white/20' : 'text-black bg-black/20'}`}>
                <svg className='w-5 h-5 mr-2' version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="-3.2 -3.2 38.40 38.40" xmlSpace="preserve" fill="#000000" stroke="#000000" strokeWidth="0.00032"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-3.2" y="-3.2" width="38.40" height="38.40" rx="19.2" fill="#ffffff" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> {`.sharpcorners_een{fill:#111918;} .st0{fill:#111918;}`} </style> <path className="sharpcorners_een" d="M16.716,22.964L12.928,31l-1.964-4.598L6,27l4.014-5.784C11.739,22.34,13.792,23,16,23 C16.242,23,16.478,22.979,16.716,22.964z M22.029,21.19c-1.232,0.811-2.635,1.374-4.143,1.637l-1.302,2.763l2.55,5.41l1.964-4.598 L26.062,27L22.029,21.19z M6,12C6,6.477,10.477,2,16,2s10,4.477,10,10c0,5.523-4.477,10-10,10S6,17.523,6,12z M8,12 c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S8,7.582,8,12z M9,12c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S9,15.86,9,12z M12.853,11.294l1.573,1.534l-0.371,2.166L16,13.97l1.945,1.022l-0.371-2.166l1.573-1.534l-2.174-0.316L16,9.007l-0.972,1.97 L12.853,11.294z"></path> </g></svg>
                {card.subtitle}
              </span>
              <h2 className={`text-3xl font-bold font-primary mb-2 ${isActive ? 'text-white' : 'text-black'}`}>{card.title}</h2>
              <p
                className={`transition-all duration-700 ease-in-out text-gray-200 text-base tracking-wide font-secondary font-medium ${
                  isActive ? 'opacity-100 max-h-40 mb-8' : 'opacity-0 max-h-0 overflow-hidden mb-0'
                }`}
              >
                {card.description}
              </p>

              {/* Border animation */}
              {/* <div
                className={`transition-all duration-700 ease-in-out absolute border border-opacity-30 border-white h-35 ${
                  isActive ? 'block' : 'hidden'
                }`}
                style={{ left: '7%' }}
              /> */}

              {/* Bullet Points */}
              <div
                className={`transition-all duration-700 ease-in-out flex flex-col gap-y-3 mb-4 ${
                  isActive ? 'opacity-100 max-h-80' : 'opacity-0 max-h-0 overflow-hidden'
                }`}
              >
                {card.points.map((point, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="flex items-center bg-white/90 font-bold font-secondary shadow-xl w-8 h-8 rounded-full z-1">
                      <h1 className="text-black mx-auto  ">{idx + 1}</h1>
                    </div>
                    <p className="pl-2 font-secondary font-medium text-lg text-white">{point}</p>
                  </div>
                ))}
              </div>
              <div className={`w-38 h-38 absolute right-0 ${isActive? 'hidden':'block'}`}>
                {card.svg}
              </div>
            </div>
            {/* brf */}
            <div className="flex justify-center items-center">
              <span className={` px-5 py-2 brf font-semibold text-lg cursor-pointer rounded-full  ${ isActive? 'bg-white text-[#641220]' : 'bgcc text-white'}`}>
                <Link to={'aboutus'}>Apply now</Link>
              </span>
            </div>
          </div>
        );
      })}
    </div>

    
    <div className="flex flex-col sm:hidden  justify-center items-center gap-x-6 py-10 px-2 sm:px-10 lg:px-20 bg-white">
      {cards.map((card, i) => {
        const isActive = i === activeIndex;
        return (
          <div
            key={i}
            className={`group relative flex flex-col justify-between transition-all duration-700 ease-in-out  min-w-[280px]  p-8 rounded-2xl shadow-lg text-white ${
              isActive ? ' bg-gradient-to-r from-[#0b090a] to-[#ba181b]' : ''
            }`}
          >
            <div>
              <span className={`inline-flex justify-center font-primary items-center px-3 py-1.5  rounded-full text-sm font-semibold mb-4 ${isActive ? 'text-white bg-white/20' : 'text-black bg-black/20'}`}>
                <svg className='w-5 h-5 mr-2' version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="-3.2 -3.2 38.40 38.40" xmlSpace="preserve" fill="#000000" stroke="#000000" strokeWidth="0.00032"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-3.2" y="-3.2" width="38.40" height="38.40" rx="19.2" fill="#ffffff" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> {`.sharpcorners_een{fill:#111918;} .st0{fill:#111918;}`} </style> <path className="sharpcorners_een" d="M16.716,22.964L12.928,31l-1.964-4.598L6,27l4.014-5.784C11.739,22.34,13.792,23,16,23 C16.242,23,16.478,22.979,16.716,22.964z M22.029,21.19c-1.232,0.811-2.635,1.374-4.143,1.637l-1.302,2.763l2.55,5.41l1.964-4.598 L26.062,27L22.029,21.19z M6,12C6,6.477,10.477,2,16,2s10,4.477,10,10c0,5.523-4.477,10-10,10S6,17.523,6,12z M8,12 c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S8,7.582,8,12z M9,12c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S9,15.86,9,12z M12.853,11.294l1.573,1.534l-0.371,2.166L16,13.97l1.945,1.022l-0.371-2.166l1.573-1.534l-2.174-0.316L16,9.007l-0.972,1.97 L12.853,11.294z"></path> </g></svg>
                {card.subtitle}
              </span>
              <h2 className={`text-3xl font-bold font-primary mb-2 ${isActive ? 'text-white' : 'text-black'}`}>{card.title}</h2>
              <p
                className={`transition-all duration-700 ease-in-out text-gray-200 tracking-wide font-secondary font-medium ${
                  isActive ? 'opacity-100 max-h-40 mb-8' : 'opacity-0 max-h-0 overflow-hidden mb-0'
                }`}
              >
                {card.description}
              </p>

              {/* Border animation */}
              {/* <div
                className={`transition-all duration-700 ease-in-out absolute border border-opacity-30 border-white h-35 ${
                  isActive ? 'block' : 'hidden'
                }`}
                style={{ left: '7%' }}
              /> */}

              {/* Bullet Points */}
              <div
                className={`transition-all duration-700 ease-in-out flex flex-col gap-y-3 mb-4 ${
                  isActive ? 'opacity-100 max-h-80' : 'opacity-0 max-h-0 overflow-hidden'
                }`}
              >
                {card.points.map((point, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="flex items-center bg-white/90 font-bold font-primary shadow-xl w-8 h-8 rounded-full z-1">
                      <h1 className="text-black sm:text-sm mx-auto  ">{idx + 1}</h1>
                    </div>
                    <p className="pl-2 font-primary font-medium text-sm text-white">{point}</p>
                  </div>
                ))}
              </div>
              <div className={`w-14 h-14 sm:w-38 sm:h-38 absolute right-0 top-1/2 ${isActive? 'hidden':'block'}`}>
                {card.svg}
              </div>
            </div>
            {/* brf */}
            <div className="flex justify-center items-center">
              <span className={` px-5 py-2 brf font-semibold text-lg cursor-pointer rounded-full  ${ isActive? 'bg-white text-[#641220]' : 'bgcc text-white'}`}>
                Apply now
              </span>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default AutoAnimatedCards;
