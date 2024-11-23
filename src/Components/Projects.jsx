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
    <div id="Projects" className="min-h-screen px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-8 text-4xl font-bold text-gray-800">My Projects</h2>
        <p className="mb-12 text-gray-600">
        Here are some of my featured projects, including practical applications, professional portfolios, and e-commerce platforms.
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
              <div className="p-6 md:w-1/2">
                <h3 className="mb-2 text-2xl font-semibold text-gray-800">{project.title}</h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-48 px-2 py-3 font-medium text-blue-600 border rounded-md hover:text-blue-800"
                >
                  View Project
                </a>
              </div>
              <div className="p-6 md:w-1/2">
                {/* Menampilkan gambar proyek */}
                <img
                  src={project.link}
                  alt={project.title}
                  className="object-cover w-full h-48 rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
