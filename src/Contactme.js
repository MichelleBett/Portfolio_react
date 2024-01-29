
const Contactme = () => {
    return ( 
        <section className="container contact" id="contact">
  <div className="contact-info">
    <h2 className="secondary-title">Contact</h2>
    <div className="info-container">
      <div className="contact-info-item">
        <div className="contact-info-icon">
          <i className="fa-solid fa-location-dot"></i>
        </div>
        <div className="contact-info-data">
          <h3>Address</h3>
          <p>Nairobi</p>
        </div>
      </div>
      <div className="contact-info-item">
        <div className="contact-info-icon">
          <i className="fa-solid fa-envelope"></i>
        </div>
        <div className="contact-info-data">
          <h3>Email</h3>
          <p>michelle.bett@strathmore.edu</p>
        </div>
      </div>
      <div className="contact-info-item">
        <div className="contact-info-icon">
          <i className="fa-solid fa-phone-volume"></i>
        </div>
        <div className="contact-info-data">
          <h3>Phone</h3>
          <p>+254 704 177 832</p>
        </div>
      </div>
    </div>
  </div>
  <div className="contact-form">
    <form>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <textarea
        name="message"
        cols="30"
        rows="10"
        placeholder="Message"
      ></textarea>
      <button className="btn submit-btn">Send Message</button>
    </form>
  </div>
</section>

     );
}
 
export default Contactme;