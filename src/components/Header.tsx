import React from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: 'À propos', href: '#about' },
    { label: 'Mon parcours', href: '#timeline' },
    { label: 'À propos de moi', href: '#about-me' },
    { label: 'Mes Projets', href: '#experience' },
    { label: 'Veille Technologique', href: '#tech-watch' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    const header = document.querySelector('header');
    
    if (section && header) {
      const headerHeight = header.getBoundingClientRect().height;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50 border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => handleClick(e, '#about')}
            className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
          >
            Portfolio
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="text-gray-600 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;