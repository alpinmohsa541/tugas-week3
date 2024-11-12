import Nav from "./components/nav"
import Home from "./components/home"
import Projects from "./components/projects";
import Wave from "./components/wave";

const App = () => {
  return (
    <>
     <div style={{ backgroundColor: "rgb(228, 187, 151)" }}>
     <section id="Nav">
        <Nav/>
        <Wave/>
     </section>
      <Home/>
      <Projects/>
      
     </div>
    </>
  );
} ;
  


export default App
