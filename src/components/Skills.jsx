import { motion } from 'framer-motion';
import { Code2, MonitorPlay, Cloud, Database } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="skills section-padding">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>
      <div className="skills-grid">
        <motion.div 
          className="skill-card glass"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Code2 className="skill-icon" size={40} />
          <h3>Programming Languages</h3>
          <ul className="skill-list">
            <li>C++</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>C</li>
            <li>Java (DSA)</li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="skill-card glass"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MonitorPlay className="skill-icon" size={40} />
          <h3>Web Development</h3>
          <ul className="skill-list">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>HTML5 & CSS3</li>
            <li>Bootstrap</li>
          </ul>
        </motion.div>

        <motion.div 
          className="skill-card glass"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Cloud className="skill-icon" size={40} />
          <h3>Cloud / DevOps</h3>
          <ul className="skill-list">
            <li>AWS</li>
            <li>Apache CloudStack</li>
            <li>OCI DevOps</li>
            <li>Git & GitHub</li>
          </ul>
        </motion.div>

        <motion.div 
          className="skill-card glass"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Database className="skill-icon" size={40} />
          <h3>Databases & Tools</h3>
          <ul className="skill-list">
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>VS Code</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
