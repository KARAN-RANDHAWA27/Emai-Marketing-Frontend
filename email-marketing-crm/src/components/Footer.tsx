import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa"; // Social media icons

const Footer = () => {
  return (
    <footer
      className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800"
      style={{ height: "54px" }}
    >
      {" "}
      {/* Fixed height */}
      {/* Left Section: Copyright Information */}
      <div className="text-sm text-gray-700 dark:text-gray-300">
        © 2024 Your Company. All rights reserved.
      </div>
      {/* Center Section: Navigation Links */}
      <div className="flex space-x-4">
        <a
          href="/about"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          About Us
        </a>
        <a
          href="/contact"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          Contact
        </a>
        <a
          href="/terms"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          Terms of Service
        </a>
        <a
          href="/privacy"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          Privacy Policy
        </a>
      </div>
      {/* Right Section: Social Media Links */}
      <div className="flex space-x-4">
        <a
          href="https://twitter.com"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          <FaTwitter />
        </a>
        <a
          href="https://facebook.com"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          <FaFacebook />
        </a>
        <a
          href="https://linkedin.com"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
