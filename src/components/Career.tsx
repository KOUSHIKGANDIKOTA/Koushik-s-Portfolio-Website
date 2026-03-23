import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Handling Intern</h4>
                <h5>LOGEsoft GmbH</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed four data visualisation modules for LOGEfuelES Software, reducing data loading times by 20% and accelerating combustion simulation analysis cycles for end users.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master's in
                  <br />Artificial Intelligence</h4>
                <h5>BTU Cottbus-Senftenberg</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              M.Sc Coursework:
              <br />AI, Deep Learning, NLP, Computer Vision, AI Ethics, MLOps.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI-Web Engineering Intern</h4>
                <h5>Varcons Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed full-stack application with modular backend architecture and LLM integration, enabling scalable AI/ML feature enhancements.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor's in
                  <br />Artificial Intelligence & Machine Learning</h4>
                <h5>Visvesvaraya Technological University</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              B.E Coursework:
              <br />Artificial Intelligence, Machine Learning, DBMS, Data Structures, Software Engineering. Awarded Best Paper at ACCRT 2024.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
