import "./cta.css";

import img8 from "../images/img8.png";

function CTA() {
  return (
    <section className="cta-section">
      <div className="container">

        <div className="cta-box">

          <div className="cta-content">
            <h2>Let’s make things happen</h2>

            <p>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>

            <button className="btn">
              Get your free proposal
            </button>
          </div>

          <div className="cta-image">
            <img
              src={img8}
              alt="Let's make things happen"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;