import "./caseStudies.css";

function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      description:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      id: 2,
      description:
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      id: 3,
      description:
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ];

  return (
    <section className="case-studies-section">
      <div className="container">
      
        <div className="section-heading">
          <h2 className="section-title">Case Studies</h2>

          <p className="section-text">
            Explore Real-Life Examples of Our Proven Digital Marketing
            Success through Our Case Studies
          </p>
        </div>

        
        <div className="case-studies-panel">
          {caseStudies.map((study) => (
            <div className="case-study-card" key={study.id}>
              <p>{study.description}</p>

              <a href="#" className="case-study-link">
                <span>Learn more</span>
                <span className="case-study-arrow">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;