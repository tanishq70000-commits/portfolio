import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Tanishq Bandhu Prasad Kalwar. All rights reserved.</p>
        <p className="footer-note" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
          Designed & Built with <Heart size={14} color="#ef4444" fill="#ef4444" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
