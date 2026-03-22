import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">Hey, I'm <span className="highlight">Tanishq Bandhu Prasad Kalwar</span></h1>
        <h2 className="hero-role">Software Developer | Computer Science Student | DevOps Enthusiast | AI Developer</h2>
        <p className="hero-summary">
          A passionate Computer Science student and Software Developer specializing in Full Stack Development, Data Structures, and Algorithms. I thrive on building efficient, real-world solutions and optimizing scalable systems.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="/tanishq_cvv.pdf" className="btn btn-outline" download="Tanishq_Resume.pdf">Download Resume</a>
          <a href="#contact" className="btn btn-ghost">Contact Me</a>
        </div>
      </motion.div>
      <motion.div 
        className="hero-image"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="image-wrapper glass" style={{ overflow: 'hidden' }}>
          <img 
            src="/profile.jpg" 
            alt="Tanishq Bandhu Prasad Kalwar" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="profile-placeholder" style={{ display: 'none', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <User size={100} color="rgba(59, 130, 246, 0.5)" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
