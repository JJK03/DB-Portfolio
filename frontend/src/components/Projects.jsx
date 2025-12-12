import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: '프로젝트 1',
      description: '이것은 첫 번째 프로젝트에 대한 설명입니다. React와 Node.js를 사용하여 개발되었습니다.',
      imageUrl: 'https://via.placeholder.com/400x250',
      link: '#'
    },
    {
      id: 2,
      title: '프로젝트 2',
      description: '두 번째 프로젝트는 사용자 관리 시스템으로, Express와 MongoDB를 사용했습니다.',
      imageUrl: 'https://via.placeholder.com/400x250',
      link: '#'
    },
    {
      id: 3,
      title: '프로젝트 3',
      description: '세 번째 프로젝트는 모바일 반응형 웹사이트로, Bootstrap과 Vanilla JS로 구현되었습니다.',
      imageUrl: 'https://via.placeholder.com/400x250',
      link: '#'
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">나의 프로젝트</h2>
      <div className="row">
        {projects.map(project => (
          <div className="col-md-4 mb-4" key={project.id}>
            <div className="card-glass h-100">
              <img 
                src={project.imageUrl} 
                className="card-img-top p-3" 
                alt={project.title} 
                style={{ borderRadius: '25px' }}
              />
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary mt-auto">자세히 보기</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
