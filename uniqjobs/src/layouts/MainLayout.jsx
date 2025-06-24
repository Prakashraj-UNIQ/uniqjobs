import Header from "../components/Header2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar2";
import { Outlet } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";
import ContactFormPopup from "../components/ContactFormPop";
import CtaBanner from "../components/CtaBanner";
import CircleArrowButton from "../components/CircleArrowButton";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <CtaBanner/>
      <Footer />
      <ContactFormPopup />
      <WhatsAppButton />
  
        <CircleArrowButton />
    
    </div>
  );
};

export default MainLayout;
