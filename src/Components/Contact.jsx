import { AiFillDiscord } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareDribbble } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareBehance } from "react-icons/fa6";

const Contact = () => {
    return (
      <div id="Contact" className="flex flex-col items-start justify-center p-8 bg-gray-100 md:flex-row " style={{ backgroundColor: "rgb(254, 245, 239)" }} >
        {/* Left Side - Text and Social Links */}
        <div className="mb-8 md:w-1/2 md:mb-0">
          <h2 className="mb-4 text-2xl font-bold">Let`s work together</h2>
          <p className="flex items-center justify-center h-32 mb-6 text-gray-600 w-96">
            Unlock the potential of collaboration and take your ideas to the next level. I`m here to help you achieve your goals. Whether you`re looking for a fresh website, a custom application, or strategic insights to grow your business, let`s create something extraordinary together.
          </p>
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
  
        {/* Right Side - Contact Form */}
        <div className="md:w-1/4 ">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="p-4 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 w-96 focus:ring-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 w-96 focus:ring-gray-400"
            />
            <textarea
              placeholder="Type your message here"
              className="h-32 p-4 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 w-96 focus:ring-gray-400"
            ></textarea>
            <button
                type="submit"
                className="w-48 px-2 py-3 font-bold text-black border rounded-md"
                >
                Submit
            </button>

          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;

  
  