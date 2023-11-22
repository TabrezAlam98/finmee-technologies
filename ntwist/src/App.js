import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Optimize from "./components/Optimize";
import Sustain from './components/Sustain'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Optimize />
      <Sustain/>
    </div>
  );
}

export default App;
