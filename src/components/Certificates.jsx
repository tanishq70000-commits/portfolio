import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certs = [
    { title: "OCI Generative AI Professional", source: "Oracle", date: "Sept 2025", link: "/oracle-gen-ai.pdf" },
    { title: "Social Network", source: "NPTEL", date: "Sept 2025", link: "/social-network-nptel.pdf" },
    { title: "Advanced DSA", source: "SkillStone", date: "July 2025", link: "/advanced-dsa.pdf" },
    { title: "Computational Theory: Language Principle", source: "Infosys Springboard", date: "June 2023", link: "/computational-theory.pdf" }
  ];

  return (
    <section id="certificates" className="certificates section-padding">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Certifications
      </motion.h2>
      <div className="cert-grid">
        {certs.map((cert, index) => (
          <motion.div 
            key={index}
            className="cert-card glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Award className="cert-icon" size={32} />
            <div className="cert-info">
              {cert.link ? (
                <a href={cert.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <h3>{cert.title}</h3>
                  <ExternalLink size={14} color="#3b82f6" />
                </a>
              ) : (
                <h3>{cert.title}</h3>
              )}
              <p>{cert.source} | {cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
