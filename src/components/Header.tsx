import React, { useState, useEffect } from 'react';
import { Menu, X, Book, Scale, FileText } from 'lucide-react';
import { Link } from './Link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-700 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Scale className="h-8 w-8 text-gold-500 mr-2" />
            <span className="text-white font-serif text-xl font-semibold">Direito de Resistência</span>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#inicio" label="Início" />
            <Link href="#fundamentacao" label="Fundamentação Jurídica" />
            <Link href="#emenda" label="Projeto de Emenda" />
            <Link href="#historico" label="Histórico" />
            <Link href="#contato" label="Contato" />
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-800 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link href="#inicio" label="Início" onClick={() => setIsMenuOpen(false)} />
              <Link href="#fundamentacao" label="Fundamentação Jurídica" onClick={() => setIsMenuOpen(false)} />
              <Link href="#emenda" label="Projeto de Emenda" onClick={() => setIsMenuOpen(false)} />
              <Link href="#historico" label="Histórico" onClick={() => setIsMenuOpen(false)} />
              <Link href="#contato" label="Contato" onClick={() => setIsMenuOpen(false)} />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;