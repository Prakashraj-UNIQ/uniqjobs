import React from 'react'
import { useNavigate } from 'react-router-dom';

const CourseCard = ({courseTitle, CourseSalary, courseDescription, icon, courseRoute}) => {

  const navigate = useNavigate();

   const handleClick = () => {
    navigate(`/${courseRoute}`); // navigates to a dynamic route like /courses/1
  };
  return (
    // bg-primary-600 bg-[linear-gradient(to_right,_#0b090a,_#ba181b)]
    <div className="overflow-hidden rounded-xl bg-white transition-all duration-300 border-1 border-gray-400 hover:shadow-xl h-full">
          <div className="relative group flex p-6 opacity-100 transition-opacity duration-300">
            <div className="w-full">
              <h3 className="text-xl text-gray-800  font-primary font-bold mb-1  bg-gradient-to-r from-[#0b090a] to-[#ba181b] bg-clip-text text-transparent">{courseTitle}</h3>
              <div className="text-zinc-600  text-base">Avg Salary : <span className="text-zinc-200 font-bold"></span>{CourseSalary}</div>
              <div className="sm:opacity-0 group-hover:opacity-100 transition-all group-hover:delay-300 duration-300 ease-in">
                <p className="mt-4 text-zinc-800  font-secondary font-medium">"{courseDescription}"</p>
              </div>
              <button onClick={handleClick}
                className="cursor-pointer text-white font-secondary font-medium bg-[linear-gradient(to_right,_#0b090a,_#ba181b)] hover:bg-gray-300 rounded border-2  mt-4 py-1 px-2 transition-all duration-300 ease-in-out rounded">
                <a  className="inline-flex items-center transition-colors">
                  View Course Details
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </button>
            </div>
            <div
              className="absolute top-8 right-5 scale-55 sm:scale-100 group-hover:scale-55 transition-all duration-500 ease-in-out -translate-y-12 translate-x-10 sm:-translate-y-0 sm:translate-x-0 group-hover:-translate-y-12 group-hover:translate-x-10">
              {icon}  
            </div>
          </div>
        </div>
  )
}

export default CourseCard
