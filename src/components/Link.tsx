import React from 'react';

interface LinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, label, onClick }) => {
  return (
    <a 
      href={href}
      onClick={(e) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
        if (onClick) onClick();
      }}
      className="text-white hover:text-gold-400 transition-colors duration-300 font-medium"
    >
      {label}
    </a>
  );
};