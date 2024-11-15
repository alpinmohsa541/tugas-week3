const Contact = () => {
    return (
      <div className="flex flex-col md:flex-row justify-center items-start p-8 bg-gray-100">
        {/* Left Side - Text and Social Links */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Let's work together</h2>
          <p className="text-gray-600 mb-6 w-32 h-32 flex items-center justify-center text-center">
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fas fa-comments fa-lg"></i> {/* Placeholder for chat icon */}
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-facebook fa-lg"></i> {/* Placeholder for Facebook icon */}
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-dribbble fa-lg"></i> {/* Placeholder for Dribbble icon */}
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-instagram fa-lg"></i> {/* Placeholder for Instagram icon */}
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-behance fa-lg"></i> {/* Placeholder for Behance icon */}
            </a>
          </div>
        </div>
  
        {/* Right Side - Contact Form */}
        <div className="md:w-1/2">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="p-4 border border-gray-300 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 border border-gray-300 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <textarea
              placeholder="Type your message here"
              className="p-4 border border-gray-300 bg-gray-200 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-gray-400"
            ></textarea>
            <button
                type="submit"
                className="py-3 px-8 bg-white text-black font-bold rounded-md border border-gray-300 hover:bg-gray-100"
                >
                Submit
            </button>

          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;
  