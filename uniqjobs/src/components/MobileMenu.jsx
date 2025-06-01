import { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({isNavOpen}) => {
  const [mainMenu, setMainMenu] = useState(true);
  const [subMenu, setSubMenu] = useState("");

  const showMainMenu = () => {
    setMainMenu(true);
    setSubMenu("");
  };

  const handleSubMenu = (name) => {
    setMainMenu(false);
    setSubMenu(name);
  };

  return (
    <div
      id="navDrop"
      className={`md:hidden fixed right-0 inset-y-0 w-full overflow-y-auto bgcm px-7 py-6 sm:w-[28rem]  z-[999] ${isNavOpen ? 'block' : 'hidden'}`}
    >
      <div className="mt-20">
        {mainMenu && (
          <div className="space-y-2">
            <Link to={'/'} >
              <div className="text-black hover:text-red-600 hover:pl-2 transition-all duration-300 flex items-center py-2">
                Home
              </div>
            </Link>

            <button onClick={() => handleSubMenu("training")} className="w-full text-left">
              <div className="flex justify-between items-center text-black hover:text-red-600 hover:pl-2 py-2 transition-all duration-300">
                <span>Training Courses</span>
                <ArrowIcon />
              </div>
            </button>

            <button onClick={() => handleSubMenu("placements")} className="w-full text-left">
              <div className="flex justify-between items-center text-black hover:text-red-600 hover:pl-2 py-2 transition-all duration-300">
                <span>Placements</span>
                <ArrowIcon />
              </div>
            </button>

            <Link to='UniqVsOther'>
              <div className="text-black hover:text-red-600 hover:pl-2 transition-all duration-300 flex items-center py-2">
                Uniq vs Others
              </div>
            </Link>

            <button onClick={() => handleSubMenu("facilities")} className="w-full text-left">
              <div className="flex justify-between items-center text-black hover:text-red-600 py-2 hover:pl-2 transition-all duration-300">
                <span>Facilities</span>
                <ArrowIcon />
              </div>
            </button>

            <Link to='successStory'>
              <div className="text-black hover:text-red-600 hover:pl-2 transition-all duration-300 flex items-center py-2">
                Our Success Story
              </div>
            </Link>
            <Link to='Profiles'>
              <div className="text-black hover:text-red-600 hover:pl-2 transition-all duration-300 flex items-center py-2">
                Trainer's profile
              </div>
            </Link>
            <Link to='aboutus'>
              <div className="text-black hover:text-red-600 hover:pl-2 transition-all duration-300 flex items-center py-2">
                Contact
              </div>
            </Link>
          </div>
        )}

        {subMenu === "training" && (
          <SubMenu onBack={showMainMenu} items={[
            { to: "Courses", label: "Java Full Stack Development" },
            { to: "pythonCourse", label: "Python Full Stack Development" },
            { to: "DotnetCourse", label: "Dotnet Full Stack Development" },
            { to: "DataEngineerCourse", label: "Data Engineering" },
            { to: "ProductionCourse", label: "Production Support" },
            { to: "devOps", label: "DevOps/AWS" },
          ]} />
        )}

        {subMenu === "placements" && (
          <SubMenu onBack={showMainMenu} items={[
            { to: "studentReview", label: "Students Review" },
            { to: "InterviewQuestions", label: "Interview Questions" },
            { to: "faqQuestions", label: "FAQ" },
          ]} />
        )}

        {subMenu === "facilities" && (
          <SubMenu onBack={showMainMenu} items={[
            { to: "classRooms", label: "Classrooms" },
            { to: "Hostel", label: "Hostel Facilities" },
          ]} />
        )}
      </div>
    </div>
  );
};

const SubMenu = ({ onBack, items }) => (
  <div className="space-y-2">
    <button onClick={onBack} className="flex items-center space-x-2 text-white py-2">
      <BackArrowIcon />
    </button>
    {items.map((item, index) => (
      <Link
        key={index}
        to={item.to}
        className="block text-black hover:text-red-600 hover:pl-2 transition-all duration-300 py-2"
      >
        {item.label}
      </Link>
    ))}
  </div>
);

const ArrowIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.2 16.5L14.3 17.5L19.5 12.5L14.3 7.5L13.2 8.5L17 12L13.2 16.5Z" />
    <path d="M5 11.25H19V12.75H5V11.25Z" />
  </svg>
);

const BackArrowIcon = () => (
  <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9.66 8.53L8.6 7.47 4.47 11.59 5.53 12.65 9.66 8.53ZM4.49 12.67L8.62 16.55 9.64 15.45 5.51 11.58 4.49 12.67ZM5 12.87H15.37V11.37H5V12.87Z" />
  </svg>
);

export default MobileMenu;
