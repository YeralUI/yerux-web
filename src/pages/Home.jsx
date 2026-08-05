import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Proyectos from "../components/Proyectos";
import Proces from "../components/Proces.jsx";
/*import Experience from "../components/Experience";*/
import AboutSection from "../components/AboutSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton.jsx";


export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Proyectos />

       <Proces/> 

      {/* <Experience /> */}

      <AboutSection />

      <Contact />

      <WhatsAppFloatingButton />

      <Footer />
    </>
  );
}
