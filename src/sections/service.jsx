import "./service.css";

import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";

function Service() {
  return (
    <section className="services-section">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">
          <h2 className="section-title">Services</h2>

          <p className="section-text">
            At our digital marketing agency, we offer a range of services
            to help businesses grow and succeed online. These services include:
          </p>
        </div>


        {/* Service Cards */}
        <div className="services-grid">

          {/* Card 1 */}
          <div className="service-card service-card-light">
            <div className="service-card-content">
              <h3>Search Engine Optimization</h3>

              <a href="#">
                <span className="arrow">↗</span>
                Learn more
              </a>
            </div>

            <div className="service-card-img">
              <img src={img2} alt="Search Engine Optimization" />
            </div>
          </div>


          {/* Card 2 */}
          <div className="service-card service-card-green">
            <div className="service-card-content">
              <h3>Pay-per-click advertising</h3>

              <a href="#">
                <span className="arrow">↗</span>
                Learn more
              </a>
            </div>

            <div className="service-card-img">
              <img src={img3} alt="Pay-per-click advertising" />
            </div>
          </div>


          {/* Card 3 */}
          <div className="service-card service-card-dark">
            <div className="service-card-content">
              <h3>Social Media Marketing</h3>

              <a href="#">
                <span className="arrow">↗</span>
                Learn more
              </a>
            </div>

            <div className="service-card-img">
              <img src={img4} alt="Social Media Marketing" />
            </div>
          </div>


          {/* Card 4 */}
          <div className="service-card service-card-light">
            <div className="service-card-content">
              <h3>Email Marketing</h3>

              <a href="#">
                <span className="arrow">↗</span>
                Learn more
              </a>
            </div>

            <div className="service-card-img">
              <img src={img5} alt="Email Marketing" />
            </div>
          </div>


          {/* Card 5 */}
          <div className="service-card service-card-green">
            <div className="service-card-content">
              <h3>Content Creation</h3>

              <a href="#">
                <span className="arrow">↗</span>
                Learn more
              </a>
            </div>

            <div className="service-card-img">
              <img src={img6} alt="Content Creation" />
            </div>
          </div>


          {/* Card 6 */}
          <div className="service-card service-card-dark">
            <div className="service-card-content">
              <h3>Analytics and Tracking</h3>

              <a href="#">
                <span className="arrow">↗</span>
                Learn more
              </a>
            </div>

            <div className="service-card-img">
              <img src={img7} alt="Analytics and Tracking" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Service;