
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
