import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
