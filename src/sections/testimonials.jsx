import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./testimonials.css";

const sampleText =
  "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.";

const testimonials = [
  { id: 1, text: sampleText, name: "John Smith", role: "Marketing Director at XYZ Corp" },
  { id: 2, text: sampleText, name: "Sarah Johnson", role: "Marketing Manager at ABC Ltd" },
  { id: 3, text: sampleText, name: "Michael Brown", role: "CEO at Brown Industries" },
  { id: 4, text: sampleText, name: "Emily Davis", role: "Founder at Davis Group" },
  { id: 5, text: sampleText, name: "David Wilson", role: "Director at Wilson Solutions" },
];

/* Infinite version: 5 1 2 3 4 5 1  (start at index 1) */
const slides = [
  testimonials[testimonials.length - 1],
  ...testimonials,
  testimonials[0],
];

function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [offset, setOffset] = useState(0);

  const windowRef = useRef(null);
  const cardRefs = useRef([]);

  /* Center the active card by measuring it */
  const updateOffset = () => {
    const card = cardRefs.current[activeSlide];
    const win = windowRef.current;
    if (!card || !win) return;
    setOffset(win.offsetWidth / 2 - (card.offsetLeft + card.offsetWidth / 2));
  };

  useLayoutEffect(() => {
    updateOffset();
  }, [activeSlide]);

  useEffect(() => {
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  });

  /* Autoplay: restarts after every change, so manual clicks reset it */
  useEffect(() => {
    if (!isTransitioning) return;
    const timer = setTimeout(() => {
      setActiveSlide((prev) => Math.min(prev + 1, slides.length - 1));
    }, 3000);
    return () => clearTimeout(timer);
  }, [activeSlide, isTransitioning]);

  /* Silent jump from a clone to the real slide */
  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget || e.propertyName !== "transform") return;

    if (activeSlide === slides.length - 1) {
      setIsTransitioning(false);
      setActiveSlide(1);
    } else if (activeSlide === 0) {
      setIsTransitioning(false);
      setActiveSlide(testimonials.length);
    }
  };

  /* Turn the transition back on after the jump */
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setIsTransitioning(true))
      );
    }
  }, [isTransitioning]);

  const nextSlide = () =>
    setActiveSlide((prev) => (prev >= slides.length - 1 ? prev : prev + 1));

  const previousSlide = () =>
    setActiveSlide((prev) => (prev <= 0 ? prev : prev - 1));

  const goToSlide = (n) => setActiveSlide(n);

  const currentSlide =
    activeSlide === 0
      ? testimonials.length
      : activeSlide === slides.length - 1
      ? 1
      : activeSlide;

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-heading">
          <h2>Testimonials</h2>
          <p>
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn
            More about Our Digital Marketing Services
          </p>
        </div>

        <div className="testimonials-slider">
          <div className="testimonials-window" ref={windowRef}>
            <div
              className="testimonials-track"
              style={{
                transform: `translateX(${offset}px)`,
                transition: isTransitioning ? "transform 0.6s ease" : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((testimonial, index) => (
                <div
                  className={`testimonial-card ${
                    index === activeSlide ? "active" : ""
                  }`}
                  key={`${testimonial.id}-${index}`}
                  ref={(el) => (cardRefs.current[index] = el)}
                >
                  <div className="testimonial-message">
                    <p>"{testimonial.text}"</p>
                  </div>
                  <div className="testimonial-person">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonial-controls">
            <button
              className="testimonial-arrow"
              onClick={previousSlide}
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <div className="testimonial-stars">
              {testimonials.map((t, index) => (
                <button
                  key={t.id}
                  className={currentSlide === index + 1 ? "star active" : "star"}
                  onClick={() => goToSlide(index + 1)}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  ★
                </button>
              ))}
            </div>

            <button
              className="testimonial-arrow"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;