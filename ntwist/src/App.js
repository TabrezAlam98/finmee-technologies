import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Optimize from "./components/Optimize";
import Sustain from './components/Sustain'
import Mineral from './components/Mineral'
import OilAndGas from './components/OilAndGas'
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Optimize />
      <Sustain/>
      <Mineral/>
      <OilAndGas/>
      <Footer/>
    </div>
  );
}

export default App;
