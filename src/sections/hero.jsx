import "./hero.css";
import img1 from "../images/img1.png";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">

        <div className="hero-content">

          <h1 className="section-title">
            Navigating the digital landscape for success
          </h1>

          <p className="section-text">
            Our digital marketing agency helps businesses grow and succeed online through a range of services
            including SEO, PPC, social media marketing, and content creation.
          </p>

          <button className="btn">
            Book a consultation
          </button>

        </div>

        <div className="hero-image">
          <img src={img1} />
        </div>

      </div>
    </section>
  );
}

export default Hero;