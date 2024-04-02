import React, { useEffect, useState, useRef } from 'react';

const Header = () => {
  const [isOverlapping, setIsOverlapping] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const checkOverlap = () => {
      const animationSection = document.getElementById('animation-section');
      const header = document.querySelector('header');
      const animationSectionOffset = animationSection.offsetTop + animationSection.offsetHeight;
      setIsOverlapping(window.scrollY < animationSectionOffset - header.offsetHeight);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    checkOverlap();
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', checkOverlap);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', checkOverlap);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false); // Close the menu
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false); // Ensure the menu closes when a link is clicked

  return (
    <header style={{ color: isOverlapping ? '#fff' : 'var(--text-color)' }}>
      {!isMenuOpen && (
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      )}
      <nav ref={menuRef} className={isMenuOpen ? 'active' : ''}>
        <ul>
          <li>
            { /*eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
            <a href="#" onClick={scrollToTop}>
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
