import React from 'react';

function AboutPage() {
  const skills = {
    "프론트엔드": ["React", "JavaScript", "HTML", "CSS"],
    "백엔드": ["Node.js", "Express.js"],
    "데이터베이스": ["MongoDB", "MySQL"]
  };

  const experiences = ["Linker", "Naver-API", "LiarGame"];

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
              style={{ maxWidth: '200px', border: '3px solid rgba(255, 255, 255, 0.3)' }}
            />
          </div>
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold">장진규</h1>
            <p className="lead text-muted">대학생 개발자</p>
            <p>
              안녕하세요! 저는 대학생 개발자로, Java, Javascript를 주로 다루며 DB workbench는 MySQL를 주로 사용합니다. 이 페이지에서는 저의 경험, 기술, 그리고 열정에 대해 더 자세히 알아볼 수 있습니다.
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
                {items.map(skill => <span key={skill} className="badge bg-primary fs-6 me-2 mb-2">{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Experience Section --- */}
      <div className="mb-5">
        <h2 className="text-center mb-4">경험</h2>
        <div className="row">
          {experiences.map(exp => (
            <div className="col-md-4 mb-4" key={exp}>
              <div className="card-glass h-100">
                <div className="card-body text-center p-4">
                  <h5 className="card-title">{exp}</h5>
                  <p className="card-text text-muted">(프로젝트에 대한 간단한 설명을 이곳에 추가하세요.)</p>
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
