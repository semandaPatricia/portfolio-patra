
import React, { useState, useEffect, useRef } from 'react';
import  './popmenu.css'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Draggable } from "gsap/Draggable";
//import { InertiaPlugin } from '@gsap/inertia';
import { computePosition, flip } from 'https://cdn.skypack.dev/@floating-ui/dom'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(Draggable);

const PopMenu = () => {
  const [theme, setTheme] = useState('system'); // Initial theme state

  const trigger = useRef(null);
  const popper = useRef(null);
  const themeSelector = useRef(null);

  useEffect(() => {
    // Update data-theme on state change
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const triggerEl = trigger.current;
    const popperEl = popper.current;

    // Update position logic (similar to vanilla code)
    const update = () => {
      if (!("anchorName" in document.documentElement.style)) {
        computePosition(triggerEl, popperEl, {
          placement: 'bottom-end',
          middleware: [flip()],
        }).then(({ x, y }) => {
          document.documentElement.style.setProperty('--x', x);
          document.documentElement.style.setProperty('--y', y);
        });
      }
    };

     // Event listeners (similar to vanilla code)
     popperEl.addEventListener('toggle', update);
     Draggable.create(triggerEl, {
       // ... configuration options from vanilla code
       onDrag() { update(); },
       // ... other event handlers from vanilla code
     });

     return () => {
      // Cleanup on unmount
      popperEl.removeEventListener('toggle', update);
    };
  }, [trigger, popper]);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };


  return (
    <div>
    <button popovertarget="dropdown" id="trigger"   ref={trigger}>
    <img
      src="https://pbs.twimg.com/media/GMjyD7eXwAAKrNx?format=jpg&name=4096x4096"
      width="48"
      alt="Avatar"
    />
    <span className="sr-only">Open user menu</span>
  </button>
  <div popover="auto" id="dropdown" anchor="trigger"  ref={popper}>
    <ul>
      <li className="details">
        <span>Pcodes</span>
        <a
          href="mailto:config@jhey.dev"
          target="_blank"
          rel="noreferrer noopener"
          >pcodes@la.dev</a
        >
      </li>
      <li>
        <a className="links" href="https://x.com/feketeRitta" rel="noopener noreferrer" target="_blank">
          Links
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
      <hr />
      </li>
      <li className="options">
        <label for="scheme">Color scheme</label>
        <select id="scheme" ref={themeSelector} onChange={handleThemeChange}>
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <label for="backdrop">Backdrop</label>
        <label for="backdrop" className="switch">
          <input
            className="sr-only"
            type="checkbox"
            role="switch"
            id="backdrop"
          />
        </label>
      </li>
      <hr />
      <li>
        <a
          className="sponsor button invert"
          href="https://github.com/semandaPatricia"
          rel="noreferrer noopener"
          target="_blank"
          >Sponsor
        </a>
      </li>
      <li>
        <a
          className="follow button"
          href="https://x.com/feketeRitta"
          rel="noreferrer noopener"
          target="_blank"
        >
          Follow Me
        </a>
      </li>
    </ul>
  </div>
  </div>
  )
}

export default PopMenu;