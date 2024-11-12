const projectsData = [
  {
    id: 1,
    title: "Weather App",
    description: "A weather forecasting app built with React and Tailwind CSS.",
    link: "https://www.jagoanhosting.com/blog/wp-content/uploads/2023/06/website-portfolio-luky-ui-ux.png",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio website to showcase my projects and skills.",
    link: "https://www.jagoanhosting.com/blog/wp-content/uploads/2023/06/image-17.png",
  },
  {
    id: 3,
    title: "E-commerce Store",
    description: "An e-commerce store with shopping cart and payment integration.",
    link: "https://www.jagoanhosting.com/blog/wp-content/uploads/2023/06/website-portfolio-Studio-Feixen-www.studiofeixen.ch_.png",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-16 px-4" style={{ backgroundColor: "rgb(254, 245, 239)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">My Projects</h2>
        <p className="text-gray-600 mb-12">
        Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Kartu Proyek dengan Posisi Silang */}
        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2 p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Project
                </a>
              </div>
              <div className="md:w-1/2 p-6">
                {/* Placeholder untuk gambar proyek, bisa diganti dengan gambar proyek asli */}
                <div className="w-full h-48 bg-gray-300 rounded-lg shadow-md"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
