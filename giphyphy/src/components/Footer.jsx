import React from "react";
import { FaGithub, FaLinkedin, FaTwitter,FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        
        <div onClick={()=>window.location.reload}>
        <h2 className=" cursor-pointer text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          GIFFERY
        </h2>
        </div>

   
        <p className="text-sm text-black mt-3 sm:mt-0">
          © {new Date().getFullYear()} GIFFERY — All rights reserved.
        </p>

      
        <div className="flex gap-5 mt-3 sm:mt-0">
          <a
            href="https://github.com/Prathm2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://x.com/PMalunjkar86260"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            <FaTwitter size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/prathmesh-malunjkar-a47a29259/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
          <a
          href="https://prathmeshm.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe size={20} />
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
