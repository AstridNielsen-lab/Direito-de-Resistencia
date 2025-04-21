import React, { useState } from 'react';
import { Book, Globe, Scale, Info, Bot } from 'lucide-react';
import ChatBot from './ChatBot';

interface LegalCategoryProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const LegalCategory: React.FC<LegalCategoryProps> = ({ icon, title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <button 
        className="w-full px-6 py-4 text-left flex items-center bg-navy-800 text-white"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="mr-3 text-gold-500">{icon}</div>
        <h3 className="text-xl font-serif font-bold">{title}</h3>
        <div className="ml-auto">
          <svg 
            className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

const LegalFoundation: React.FC = () => {
  return (
    <section id="fundamentacao" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
            Fundamentação Jurídica
          </h2>
          <div className="h-1 w-24 bg-gold-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg">
            O Direito de Resistência possui bases sólidas tanto na Constituição Brasileira quanto em 
            tratados internacionais. Conheça os principais fundamentos jurídicos que legitimam a resistência 
            constitucional.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <LegalCategory 
            icon={<Book size={24} />} 
            title="Na Constituição Brasileira"
          >
            <div className="space-y-4">
              <div className="border-l-4 border-navy-700 pl-4 py-1">
                <p className="font-medium text-navy-900">Art. 1º, parágrafo único, CF/88:</p>
                <p className="italic text-gray-600">"Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta Constituição."</p>
              </div>
              <p className="text-gray-700">O povo é a fonte primária do poder. Se os representantes traírem o pacto constitucional, há fundamento para o povo agir diretamente.</p>
              
              <div className="border-l-4 border-navy-700 pl-4 py-1">
                <p className="font-medium text-navy-900">Art. 5º, CF/88:</p>
                <p className="italic text-gray-600">Direitos e garantias fundamentais invioláveis</p>
              </div>
              <p className="text-gray-700">A proteção aos direitos fundamentais constitui limite à atuação estatal e legitima a resistência quando estes são sistematicamente violados.</p>
            </div>
          </LegalCategory>
          
          <LegalCategory 
            icon={<Globe size={24} />} 
            title="Em Tratados Internacionais"
          >
            <div className="space-y-4">
              <div className="border-l-4 border-gold-500 pl-4 py-1">
                <p className="font-medium text-navy-900">Declaração Universal dos Direitos Humanos</p>
                <p className="italic text-gray-600">Preâmbulo reconhece que "é essencial que os direitos humanos sejam protegidos pelo império da lei, para que o ser humano não seja compelido, como último recurso, à rebelião contra a tirania e a opressão."</p>
              </div>
              
              <div className="border-l-4 border-gold-500 pl-4 py-1">
                <p className="font-medium text-navy-900">Pacto de San José da Costa Rica</p>
                <p className="italic text-gray-600">Art. 23 garante direitos políticos e de participação democrática.</p>
              </div>
              
              <div className="border-l-4 border-gold-500 pl-4 py-1">
                <p className="font-medium text-navy-900">Constituição Alemã</p>
                <p className="italic text-gray-600">Art. 20, §4º concede a todos os alemães o direito de resistir a qualquer um que tente abolir a ordem constitucional.</p>
              </div>
            </div>
          </LegalCategory>
          
          <LegalCategory 
            icon={<Scale size={24} />} 
            title="Comparativo Internacional"
          >
            <div className="space-y-4">
              <p className="text-gray-700">Diversos países reconhecem explicitamente o direito de resistência em suas constituições:</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy-50 p-3 rounded">
                  <p className="font-medium text-navy-900">Alemanha</p>
                  <p className="text-sm text-gray-600">Art. 20, §4º da Lei Fundamental</p>
                </div>
                
                <div className="bg-navy-50 p-3 rounded">
                  <p className="font-medium text-navy-900">França</p>
                  <p className="text-sm text-gray-600">Art. 2 e 35 da Declaração de 1789</p>
                </div>
                
                <div className="bg-navy-50 p-3 rounded">
                  <p className="font-medium text-navy-900">Portugal</p>
                  <p className="text-sm text-gray-600">Art. 21 da Constituição</p>
                </div>
                
                <div className="bg-navy-50 p-3 rounded">
                  <p className="font-medium text-navy-900">Grécia</p>
                  <p className="text-sm text-gray-600">Art. 120 da Constituição</p>
                </div>
              </div>
              
              <p className="text-gray-700">O Brasil, embora não explicite o termo "direito de resistência", abriga esse direito de forma implícita em diversos dispositivos constitucionais.</p>
            </div>
          </LegalCategory>
          
          <LegalCategory 
            icon={<Info size={24} />} 
            title="Na Doutrina e Jurisprudência"
          >
            <div className="space-y-4">
              <p className="text-gray-700">A doutrina constitucional moderna reconhece a existência do direito de resistência ativa ou passiva frente a atos manifestamente ilegítimos e inconstitucionais.</p>
              
              <div className="border-l-4 border-navy-700 pl-4 py-1">
                <p className="font-medium text-navy-900">José Afonso da Silva</p>
                <p className="italic text-gray-600">"O direito de resistência é instrumento legítimo de defesa da Constituição contra a tirania."</p>
              </div>
              
              <div className="border-l-4 border-navy-700 pl-4 py-1">
                <p className="font-medium text-navy-900">Luís Roberto Barroso</p>
                <p className="italic text-gray-600">"A desobediência civil pode ser vista como direito fundamental implícito, derivado do princípio democrático e da cidadania."</p>
              </div>
              
              <p className="text-gray-700">Mesmo sem previsão explícita, esse direito decorre da defesa da ordem constitucional, do princípio da dignidade humana e do direito à liberdade e participação democrática.</p>
            </div>
          </LegalCategory>
        </div>
      </div>
      <div className="fixed bottom-6 right-24 flex space-x-4">
        <a
          href="https://julio-ia-advogado-global-especialista-em-direito-internacional.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold-500 text-white p-4 rounded-full shadow-lg hover:bg-gold-600 transition-colors duration-300"
          aria-label="Consultar IA Especialista em Direito Internacional"
        >
          <Bot size={24} />
        </a>
        <ChatBot />
      </div>
    </section>
  );
};

export default LegalFoundation;
