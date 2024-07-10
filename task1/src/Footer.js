import react from "react";

function Footers() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <ul className="social-media">
            <li>
              <a href="#facebook">Facebook</a>
            </li>
            <li>
              <a href="#twitter">Twitter</a>
            </li>
            <li>
              <a href="#instagram">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footers;
