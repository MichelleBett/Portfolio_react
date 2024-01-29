
import './App.css';
import Navbar from './Navbar';
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
    </div>
  );
}

export default App;
