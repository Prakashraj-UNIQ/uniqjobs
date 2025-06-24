import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainlayout from './layouts/MainLayout';  
import Home from './pages/Home';  
import ContactUs from './pages/ContactUs';
import './styles/index.css'
import Courses from './pages/Courses';
import StudentReview from './pages/StudentReview';
import Interview from './pages/Interview'
import Versus from './pages/Versus';
import Hostel from './pages/Hostel';
import ClassRoom from './pages/ClassRoom';
import Profile from './pages/Profile';
import ProductionC from './pages/ProductionC'
import PythonC from './pages/PythonC'
import DotnetC from './pages/DotnetC'
import DataEngineer from './pages/DataEngineer';
import SuccessStory from './pages/SuccessStory'
import DevopsC from './pages/DevopsC';
import Question from './pages/Question';
import ScrollToTop from './components/ScrolltoTop';

const App = () => {
  return (
    <BrowserRouter basename="/uniqjobs">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Mainlayout />}> 
          <Route index element={<Home />} /> 
          <Route path="aboutus" element={<ContactUs/>} />
          <Route path="Courses" element={<Courses/>} />
          <Route path="studentReview" element={<StudentReview/>} />
          <Route path="InterviewQuestions" element={<Interview/>} />
          <Route path="UniqVsOther" element={<Versus/>} />
          <Route path="Hostel" element={<Hostel/>} />
          <Route path="classRooms" element={<ClassRoom/>} />
          <Route path="Profiles" element={<Profile/>} />
          <Route path="pythonCourse" element={<PythonC/>} />
          <Route path="DotnetCourse" element={<DotnetC/>} />
          <Route path="ProductionCourse" element={<ProductionC/>} />
          <Route path="DataEngineerCourse" element={<DataEngineer/>} />
          <Route path="successStory" element={<SuccessStory/>} />
          <Route path="devOps" element={<DevopsC/>} />
          <Route path="faqQuestions" element={<Question/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
