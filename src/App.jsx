import Nav from "./components/nav"
import Home from "./components/home"
import Projects from "./components/projects";
import Contact from "./components/contact";
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
