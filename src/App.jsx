import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Collaborationn from "./components/Collaboration.jsx";
import Services from "./components/Services.jsx";
import Benefits from "./components/Benefits.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Pricing from "./components/Pricing.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Footer from "./components/Footer.jsx";



const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero/>
        <Benefits/>
        <Collaborationn/>
        <Services/>
        <Pricing/>
        <Roadmap/>
        <Footer/>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
