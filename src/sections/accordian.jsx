import { useState } from "react";
import "./accordian.css";

function WorkingProcess() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
      number: "03",
      title: "Implementation",
      description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
      number: "05",
      title: "Reporting and Communication",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
      number: "06",
      title: "Continual Improvement",
      description:
        "Digital marketing is constantly changing. We continue analyzing results and improving the strategy to support your long-term business goals.",
    },
  ];

  function handleStep(number) {
    if (activeStep === number) {
      setActiveStep(null);
    } else {
      setActiveStep(number);
    }
  }

  return (
    <section className="working-process-section">
      <div className="container">

        <div className="section-heading">
          <h2 className="section-title">Our Working Process</h2>

          <p className="section-text">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        <div className="process-list">
          {steps.map(function (step) {
            return (
              <div
                className={`process-card ${
                  activeStep === Number(step.number) ? "active" : ""
                }`}
                key={step.number}
              >

                <div
                  className="process-header"
                  onClick={function () {
                    handleStep(Number(step.number));
                  }}
                >

                  <div className="process-title">
                    <span className="process-number">
                      {step.number}
                    </span>

                    <h3>{step.title}</h3>
                  </div>

                  <button className="process-toggle">
                    {activeStep === Number(step.number) ? "−" : "+"}
                  </button>

                </div>

                {activeStep === Number(step.number) && (
                  <div className="process-content">
                    <p>{step.description}</p>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WorkingProcess;