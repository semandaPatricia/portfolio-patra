import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import PopMenu from "./menu/PopMenu";

const Tab = ({ children, position, setPosition }) => {
    const ref = useRef(null);
  
    return (
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref?.current) return;
  
          const { width } = ref.current.getBoundingClientRect();
  
          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
      >
        {children}
      </li>
    );
  };
  
  const Cursor = ({ position }) => {
    return (
      <motion.li
        animate={{
          ...position,
        }}
        className="absolute z-0 h-7 rounded-full bg-black md:h-12"
      />
    );
  };
  

const Navb = () => {

    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
      });

    const navItems = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Pricing", path: "/pricing" },
        { id: 3, name: "Features", path: "/features" },
        { id: 4, name: "Docs", path: "/docs" },
        { id: 5, name: "Blog", path: "/blog" },
      ];
  return (
    <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <img src="/logo2.svg" alt="logo-svg" className="w-12 h-12 mr-10" /> 
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
        <ul
      onMouseLeave={() => {
        setPosition({
          ...position,
          opacity: 0,
        });
      }}
      className="relative mx-auto flex gap-6 text-sm w-fit rounded-full border-2 border-black bg-white p-1"
    >
    {navItems.map((item) => (
      <Tab key={item.id} setPosition={setPosition}>
        <a href={item.path}>{item.name}</a>
      </Tab>
    ))}

      <Cursor position={position} />
    </ul>
    </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="#"
          >
            CV
          </a>

          <div className="hidden sm:flex">
          <PopMenu/>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Navb