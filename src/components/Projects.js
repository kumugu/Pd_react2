import React from "react";
import { motion } from "framer-motion";

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
      link: "https://github.com/kumugu/GBPJ2_GameBox",
    },
    {
      id: 3,
      name: "Project 3",
      description: "Description for project 3",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="h-screen bg-[#4f463c] flex flex-col items-center justify-center p-6"


    >
      <div className="text-center">
        {/* 제목 */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-mono text-[#f5e6d3] mb-6"
        >
          // My Codebase Showcase
        </motion.h2>

        {/* 프로젝트 카드 리스트 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-[#2e2e2e] border border-[#4c4c4c] shadow-lg rounded-md overflow-hidden hover:shadow-xl hover:scale-105 transition transform"
            >
              {/* 카드 내용 */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 font-mono text-[#dcdcdc]"
              >
                <h3 className="text-xl font-bold text-[#569CD6] mb-2">
                  {project.name}
                </h3>
                <p className="text-[#6A9955]">// {project.description}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
