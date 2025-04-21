import React, { useState } from 'react';
import { FileText, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';

interface AmendmentSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const AmendmentSection: React.FC<AmendmentSectionProps> = ({ title, icon, children }) => {
  return (
    <div className="mb-10">
      <div className="flex items-center mb-4">
        <div className="text-gold-500 mr-3">{icon}</div>
        <h3 className="text-2xl font-serif font-bold text-navy-900">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};

const ConstitutionalAmendment: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'text'|'context'|'justification'|'benefits'>('text');

  return (
    <section id="emenda" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
            Projeto de Emenda Constitucional
          </h2>
          <div className="h-1 w-24 bg-gold-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg">
            Proposta de inclusão do Direito de Resistência de forma explícita na Constituição Federal Brasileira,
            fortalecendo os mecanismos de proteção à democracia e aos direitos fundamentais.
          </p>
        </div>
        
        <div className="lg:flex gap-10">
          {/* Left Column - Tabs */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="bg-navy-800 rounded-lg overflow-hidden sticky top-24">
              <button 
                className={`w-full text-left px-6 py-4 border-l-4 transition-colors ${
                  activeTab === 'text' 
                    ? 'bg-navy-700 border-gold-500 text-white' 
                    : 'bg-navy-800 border-transparent text-gray-300 hover:bg-navy-700'
                }`}
                onClick={() => setActiveTab('text')}
              >
                <div className="flex items-center">
                  <FileText size={20} className="mr-3" />
                  <span className="font-medium">Texto da Proposta</span>
                </div>
              </button>
              
              <button 
                className={`w-full text-left px-6 py-4 border-l-4 transition-colors ${
                  activeTab === 'context' 
                    ? 'bg-navy-700 border-gold-500 text-white' 
                    : 'bg-navy-800 border-transparent text-gray-300 hover:bg-navy-700'
                }`}
                onClick={() => setActiveTab('context')}
              >
                <div className="flex items-center">
                  <HelpCircle size={20} className="mr-3" />
                  <span className="font-medium">Contexto</span>
                </div>
              </button>
              
              <button 
                className={`w-full text-left px-6 py-4 border-l-4 transition-colors ${
                  activeTab === 'justification' 
                    ? 'bg-navy-700 border-gold-500 text-white' 
                    : 'bg-navy-800 border-transparent text-gray-300 hover:bg-navy-700'
                }`}
                onClick={() => setActiveTab('justification')}
              >
                <div className="flex items-center">
                  <AlertTriangle size={20} className="mr-3" />
                  <span className="font-medium">Justificativa Jurídica</span>
                </div>
              </button>
              
              <button 
                className={`w-full text-left px-6 py-4 border-l-4 transition-colors ${
                  activeTab === 'benefits' 
                    ? 'bg-navy-700 border-gold-500 text-white' 
                    : 'bg-navy-800 border-transparent text-gray-300 hover:bg-navy-700'
                }`}
                onClick={() => setActiveTab('benefits')}
              >
                <div className="flex items-center">
                  <CheckCircle size={20} className="mr-3" />
                  <span className="font-medium">Benefícios para a Democracia</span>
                </div>
              </button>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-2/3">
            {activeTab === 'text' && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-6 text-center">
                  PROPOSTA DE EMENDA CONSTITUCIONAL Nº XX/2025
                </h3>
                
                <div className="mb-6">
                  <p className="font-medium mb-2">Art. 1º — Fica acrescido à Constituição da República Federativa do Brasil de 1988 o artigo 5º-A, com a seguinte redação:</p>
                </div>
                
                <div className="bg-white border-l-4 border-gold-500 p-5 mb-6">
                  <p className="font-medium mb-4">Art. 5º-A — Do Direito de Resistência</p>
                  
                  <p className="mb-4">§1º — Todo cidadão brasileiro tem o direito de resistir, individual ou coletivamente, à tirania, à opressão e a atos de governos ou autoridades públicas que atentem gravemente contra:</p>
                  <ul className="list-roman pl-8 mb-4 space-y-1">
                    <li>a ordem constitucional;</li>
                    <li>os direitos e garantias fundamentais;</li>
                    <li>o regime democrático;</li>
                    <li>a soberania popular;</li>
                    <li>a dignidade da pessoa humana.</li>
                  </ul>
                  
                  <p className="mb-4">§2º — A resistência poderá se dar por meios:</p>
                  <ul className="list-roman pl-8 mb-4 space-y-1">
                    <li>pacíficos, como a desobediência civil, manifestações públicas, greves e ações jurídicas coletivas;</li>
                    <li>excepcionais, por meios proporcionais de autodefesa civil, caso esgotadas as vias institucionais e restabelecida a ameaça real, concreta e imediata aos direitos previstos no §1º.</li>
                  </ul>
                  
                  <p className="mb-4">§3º — É vedado o uso da resistência para:</p>
                  <ul className="list-roman pl-8 mb-4 space-y-1">
                    <li>fins de interesse pessoal ou faccional;</li>
                    <li>atos de intolerância, preconceito ou discriminação;</li>
                    <li>instauração de regimes totalitários ou contrários aos princípios constitucionais.</li>
                  </ul>
                  
                  <p className="mb-4">§4º — Nenhum ato praticado no exercício legítimo do direito de resistência, nos termos desta Constituição, poderá ser criminalizado, punido ou restringido, salvo em caso de abuso, excesso ou desvio de finalidade.</p>
                  
                  <p>§5º — A lei disporá sobre os procedimentos, limites e garantias aplicáveis ao exercício do direito de resistência.</p>
                </div>
                
                <p className="font-medium">Art. 2º — Esta Emenda Constitucional entra em vigor na data de sua publicação.</p>
              </div>
            )}
            
            {activeTab === 'context' && (
              <AmendmentSection title="Contexto da Proposta" icon={<HelpCircle size={24} />}>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    O Brasil vive um momento de consolidação democrática após períodos históricos de exceção. 
                    A proposta de Emenda Constitucional nasce da necessidade de fortalecer as garantias democráticas 
                    contra eventuais rupturas institucionais e ameaças ao Estado de Direito.
                  </p>
                  
                  <p>
                    Em um cenário global onde diversas democracias enfrentam desafios populistas e autoritários, 
                    torna-se imperativo fortalecer os mecanismos de autodefesa do regime democrático, fornecendo 
                    ferramentas constitucionais explícitas para sua proteção.
                  </p>
                  
                  <p>
                    A emenda proposta visa preencher uma lacuna no ordenamento jurídico brasileiro, uma vez que o 
                    direito de resistência, embora implícito, carece de normatização expressa, o que gera insegurança 
                    jurídica e fragilidade institucional em situações de grave crise política.
                  </p>
                  
                  <div className="bg-navy-50 p-5 rounded-lg my-6 border-l-4 border-navy-700">
                    <h4 className="font-medium text-navy-900 mb-2">Diferenciações Importantes:</h4>
                    <p>
                      A proposta estabelece clara distinção entre o legítimo direito de resistência pacífica e 
                      constitucional e ações violentas ou insurrecionais. Seu objetivo é justamente criar um caminho 
                      institucional para a proteção da democracia sem ruptura da ordem jurídica.
                    </p>
                  </div>
                </div>
              </AmendmentSection>
            )}
            
            {activeTab === 'justification' && (
              <AmendmentSection title="Justificativa Jurídica" icon={<AlertTriangle size={24} />}>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <h4 className="text-xl font-medium text-navy-900 mb-3">Base Constitucional Brasileira</h4>
                  <ul className="space-y-3 mb-6">
                    <li>
                      <strong>Art. 1º, parágrafo único</strong> - Soberania popular como fundamento da República
                    </li>
                    <li>
                      <strong>Art. 5º</strong> - Direitos e garantias fundamentais invioláveis
                    </li>
                    <li>
                      <strong>Art. 60, §4º</strong> - Cláusulas pétreas que não permitem retrocesso democrático
                    </li>
                  </ul>
                  
                  <h4 className="text-xl font-medium text-navy-900 mb-3">Direito Internacional</h4>
                  <ul className="space-y-3 mb-6">
                    <li>
                      <strong>Declaração Universal dos Direitos Humanos</strong> - Reconhece a legitimidade da resistência contra a tirania
                    </li>
                    <li>
                      <strong>Pacto de San José da Costa Rica</strong> - Garante direitos políticos e participação democrática
                    </li>
                    <li>
                      <strong>Carta da ONU</strong> - Defesa dos direitos humanos e liberdades fundamentais
                    </li>
                    <li>
                      <strong>Convenções de Genebra</strong> - Proteção de civis contra regimes de opressão
                    </li>
                  </ul>
                  
                  <h4 className="text-xl font-medium text-navy-900 mb-3">Direito Comparado</h4>
                  <ul className="space-y-3">
                    <li>
                      <strong>Constituição Alemã</strong> - Art. 20, §4º autoriza explicitamente a resistência à ameaça à ordem constitucional
                    </li>
                    <li>
                      <strong>Declaração Francesa de 1789</strong> - Art. 35 considera a resistência à opressão um direito natural
                    </li>
                  </ul>
                </div>
              </AmendmentSection>
            )}
            
            {activeTab === 'benefits' && (
              <AmendmentSection title="Benefícios para a Democracia" icon={<CheckCircle size={24} />}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-navy-50 p-5 rounded-lg border-t-4 border-gold-500">
                    <h4 className="text-xl font-medium text-navy-900 mb-3">Segurança Jurídica</h4>
                    <p className="text-gray-700">
                      Estabelece parâmetros claros para o exercício do direito de resistência, 
                      evitando interpretações arbitrárias ou excessivas.
                    </p>
                  </div>
                  
                  <div className="bg-navy-50 p-5 rounded-lg border-t-4 border-gold-500">
                    <h4 className="text-xl font-medium text-navy-900 mb-3">Proteção Constitucional</h4>
                    <p className="text-gray-700">
                      Fortalece os mecanismos de autoproteção da Constituição contra ameaças internas 
                      de ruptura democrática.
                    </p>
                  </div>
                  
                  <div className="bg-navy-50 p-5 rounded-lg border-t-4 border-gold-500">
                    <h4 className="text-xl font-medium text-navy-900 mb-3">Participação Cívica</h4>
                    <p className="text-gray-700">
                      Empodera os cidadãos como guardiães últimos da ordem constitucional, 
                      estimulando maior consciência e participação política.
                    </p>
                  </div>
                  
                  <div className="bg-navy-50 p-5 rounded-lg border-t-4 border-gold-500">
                    <h4 className="text-xl font-medium text-navy-900 mb-3">Prevenção de Crises</h4>
                    <p className="text-gray-700">
                      Cria um desincentivo institucional a tentativas de ruptura democrática, 
                      ao estabelecer mecanismos legítimos de resposta popular.
                    </p>
                  </div>
                  
                  <div className="md:col-span-2 bg-navy-50 p-5 rounded-lg border-t-4 border-gold-500">
                    <h4 className="text-xl font-medium text-navy-900 mb-3">Alinhamento Internacional</h4>
                    <p className="text-gray-700">
                      Posiciona o Brasil em consonância com as mais avançadas democracias constitucionais do mundo, 
                      que já reconhecem explicitamente o direito de resistência como garantia fundamental.
                    </p>
                  </div>
                </div>
              </AmendmentSection>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstitutionalAmendment;