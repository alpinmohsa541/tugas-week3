import Nav from "./components/nav"
import Home from "./components/home"
import Projects from "./components/projects";

const App = () => {
  return (
    <>
     <div style={{ backgroundColor: "rgb(228, 187, 151)" }}>
      <Nav/>
      <Home/>
      <Projects/>
      
     </div>
    </>
  );
} ;
  


export default App
