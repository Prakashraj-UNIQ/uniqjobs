import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";
import ContactFormPopup from "../components/ContactFormPop";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ContactFormPopup />
      <WhatsAppButton />
    </div>
  );
};

export default MainLayout;
