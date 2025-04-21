import React from 'react';
import { History, Globe, AlertCircle } from 'lucide-react';

interface CaseCardProps {
  title: string;
  period: string;
  description: string;
  imageUrl: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ title, period, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="p-5">
        <h4 className="text-xl font-serif font-bold text-navy-900 mb-1">{title}</h4>
        <p className="text-sm text-gold-600 mb-3">{period}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const HistoricalCases: React.FC = () => {
  return (
    <section id="historico" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
            Histórico e Casos Relevantes
          </h2>
          <div className="h-1 w-24 bg-gold-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg">
            O direito de resistência tem raízes históricas profundas e exemplos significativos 
            ao longo da história mundial. Conheça alguns casos emblemáticos.
          </p>
        </div>
        
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <History size={24} className="text-gold-500 mr-3" />
            <h3 className="text-2xl font-serif font-bold text-navy-900">
              Evolução Histórica do Conceito
            </h3>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-navy-700 transform -translate-x-1/2"></div>
            
            <div className="space-y-8">
              <div className="relative pl-10 md:pl-0">
                <div className="md:flex items-center">
                  <div className="hidden md:block md:w-1/2 pr-10 text-right">
                    <h4 className="text-xl font-medium text-navy-900">Antiguidade Clássica</h4>
                    <p className="text-gray-600">Século IV a.C.</p>
                  </div>
                  
                  <div className="absolute top-0 left-0 md:left-1/2 w-8 h-8 bg-gold-500 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <span className="text-navy-900 font-bold">1</span>
                  </div>
                  
                  <div className="md:hidden mb-2">
                    <h4 className="text-xl font-medium text-navy-900">Antiguidade Clássica</h4>
                    <p className="text-gray-600">Século IV a.C.</p>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-10">
                    <p className="text-gray-700">
                      Aristóteles já discutia em sua "Política" o direito natural dos cidadãos de resistir a governantes 
                      tirânicos que não agissem pelo bem comum. Estes conceitos foram fundamentais para o desenvolvimento 
                      posterior da teoria política ocidental.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-10 md:pl-0">
                <div className="md:flex items-center">
                  <div className="hidden md:block md:w-1/2 pr-10 text-right">
                    <h4 className="text-xl font-medium text-navy-900">Idade Média</h4>
                    <p className="text-gray-600">Séculos XIII-XV</p>
                  </div>
                  
                  <div className="absolute top-0 left-0 md:left-1/2 w-8 h-8 bg-gold-500 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <span className="text-navy-900 font-bold">2</span>
                  </div>
                  
                  <div className="md:hidden mb-2">
                    <h4 className="text-xl font-medium text-navy-900">Idade Média</h4>
                    <p className="text-gray-600">Séculos XIII-XV</p>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-10">
                    <p className="text-gray-700">
                      Santo Tomás de Aquino e outros filósofos medievais elaboraram a doutrina do "direito de resistência 
                      ao tirano", estabelecendo que leis injustas não obrigam em consciência. A Magna Carta de 1215 também 
                      estabeleceu limites ao poder real.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-10 md:pl-0">
                <div className="md:flex items-center">
                  <div className="hidden md:block md:w-1/2 pr-10 text-right">
                    <h4 className="text-xl font-medium text-navy-900">Iluminismo</h4>
                    <p className="text-gray-600">Séculos XVII-XVIII</p>
                  </div>
                  
                  <div className="absolute top-0 left-0 md:left-1/2 w-8 h-8 bg-gold-500 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <span className="text-navy-900 font-bold">3</span>
                  </div>
                  
                  <div className="md:hidden mb-2">
                    <h4 className="text-xl font-medium text-navy-900">Iluminismo</h4>
                    <p className="text-gray-600">Séculos XVII-XVIII</p>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-10">
                    <p className="text-gray-700">
                      John Locke, em seu "Segundo Tratado sobre o Governo Civil", elaborou a teoria do direito de resistência 
                      como consequência natural do contrato social, legitimando a revolução contra governos que violassem 
                      seus deveres fundamentais.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-10 md:pl-0">
                <div className="md:flex items-center">
                  <div className="hidden md:block md:w-1/2 pr-10 text-right">
                    <h4 className="text-xl font-medium text-navy-900">Era Contemporânea</h4>
                    <p className="text-gray-600">Séculos XX-XXI</p>
                  </div>
                  
                  <div className="absolute top-0 left-0 md:left-1/2 w-8 h-8 bg-gold-500 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <span className="text-navy-900 font-bold">4</span>
                  </div>
                  
                  <div className="md:hidden mb-2">
                    <h4 className="text-xl font-medium text-navy-900">Era Contemporânea</h4>
                    <p className="text-gray-600">Séculos XX-XXI</p>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-10">
                    <p className="text-gray-700">
                      Após os horrores da Segunda Guerra Mundial e dos regimes totalitários, diversas constituições 
                      passaram a reconhecer explicitamente o direito de resistência como garantia contra novos 
                      autoritarismos, como a Constituição Alemã de 1949.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Globe size={24} className="text-gold-500 mr-3" />
            <h3 className="text-2xl font-serif font-bold text-navy-900">
              Casos Históricos Relevantes
            </h3>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CaseCard 
              title="Revolução Francesa" 
              period="1789"
              description="Exemplo clássico de resistência popular contra o absolutismo monárquico, que culminou com a Declaração dos Direitos do Homem e do Cidadão."
              imageUrl="https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <CaseCard 
              title="Resistência Dinamarquesa" 
              period="1940-1945"
              description="Durante a ocupação nazista, cidadãos dinamarqueses organizaram uma notável resistência pacífica, incluindo a salvação de milhares de judeus."
              imageUrl="https://images.pexels.com/photos/5822534/pexels-photo-5822534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <CaseCard 
              title="Movimento dos Direitos Civis (EUA)" 
              period="1954-1968"
              description="Liderado por Martin Luther King Jr., empregou técnicas de desobediência civil não-violenta para resistir às leis de segregação racial nos Estados Unidos."
              imageUrl="https://images.pexels.com/photos/3061217/pexels-photo-3061217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <CaseCard 
              title="Resistência à Ditadura Militar (Brasil)" 
              period="1964-1985"
              description="Movimentos estudantis, sindicais e políticos que resistiram ao regime militar brasileiro, culminando com o movimento Diretas Já."
              imageUrl="https://images.pexels.com/photos/2774546/pexels-photo-2774546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <CaseCard 
              title="Revoluções de Veludo" 
              period="1989"
              description="Série de movimentos pacíficos que derrubaram os regimes comunistas na Europa Central e Oriental, sem derramamento de sangue significativo."
              imageUrl="https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <CaseCard 
              title="Resistência Constitucional na África do Sul" 
              period="1948-1994"
              description="A luta contra o apartheid combinou resistência civil, pressão internacional e ações jurídicas para restaurar a democracia pluralista."
              imageUrl="https://images.pexels.com/photos/1329510/pexels-photo-1329510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
        
        <div>
          <div className="flex items-center mb-8">
            <AlertCircle size={24} className="text-gold-500 mr-3" />
            <h3 className="text-2xl font-serif font-bold text-navy-900">
              Diferença Essencial: Resistência Constitucional vs. Guerra
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-navy-800 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Critério</th>
                  <th className="py-4 px-6 text-left">Direito de Resistência</th>
                  <th className="py-4 px-6 text-left">Guerra</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-6 font-medium">Base legal</td>
                  <td className="py-3 px-6">Baseado na Constituição, princípios democráticos, direitos humanos</td>
                  <td className="py-3 px-6">Regulado pelo Direito Internacional Público, especialmente Convenções de Haia e Genebra</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-6 font-medium">Finalidade</td>
                  <td className="py-3 px-6">Restabelecer a ordem constitucional legítima e os direitos fundamentais</td>
                  <td className="py-3 px-6">Impor a vontade de um grupo ou Estado contra outro, podendo envolver fins expansionistas</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-6 font-medium">Instrumentalidade</td>
                  <td className="py-3 px-6">Meios pacíficos ou minimamente violentos, baseados em princípios éticos</td>
                  <td className="py-3 px-6">Meios armados, violentos, com ruptura total da legalidade</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-6 font-medium">Legitimidade</td>
                  <td className="py-3 px-6">Reconhecida no seio da própria ordem constitucional democrática</td>
                  <td className="py-3 px-6">Condicionada ao reconhecimento internacional, regulada pelo jus ad bellum</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-6 font-medium">Natureza da Ação</td>
                  <td className="py-3 px-6">Interna, protagonizada por civis e organizações sociais contra um Estado ilegítimo</td>
                  <td className="py-3 px-6">Externa ou interna, protagonizada por Estados ou forças armadas organizadas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoricalCases;