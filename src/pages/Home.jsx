import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Proyectos from "../components/Proyectos";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton.jsx";
import AboutSection from "../components/AboutSection.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Proyectos />
      <AboutSection/>
      <Testimonials />
      <Contact />
      <WhatsAppFloatingButton />
      <Footer />
    </>
  );
}
