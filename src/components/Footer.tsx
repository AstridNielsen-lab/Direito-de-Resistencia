import React from 'react';
import { Scale, Heart, ExternalLink, Phone, Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center mb-6 md:mb-0">
            <Scale className="h-8 w-8 text-gold-500 mr-2" />
            <span className="text-white font-serif text-xl font-semibold">Direito de Resistência</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#inicio" className="text-gray-300 hover:text-gold-400 transition-colors">Início</a>
            <a href="#fundamentacao" className="text-gray-300 hover:text-gold-400 transition-colors">Fundamentação</a>
            <a href="#emenda" className="text-gray-300 hover:text-gold-400 transition-colors">Emenda</a>
            <a href="#historico" className="text-gray-300 hover:text-gold-400 transition-colors">Histórico</a>
            <a href="#contato" className="text-gray-300 hover:text-gold-400 transition-colors">Contato</a>
          </div>
        </div>
        
        <div className="border-t border-navy-700 pt-8">
          <div className="mx-auto max-w-5xl text-center mb-8">
            <h3 className="text-xl font-serif font-bold mb-4 text-gold-500">Pensamentos sobre o Direito de Resistência</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-navy-800 rounded-lg p-6">
                <blockquote className="italic text-gray-300 mb-4">
                  "Quando o governo viola os direitos do povo, a insurreição é, para o povo e para cada porção 
                  do povo, o mais sagrado dos direitos e o mais indispensável dos deveres."
                </blockquote>
                <p className="text-gold-400 font-medium">— Declaração dos Direitos do Homem e do Cidadão, 1793</p>
              </div>
              
              <div className="bg-navy-800 rounded-lg p-6">
                <blockquote className="italic text-gray-300 mb-4">
                  "Desobedecer a leis injustas não é apenas um direito, mas um dever moral. 
                  Ninguém tem a obrigação de cooperar com a própria opressão."
                </blockquote>
                <p className="text-gold-400 font-medium">— Mahatma Gandhi</p>
              </div>
              
              <div className="bg-navy-800 rounded-lg p-6 md:col-span-2">
                <blockquote className="italic text-gray-300 mb-4">
                  "Uma injustiça em qualquer lugar é uma ameaça à justiça em todo lugar. Estamos presos em uma 
                  rede inescapável de mutualidade, amarrados em um único tecido do destino. O que afeta 
                  a um diretamente, afeta a todos indiretamente."
                </blockquote>
                <p className="text-gold-400 font-medium">— Martin Luther King Jr.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            <div className="mb-6">
              <h4 className="text-gold-500 font-medium mb-3">Desenvolvido por</h4>
              <p className="text-white font-medium">Julio Campos Machado</p>
              <p className="text-gray-300">Like Look Solutions</p>
              <div className="flex items-center justify-center space-x-4 mt-2">
                <a 
                  href="https://wa.me/5511970603441" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-gold-400 transition-colors flex items-center"
                >
                  <Phone size={16} className="mr-1" />
                  (11) 97060-3441
                </a>
                <a 
                  href="https://likelook.wixsite.com/solutions" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-gold-400 transition-colors flex items-center"
                >
                  <Globe size={16} className="mr-1" />
                  Website
                </a>
              </div>
            </div>
            
            <p className="mb-2">© {new Date().getFullYear()} Direito de Resistência. Todos os direitos reservados.</p>
            <p>
              Site criado com fins educacionais e acadêmicos. O conteúdo apresentado visa estimular 
              o debate jurídico e constitucional.
            </p>
            <div className="mt-4 flex items-center justify-center">
              <span>Feito com</span>
              <Heart size={16} className="mx-1 text-red-500" />
              <span>para a preservação da democracia e dos direitos fundamentais</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;