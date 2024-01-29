
const Navbar  = () => {
    return ( 
        <nav className="nav">
  <a href="/" className="logo">Michelle</a>

  <div className="nav-links">
    <a href="#home" className="nav-item nav-item-active">Home</a>
    <a href="#about" className="nav-item">About</a>
    <a href="#projects" className="nav-item">Projects</a>
    <a href="#skills" className="nav-item">Skills</a>
    <a href="#contact" className="nav-item">Contact</a>
  </div>

  <div className="toggler">
    <span className="line"></span>
    <span className="line"></span>
    <span className="line"></span>
  </div>
</nav>
     );
}
 
export default Navbar;