export default function AboutMe() {
  return (
    <section className="py-16 px-6 text-center bg-white" id="about">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 relative inline-block">
        About Me
        <span className="block h-1 w-20 bg-blue-500 mx-auto mt-1 rounded"></span>
      </h2>

      {/* Description */}
      <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
        <p>
          I’m a motivated <span className="font-semibold">MERN Stack Developer</span> with hands-on
          experience in building responsive and scalable web applications using{" "}
          <span className="font-semibold">React.js, Node.js, Express, and MongoDB</span>.
        </p>

        <p>
          Currently, I’m interning at{" "}
          <span className="font-semibold">Gravitas Technosoft</span>, where I contribute to live project
          development and performance optimization. My work includes improving query performance, creating
          optimized index commands, and handling staging vs. production database comparisons.
        </p>

        <p>
          I’ve also developed full-stack projects like an{" "}
          <span className="font-semibold">E-commerce Bookstore</span> and an{" "}
          <span className="font-semibold">Order Management System</span>, implementing features such as user
          authentication, role-based access, API integrations, dashboards, and responsive UI design.
        </p>

        <p>
          With a strong foundation in <span className="font-semibold">JavaScript, REST APIs, and
          component-based architecture</span>, I enjoy solving real-world problems with clean code and modern
          frameworks. I’m eager to learn, grow, and contribute to impactful projects in{" "}
          <span className="font-semibold">full-stack development</span>.
        </p>
      </div>
    </section>
  );
}
