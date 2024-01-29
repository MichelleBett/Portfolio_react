

import Navbar from './Navbar';
import Aboutme from './Aboutme';
import Projects from './Projects';
import Contactme from './Contactme';
import Skills from './Skills';
import FetchData from './FetchData';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
       <section className="hero container" id="home">
    <div className="hero-info">
    <h1 className="title">Michelle Bett</h1>
    <p className="hero-description">Web developer</p>
    <a href="#skills" className="btn hero-btn">Skills</a>
  </div>
</section>
      <Aboutme></Aboutme>
      <Projects></Projects>
      <Skills></Skills>
      <Contactme></Contactme>
      <FetchData></FetchData>

 
    </div>
  );
}

export default App;
