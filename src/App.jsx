import Nav from "./components/nav"
import Home from "./components/home"
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import AboutSection from "./Components/AboutSection";


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
     </div>
    </>
  );
} ;
  


export default App
