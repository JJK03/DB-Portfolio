import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'; // Import the new CSS file

function Hero() {
  return (
    <div className="container py-5">
      <div className="card-glass p-4 p-md-5">
        <div className="row align-items-center">
          
          {/* Left Column: Text Content */}
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 hero-title-gradient mb-2">장진규</h1>
            <p className="text-primary fw-semibold mb-4">Junior Developer</p>
            <p className="fs-5 mb-4">
              인하공업전문대에서 컴퓨터시스템공학을 공부하고 있으며, <br></br>
              React와 Node.js를 활용해 직관적이고 사용자 친화적인  
              웹 서비스를 구현합니다.
            </p>
            <div>
              <Link className="btn btn-primary btn-lg mt-3 px-4 py-2 me-3" to="/projects">
                프로젝트 보러가기
              </Link>
              <Link className="btn btn-outline-light btn-lg mt-3 px-4 py-2" to="/contact">
                연락하기
              </Link>
            </div>
          </div>

          {/* Right Column: Animated Shapes */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="shape-container">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
              <div className="shape shape-4"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
