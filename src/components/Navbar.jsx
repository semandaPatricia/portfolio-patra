import React from 'react';
import { useState } from 'react';
import SlideTab from './SlideTab';
import { CiMenuBurger } from "react-icons/ci";
import PopMenu from './menu/PopMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="  ">
              
         <SlideTab />
        
      

      
    </div>
  );
};

export default Navbar;
