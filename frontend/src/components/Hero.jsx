import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import Particles from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";

function Hero() {
  const particlesInit = useCallback(async (engine) => {
    // This loads the tsparticles package bundle, it's a must to have this line
    await loadLinksPreset(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: "transparent",
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
      },
      size: {
        value: 1,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.7,
          },
        },
      },
    },
  };

  return (
    <div className="container py-5">
      <div className="card-glass p-4 p-md-5" style={{ position: 'relative', overflow: 'hidden' }}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
        />
        <div className="text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="display-4 hero-title-gradient mb-2">Jang Jin Kyu</h2>
          <p className="text-primary fw-semibold mb-4">Junior Developer</p>
          <p className="fs-5 mb-4">
            인하공업전문대에서 웹 개발을 공부하고 있으며,  
            React와 Node.js를 활용해 직관적이고 사용자 친화적인  
            웹 서비스를 구현합니다.
          </p>
          <div>
            <Link className="btn btn-primary btn-lg mt-3 px-4 py-2 me-3" to="/about">
              프로젝트 보러가기
            </Link>
            <Link className="btn btn-outline-light btn-lg mt-3 px-4 py-2" to="/contact">
              연락하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;


