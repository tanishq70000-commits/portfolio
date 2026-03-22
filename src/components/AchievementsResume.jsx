import { motion } from 'framer-motion';
import { FileText, Eye, Download } from 'lucide-react';

const AchievementsResume = () => {
  return (
    <section id="achievements" className="achievements section-padding">
      <div className="flex-container">
        <motion.div 
          className="achievement-content glass"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title-sm">Achievements & Hackathons</h2>
          <ul className="timeline">
            <li>
              <div className="timeline-date">Feb 2024</div>
              <h4>Industrial Hackathon Participant</h4>
              <p>Developed "Law Gate", an interactive web-based game educating children about their fundamental rights using HTML, CSS, JS.</p>
            </li>
            <li>
              <div className="timeline-date">Continuous</div>
              <h4>Competitive Programming</h4>
              <p>150+ Problems Solved Across Platforms like LeetCode, HackerRank, and GeeksforGeeks.</p>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          id="resume" 
          className="resume-content glass"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title-sm">My Resume</h2>
          <div className="resume-preview-box">
            <FileText className="display-icon" size={64} />
            <p>View my complete resume to learn more about my education, experience, and academic journey.</p>
            <div className="resume-actions">
              <a href="/tanishq_cvv.pdf" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                <Eye size={18} /> Preview
              </a>
              <a href="/tanishq_cvv.pdf" className="btn btn-outline" download="Tanishq_Resume.pdf" style={{ textDecoration: 'none' }}>
                <Download size={18} /> Download
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsResume;
