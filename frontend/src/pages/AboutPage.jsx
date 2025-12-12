import React from "react";

function AboutPage() {
  const skills = {
    프론트엔드: ["Java", "React", "HTML", "CSS"],
    백엔드: ["Node.js"],
    데이터베이스: ["MySQL"],
  };

  const experiences = [
    { title: "Linker", date: "Java 프로그래밍 응용", githubLink: "https://github.com/JJK03/LINKer" },
    { title: "News_NaverAPI", date: "서버구축관리", githubLink: "https://github.com/JJK03/News_NaverAPI" },
    { title: "LiarGame", date: "TCP/IP", githubLink: "https://github.com/JJK03/LiarGame" },
  ];

  return (
    <div className="container py-5">
      {/* --- Profile Section --- */}
      <div className="card-glass p-4 p-md-5 mb-5">
        <div className="row g-4 align-items-center">
          <div className="col-lg-4 text-center">
            <img
              src="https://via.placeholder.com/250"
              className="img-fluid rounded-circle"
              alt="Profile"
              style={{
                maxWidth: "200px",
                border: "3px solid rgba(255, 255, 255, 0.3)",
              }}
            />
          </div>
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold">장진규</h1>
            <p className="lead text-muted">Junior Developer</p>
            <p>
              <a
                href="https://github.com/JJK03"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github 바로가기
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* --- Skills Section --- */}
      <div className="mb-5">
        <h2 className="text-center mb-4">기술 스택</h2>
        <div className="card-glass p-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="mb-3">
              <h5 className="mb-2">{category}</h5>
              <div>
                {items.map((skill) => (
                  <span key={skill} className="badge bg-primary fs-6 me-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Experience Section --- */}
      <div className="mb-5">
        <h2 className="text-center mb-4">경험</h2>
        <div className="row">
          {experiences.map((experience, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card-glass h-100">
                <div className="card-body text-center p-4">
                  <h5 className="card-title">{experience.title}</h5>
                  <p className="card-text text-muted">
                    {experience.date}
                  </p>
                  {experience.githubLink && (
                    <a
                      href={experience.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-primary mt-2"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Education Section --- */}
      <div>
        <h2 className="text-center mb-4">교육</h2>
        <div className="card-glass p-4">
          <div className="text-center">
            <h5 className="mb-1">인하공업전문대학교</h5>
            <p className="text-muted mb-0">컴퓨터시스템공학 (2022 ~ )</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
