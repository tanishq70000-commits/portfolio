import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Splitwise Clone",
      subtitle: "Expense Sharing Web App",
      date: "Dec 2024",
      desc: "Built a full-stack expense sharing application that allows users to add, split, and track expenses in real time. Implemented authentication, REST APIs, and dynamic balance calculation with a responsive UI, demonstrating strong full-stack development skills.",
      tech: ["React.js", "Node.js", "Express.js", "REST APIs", "Authentication"],
      github: "https://github.com/Akhand0ps/splitwise"
    },
    {
      title: "Smart Parking System",
      subtitle: "Real-Time Parking Manager",
      date: "June 2025",
      desc: "Developed a Python-Django based parking system using Min Heap & Hash Maps for automated slot allocation, digital billing, and live dashboards. Designed for scalability in multi-floor facilities.",
      tech: ["Python", "Django", "DSA", "HTML/CSS/JS"],
      github: "https://github.com/tanishq70000-commits/smart-parking"
    },
    {
      title: "SoleCraft Server",
      subtitle: "Backend API Project",
      date: "Feb 2025",
      desc: "Developed a backend server for SoleCraft using Node.js and REST APIs to handle user requests, data management, and server-side logic, demonstrating strong skills in backend development and API design.",
      tech: ["Node.js", "Express.js", "REST APIs", "Backend"],
      github: "https://github.com/tanishq70000-commits/solecraft-server",
      live: "https://solecraft-ten.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card glass"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="project-header">
              <div className="project-links" style={{ display: 'flex', gap: '1rem' }}>
                <a href={project.github} target="_blank" rel="noreferrer" title="GitHub Source">
                  <Github size={24} />
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" title="Live Project">
                    <ExternalLink size={24} />
                  </a>
                )}
              </div>
              <span>{project.date}</span>
            </div>
            <a href={project.github} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3 
                className="project-title" 
                style={{ transition: 'color 0.3s', cursor: 'pointer' }} 
                onMouseOver={(e) => e.target.style.color = '#3b82f6'} 
                onMouseOut={(e) => e.target.style.color = 'inherit'}
              >
                {project.title}
              </h3>
            </a>
            {project.subtitle && <h4 className="project-subtitle">{project.subtitle}</h4>}
            <p className="project-desc">{project.desc}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
