// import About from "./components/about";
import Header from "./components/header";
import Hero from "./components/hero";
import Movile from "./components/navigation/movile";
import Servicios from "./components/servicios";
import Skills from "./components/skills";
import Proyect from "./components/proyect";
import Footer from "./components/footer";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Movile />
      {/* <About /> */}
      <Servicios />
      {/* <Skills /> */}
      <Proyect />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
