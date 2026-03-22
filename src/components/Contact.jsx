import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Check, Loader2 } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact section-padding">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>
      <div className="contact-container">
        <motion.div 
          className="contact-info glass"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Contact Information</h3>
          <p>Feel free to reach out for collaborations, opportunities, or just to say hi!</p>
          <ul className="contact-list">
            <li>
              <Mail size={20} />
              <a href="mailto:tanishq70000@gmail.com">tanishq70000@gmail.com</a>
            </li>
            <li>
              <Phone size={20} />
              <a href="tel:+919319078966">+91 9319078966</a>
            </li>
            <li>
              <MapPin size={20} />
              <span>Punjab / Delhi, India</span>
            </li>
          </ul>
          <div className="social-links">
            <a href="https://github.com/tanishqT" target="_blank" rel="noreferrer" className="social-icon">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/tanishq-bandhu-835a7b298/" target="_blank" rel="noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
        
        <motion.form 
          className="contact-form glass"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="form-group">
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button 
            type="submit" 
            className="btn btn-primary w-100" 
            disabled={status !== 'idle'}
            style={{ backgroundColor: status === 'success' ? '#10b981' : '' }}
          >
            {status === 'idle' && <><Send size={18} /> Send Message</>}
            {status === 'sending' && <><Loader2 size={18} className="spin" /> Sending...</>}
            {status === 'success' && <><Check size={18} /> Message Sent!</>}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
