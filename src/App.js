import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from "./components/Footer";
import Home from './components/links/Home';
import About from './components/links/About';
import Contact from './components/links/Contact';
import Projects from './components/links/Projects';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
          <Routes>
            <Route path='/about' element={<About/>} />
          </Routes>
          <Routes>
            <Route path='/contact' element={<Contact/>} />
          </Routes>
          <Routes>
            <Route path='/projects' element={<Projects/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
