import React, { useState } from "react";
import portfolioFrame from "../assets/images/portfolioFrame.png"

const projects = [
  {
    title: "My Portfolio",
    description: "My personal developer portfolio showcasing my projects and skills.",
    image: portfolioFrame,
    tech: ["React", "Tailwind", "JavaScript"],
    linkLive: "https://niffer-portfolio.netlify.app/",
    linkCode: "https://github.com/Niffer-dev/myportfolio",
    details: "A single-page portfolio built with React and Tailwind showcasing projects, skills, and contact info."
  },
  {
    title: "DevDose",
    description: "A motivational quote generator app to inspire daily positivity.",
    image: "/images/devdose.png",
    tech: ["React", "Tailwind", "API"],
    linkLive: "https://devdose-live-link.com",
    linkCode: "https://github.com/jenniferngini/devdose",
    details: "Fetches quotes from an API and displays them with dynamic UI and animations."
  },
  {
    title: "Tip Calculator",
    description: "Calculates tips in dollars based on bill amount and percentage.",
    image: "/images/tip-calculator.png",
    tech: ["HTML", "CSS", "JavaScript"],
    linkLive: "https://tipcalculator-live-link.com",
    linkCode: "https://github.com/jenniferngini/tip-calculator",
    details: "Responsive tip calculator app with percentage options and live calculation in dollars."
  },
  {
    title: "Age Calculator",
    description: "Calculates your age based on date of birth input.",
    image: "/images/age-calculator.png",
    tech: ["HTML", "CSS", "JavaScript"],
    linkLive: "https://agecalculator-live-link.com",
    linkCode: "https://github.com/jenniferngini/age-calculator",
    details: "Simple and user-friendly age calculator with live results and error handling."
  },
];


const Projects = () => {
  const [modalProject, setModalProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
            onClick={() => setModalProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.linkLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  View Live
                </a>
                <a
                  href={project.linkCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
              onClick={() => setModalProject(null)}
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">{modalProject.title}</h3>
            <p className="mb-4">{modalProject.details}</p>
            <div className="flex gap-3">
              <a
                href={modalProject.linkLive}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                View Live
              </a>
              <a
                href={modalProject.linkCode}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;