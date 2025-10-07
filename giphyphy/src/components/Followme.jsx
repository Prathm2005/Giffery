import React from 'react'
import { FaXTwitter, FaGithub, FaGlobe } from "react-icons/fa6"

const Followme = () => {
  return (
    <div className="faded-text pt-2">
      <span>Follow me on:</span>
      <div className="flex gap-4 pt-3">
       
        <a
          href="https://x.com/PMalunjkar86260"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={20} />
        </a>

       
        <a
          href="https://github.com/Prathm2005"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} />
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
  )
}

export default Followme
