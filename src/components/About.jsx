import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <div className="about-container">
        <motion.div 
          className="about-text glass"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>Hello! I'm Tanishq, currently pursuing my Bachelor of Technology in Computer Science and Engineering at Lovely Professional University. I hold a strong academic foundation with a CGPA of 7.74 and a deep passion for coding and problem-solving.</p>
          <p>Throughout my academic journey, I have completed intensive training in Data Structures and Algorithms focusing on both theoretical concepts and practical applications. I've gained hands-on experience in optimizing algorithms and strengthened my programming proficiency across C++, Java, and Python through structured exercises on LeetCode and Geeks for Geeks.</p>
          <p>From developing interactive real-time applications using AI and WebSockets to managing robust backends with Node.js and Django, I am always seeking new challenges that push my technical boundaries.</p>
          <div className="about-stats">
            <div className="stat-box">
              <h3>150+</h3>
              <p>DSA Problems Solved</p>
            </div>
            <div className="stat-box">
              <h3>4+</h3>
              <p>Major Projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
