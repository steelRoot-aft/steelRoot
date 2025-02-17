import headerStyle from './header.module.css';

import logoImg from '../assets/Logo.svg';
import { useEffect, useState } from 'react';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('lock')
    } else {
      document.body.classList.remove('lock');
    }
  }, [isOpen])

  return (
    <header className={headerStyle.container}>
      <div className={headerStyle.body}>
        <a href="https://www.fiverr.com/s/m53jjez" className={headerStyle.logo}>
          <img src={logoImg} alt="Logo" />
        </a>
        <div
          className={`${headerStyle.burger} ${isOpen ? headerStyle.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav
          className={`${headerStyle.menu} ${isOpen ? headerStyle.open : ''}`}
        >
          <ul className={headerStyle.list}>
            <li>
              <a href="#" className={headerStyle.link}>
                About Me
              </a>
            </li>
            <li>
              <a href="#" className={headerStyle.link}>
                Skills
              </a>
            </li>
            <li>
              <a href="#" className={headerStyle.link}>
                Project
              </a>
            </li>
            <li>
              <a href="#" className={headerStyle.link}>
                Contact me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
