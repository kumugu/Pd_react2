import React from "react";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Algovis",
      description: "Algorithm Visualizer",
      link: "https://algovis-app-397c15caed8e.herokuapp.com/",
    },
    {
      id: 2,
      name: "GameBox",
      description: "국비 프로젝트 - JSP",
      link: "https://github.com/kumugu/GBPJ2_GameBox"
    },
    {
      id: 3,
      name: "Project 3",
      description: "Description for project 3",
      link: "#", // 링크가 없다면 빈 값 또는 "#" 사용
    },
  ];

  return (
    <section
      id="projects"
      className="h-screen bg-gray-100 flex flex-col items-center justify-center p-6"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project) => (
            <a
              key={project.id}
              href={project.link} // 프로젝트 링크 추가
              target="_blank" // 새 탭에서 열기
              rel="noopener noreferrer" // 보안 관련 속성 추가
              className="bg-white p-6 shadow-lg rounded hover:shadow-xl transition block"
            >
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
