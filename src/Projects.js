
const Projects = () => {
    return ( 
        <div className="project container" id="project">
        <div className="project-header">
          <h2 className="secondary-title">Projects</h2>
        </div>
      
        <div className="grid project-grid">
          <div className="grid-item project-item">
            <i className="fa-solid fa-house"></i>
            <h3>Refugee Connect</h3>
            <p className="description">
              Refugee Connect is a compassionate and innovative application designed to bridge 
              the gap between refugees and safe, welcoming housing options.
            </p>
          </div>
          <div className="grid-item project-item">
            <i className="fa-solid fa-person-breastfeeding"></i>
            <h3>Sos Mamas</h3>
            <p className="description">
              Sos Mamas connects expectant mothers with doctors for expert prenatal care and 
              early preeclampsia prediction.
            </p>
          </div>
          <div className="grid-item project-item">
            <i className="fa-solid fa-ice-cream"></i>
            <h3>Food Me</h3>
            <p className="description">
              Food Me is an intuitive and user-friendly food ordering platform, offering a diverse 
              array of culinary delights from local eateries.
            </p>
          </div>
        </div>
      </div>
      
     );
     
}
 
export default Projects;


