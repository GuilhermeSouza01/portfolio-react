import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
