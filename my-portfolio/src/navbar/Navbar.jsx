export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">SP</div>

        {/* Menu */}
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="text-blue-600 font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
          </li>
          <li>
            <a
              href="../pages/SHREYA_PALAT_RESUME.pdf"
              download
              className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
