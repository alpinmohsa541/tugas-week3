import Nav from "./components/nav"
import Home from "./components/home"
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import AboutSection from "./Components/AboutSection";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <>
     <div>
     <section id="Nav">
        <Nav/>
     </section>
      <Home/>
      <AboutSection />
      <Projects/>
      <Contact/>
      <Footer/>
     </div>
    </>
  );
} ;
  


export default App
