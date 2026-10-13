import "./team.css";

import photo1 from "../images/photo1.png";
import photo2 from "../images/photo2.png";
import photo3 from "../images/photo3.png";
import photo4 from "../images/photo4.png";
import photo5 from "../images/photo5.png";
import photo6 from "../images/photo6.png";
import linkedin2 from "../images/linkedin2.png";

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO and Founder",
      image: photo1,
      experience:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Director of Operations",
      image: photo2,
      experience:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      image: photo3,
      experience:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      id: 4,
      name: "Emily Johnson",
      role: "PPC Manager",
      image: photo4,
      experience:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    {
      id: 5,
      name: "Brian Williams",
      role: "Social Media Specialist",
      image: photo5,
      experience:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      id: 6,
      name: "Sarah Kim",
      role: "Content Creator",
      image: photo6,
      experience:
        "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    },
  ];

  return (
    <section className="team-section">
      <div className="container">

        <div className="section-heading">
          <h2 className="section-title">Team</h2>

          <p className="section-text">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map(function (member) {
            return (
              <div className="team-card" key={member.id}>

                <div className="team-card-top">

                  <img
                    className="team-member-image"
                    src={member.image}
                    alt={member.name}
                  />

                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>

                  <img
                    className="linkedin-icon"
                    src={linkedin2}
                    alt="LinkedIn"
                  />

                </div>

                <div className="team-divider"></div>

                <p className="team-experience">
                  {member.experience}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Team;