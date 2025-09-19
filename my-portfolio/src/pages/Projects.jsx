// src/components/Projects.jsx
import ProjectOne from "./ordermangement.png";
import ProjectTwo from "./book.png";

export default function Projects() {
  const projects = [
    {
      title: "Order Management System",
      tech: "React.js, Node.js, Express.js, MongoDB, JWT, Tailwind CSS, Ant Design,Postman,JWT",
      description: "Developed a full-stack Order Management System(MERN STACK) with modules for customers, suppliers,items,sales and purchase orders, featuring interactive dashboards, API integration,and responsive UI.",
      github: "https://github.com/shreyapalat2023/ORDER_MANAGEMENT_MERN",
      image: ProjectOne
    },
    {
      title: "Ecoomerce Bookstore Application",
      tech: "React.js, Node.js, Express.js,BootStrap, MongoDB,Postman,JWT",
      description:
        "Built a full-stack book-selling app with user authentication, admin authorization, category/product CRUD with image uploads, and product search with pagination.Used MongoDB atals with schema designing and indexing. API tesign via Postman",
      github: "https://github.com/shreyapalat2023/UDEMY_MERN",
      image: ProjectTwo,
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50" id="projects">
  {/* Heading */}
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold">
      Projects
    </h2>
    <span className="block h-1 w-20 bg-blue-500 mx-auto mt-2 rounded"></span>
  </div>

  {/* Projects List */}
  <div className="space-y-12 max-w-6xl mx-auto">
    {projects.map((project, index) => (
      <div
        key={index}
        className={`flex flex-col md:flex-row items-center bg-white shadow rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] ${
          index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-90 object-cover"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 w-full p-6 text-left">
          <h3 className="text-2xl font-semibold text-blue-600">
            {project.title}
          </h3>
          <p className="text-gray-500 italic mt-1">{project.tech}</p>
          <p className="text-gray-700 mt-3">{project.description}</p>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 mt-4 inline-block font-medium hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    ))}
  </div>
</section>
  );
}
