import { useEffect, useRef } from "react";
import "./logoSlider.css";

import amazon from "../images/amazon.png";
import dribbble from "../images/dribbble.png";
import hubspot from "../images/hubspot.png";
import notion from "../images/notion.png";
import netflix from "../images/netflix.png";
import zoom from "../images/zoom.png";

function LogoSlider() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    let position = 0;

    const slide = () => {
      const firstGroup = track.querySelector(".logo-slider-group");

      const groupWidth = firstGroup.offsetWidth;
      const gap = 80;

      position -= groupWidth / 6 + gap;

      track.style.transform = `translateX(${position}px)`;

      if (Math.abs(position) >= groupWidth + gap) {
        setTimeout(() => {
          position += groupWidth + gap;

          track.style.transition = "none";
          track.style.transform = `translateX(${position}px)`;

          setTimeout(() => {
            track.style.transition = "transform 0.6s ease";
          }, 50);
        }, 600);
      }
    };

    const interval = setInterval(slide, 1000);

    return () => clearInterval(interval);
  }, []);

  const logos = [
    {
      image: amazon,
      name: "Amazon",
      link: "https://www.amazon.com/",
    },
    {
      image: dribbble,
      name: "Dribbble",
      link: "https://dribbble.com/",
    },
    {
      image: hubspot,
      name: "HubSpot",
      link: "https://www.hubspot.com/",
    },
    {
      image: notion,
      name: "Notion",
      link: "https://www.notion.com/",
    },
    {
      image: netflix,
      name: "Netflix",
      link: "https://www.netflix.com/",
    },
    {
      image: zoom,
      name: "Zoom",
      link: "https://www.zoom.com/",
    },
  ];

  return (
    <section className="logo-slider">
      <div className="container">
        <div className="logo-slider-wrapper">
          <div className="logo-slider-track" ref={trackRef}>
            
            <div className="logo-slider-group">
              {logos.map((logo) => (
                <a
                  key={logo.name}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo.image} alt={logo.name} />
                </a>
              ))}
            </div>

            <div className="logo-slider-group" aria-hidden="true">
              {logos.map((logo) => (
                <a
                  key={`duplicate-${logo.name}`}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo.image} alt={logo.name} />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoSlider;