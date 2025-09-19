import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Avatar from "./avatar.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse w-full md:flex-row items-center justify-between mx-auto px-6 pt-28 pb-16 h-[730px] bg-[#fdf6e3]"
    >
      {/* Left Section */}
      <div className="text-left space-y-5 pb-16 pt-16 m-20">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-500">
            Shreya Palat
          </span>
        </h1>
        <p className="text-gray-700 text-lg">MERN Stack Developer</p>

        {/* Resume Button */}
        <a
          href="./SHREYA_PALAT_RESUME.pdf"
          download
          className="inline-block bg-[#fdf6e3] text-black px-4 py-2 rounded-md shadow-md border border-gray-300 
          transition-all duration-300 hover:bg-[#e8e0c7] hover:shadow-lg hover:scale-105 active:scale-95"
        >
          📄 Download Resume
        </a>

        {/* Social Links */}
        <div className="flex space-x-3 pt-4">
          <a
            href="mailto:palatshreya@gmail.com"
            className="border px-4 py-2 rounded-md flex items-center space-x-2 shadow-sm 
            transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-md active:scale-95"
          >
            <FaEnvelope className="text-red-500" />
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/contactshreyapalat"
            target="_blank"
            rel="noreferrer"
            className="border px-4 py-2 rounded-md flex items-center space-x-2 shadow-sm 
            transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-md active:scale-95"
          >
            <FaLinkedin className="text-[#0A66C2]" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/shreyapalat2023"
            target="_blank"
            rel="noreferrer"
            className="border px-4 py-2 rounded-md flex items-center space-x-2 shadow-sm 
            transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-md active:scale-95"
          >
            <FaGithub className="text-gray-700" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="mb-10 md:mb-0 p-30 m-20">
        <img
          src={Avatar}
          alt="Profile"
          className="w-60 h-60 rounded-full border-4 border-white shadow-lg object-cover 
          transition-transform duration-500 hover:scale-110 hover:shadow-2xl"
        />
      </div>
    </section>
  );
}
