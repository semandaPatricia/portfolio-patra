import React from 'react'
import './rotatingword.css'

const WORDS = [
    'Productivity',
    'Efficiency',
    'Passion',
    'Creativity',
  ]

const RotatingWord = () => {
    
  
  return (
    
     <div class="wrapper sm:text ">
     <p>I'm Patricia,a  </p>
     <div className="words">
         <span>Developer</span>
         <span>Creative</span>
         <span>Fullstack</span>
         
     </div>
     <p> ready </p>
 </div>
  )
}

export default RotatingWord


