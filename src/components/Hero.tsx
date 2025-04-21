import React from 'react';
import { FileText, ChevronDown } from 'lucide-react';
import { Link } from './Link';

const Hero: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center bg-navy-900 text-white pt-16"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            O Direito de Resistência <span className="text-gold-500">Constitucional</span>
          </h1>
          
          <div className="h-1 w-40 bg-gold-500 mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl mb-10 leading-relaxed">
            Uma análise jurídica e constitucional sobre o direito fundamental do cidadão de resistir 
            a atos de poder que violem a ordem democrática e os direitos humanos fundamentais.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a 
              href="#fundamentacao" 
              className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3 px-6 rounded-md shadow-lg transition-all duration-300 flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#fundamentacao');
                if (element) {
                  window.scrollTo({
                    top: element.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <FileText size={20} className="mr-2" />
              Saiba Mais
            </a>
            
            <a 
              href="#emenda" 
              className="border-2 border-white hover:border-gold-500 text-white hover:text-gold-500 font-bold py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#emenda');
                if (element) {
                  window.scrollTo({
                    top: element.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Ver Proposta de Emenda
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a 
            href="#fundamentacao"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#fundamentacao');
              if (element) {
                window.scrollTo({
                  top: element.getBoundingClientRect().top + window.scrollY - 80,
                  behavior: 'smooth'
                });
              }
            }}
            className="text-white hover:text-gold-500 transition-colors"
          >
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;