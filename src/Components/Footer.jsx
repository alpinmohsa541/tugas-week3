import { AiFillDiscord } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareDribbble } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareBehance } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gray-800">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        {/* Logo atau Nama */}
        <div className="text-lg font-bold">
          <a href="Home" className="hover:text-gray-300">
            Alpin Apriliansyah Mohsa
          </a>
        </div>

        {/* Navigasi Footer */}
        <ul className="flex flex-wrap justify-center mt-4 space-x-6 md:mt-0">
          <li>
            <a href="About" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="Projects" className="hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="Contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Media Sosial */}
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
            <AiFillDiscord /> {/* Placeholder for chat icon */}
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
            <FaFacebookSquare /> {/* Placeholder for Facebook icon */}
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
            <FaSquareDribbble /> {/* Placeholder for Dribbble icon */}
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
            <FaSquareInstagram /> {/* Placeholder for Instagram icon */}
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
            <FaSquareBehance /> {/* Placeholder for Behance icon */}
            </a>
          </div>
        </div>

      {/* Copyright */}
      <div className="mt-6 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} Alpin Apriliansyah Mohsa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
