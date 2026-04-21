import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Leading innovator in cooling technology solutions</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#catalog">Catalog</a></li>
            <li><a href="#bestsellers">Bestsellers</a></li>
            <li><a href="#reviews">Reviews</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#warranty">Warranty</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#twitter">𝕏</a>
            <a href="#facebook">f</a>
            <a href="#instagram">📷</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 TechCool. All rights reserved. | 24/7 Customer Support</p>
      </div>
    </footer>
  )
}
