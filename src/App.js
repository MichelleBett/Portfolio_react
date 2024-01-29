

import Navbar from './Navbar';
import Aboutme from './Aboutme';
import Projects from './Projects';
function App() {
  return (
    <div className="App">
      <Projects></Projects>
      <Aboutme></Aboutme>
      <Navbar></Navbar>
   <section className="hero container" id="home">
    <div className="hero-info">
    <h1 className="title">Michelle Bett</h1>
    <p className="hero-description">Web developer</p>
    <a href="#skills" className="btn hero-btn">Skills</a>
  </div>
</section>
    </div>
  );
}

export default App;
