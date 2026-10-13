import "./contactUs.css";
import img8 from "../images/img8.png";

function ContactUs() {
  return (
    <section className="contact-section">
      <div className="container">

        <div className="section-heading">
          <h2 className="section-title">Contact Us</h2>

          <p className="section-text">
            Connect with Us: Let’s Discuss Your Digital Marketing Needs
          </p>
        </div>

        <div className="contact-box">

          <div className="contact-form">

            <div className="contact-options">
              <label>
                <input type="radio" name="contact-type" defaultChecked />
                Say Hi
              </label>

              <label>
                <input type="radio" name="contact-type" />
                Get a Quote
              </label>
            </div>

            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Name" />
            </div>

            <div className="form-group">
              <label>Email*</label>
              <input type="email" placeholder="Email" />
            </div>

            <div className="form-group">
              <label>Message*</label>
              <textarea placeholder="Message"></textarea>
            </div>

            <button className="btn">
              Send Message
            </button>

          </div>

          <div className="contact-image">
            <img src={img8}/>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactUs