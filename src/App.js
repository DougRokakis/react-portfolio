import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './stylesheets/home.css'
import './stylesheets/header-footer.css'
import './stylesheets/carousel.css'
import './stylesheets/projects-courses.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration:1000
});
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/projects' exact element={<Projects />}/>
          <Route path='/courses' exact element={<Courses />}/>
          <Route path='/contact' exact element={<Contact />}/>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
