import React from "react";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function AboutPage() {
  const skills = {
    프론트엔드: [
      { name: "Java", icon: <FaJava color="#007396" /> },
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    ],
    백엔드: [{ name: "Node.js", icon: <FaNodeJs color="#339933" /> }],
    데이터베이스: [{ name: "MySQL", icon: <SiMysql color="#4479A1" /> }],
  };

  const experiences = [
    {
      title: "Linker",
      date: "Java 프로그래밍 응용 ('25-01)",
      githubLink: "https://github.com/JJK03/LINKer",
    },
    {
      title: "News_NaverAPI",
      date: "서버구축관리 ('25-02)",
      githubLink: "https://github.com/JJK03/News_NaverAPI",
    },
    {
      title: "LiarGame",
      date: "TCP/IP ('25-02)",
      githubLink: "https://github.com/JJK03/LiarGame",
    },
  ];

  return (
    <div className="container py-5">
      <div className="card-glass p-4 p-md-5 mb-5">
        <div className="row g-4 align-items-center">
          <div className="col-lg-4 text-center">
            <img
              src="/profile.jpg"
              className="img-fluid rounded-circle"
              alt="Profile"
              style={{
                maxWidth: "200px",
                border: "3px solid rgba(255, 255, 255, 0.3)",
              }}
            />
          </div>
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold">Jang Jin Kyu</h1>
            <p className="lead text-muted">Junior Developer</p>
            <p>Email: wkdwlsrb09@gmail.com</p>
            <p>
              <a
                href="https://github.com/JJK03"
                target="_blank"
                rel="noopener noreferrer"
              >
                JJK03 Github 바로가기
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h2 className="text-center mb-4">Skills</h2>
        <div className="row">
          {Object.entries(skills).map(([category, items]) => (
            <div className="col-md-4 mb-4" key={category}>
              <div className="card-glass h-100">
                <div className="card-body text-center p-4">
                  <h5 className="card-title">{category}</h5>
                  <div className="d-flex justify-content-center flex-wrap gap-4 mt-3">
                    {items.map((skill) => (
                      <div key={skill.name} className="skill-icon" title={skill.name}>
                        {skill.icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <h2 className="text-center mb-4">프로젝트</h2>
        <div className="row">
          {experiences.map((experience, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card-glass h-100">
                <div className="card-body text-center p-4">
                  <h5 className="card-title">{experience.title}</h5>
                  <p className="card-text text-muted">{experience.date}</p>
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
      <div>
        <h2 className="text-center mb-4">교육</h2>
        <div className="card-glass p-4">
          <div className="text-center">
            <h5 className="mb-1">인하공업전문대학교</h5>
            <p className="text-muted mb-0">컴퓨터시스템공학 ('22 ~ )</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
