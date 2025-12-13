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
          <h2 className="display-4 hero-title-gradient mb-2">장진규 | Portfolio</h2>
          <h3 className="text-primary fw-semibold mb-4">Junior Developer</h3>
          <p className="fs-4 mb-2">
            직접 만들고, 직접 부딪히며 성장하는 학생 개발자
          </p>
          <h3 className="fs-6 mb-4">기초를 놓치지 않는 개발을 지향합니다</h3>
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


