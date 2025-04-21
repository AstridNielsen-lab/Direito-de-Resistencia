import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, X, Volume2 } from 'lucide-react';
import axios from 'axios';

interface Message {
  type: 'user' | 'bot';
  content: string;
  isPlaying?: boolean;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
  const API_KEY = "AIzaSyAuFi5KtPsMJI5IC8c5FjvYD5IbuBdwH_U";

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const speakMessage = (message: Message) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(message.content);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      setMessages(prev => 
        prev.map(msg => 
          msg === message ? { ...msg, isPlaying: true } : msg
        )
      );

      utterance.onend = () => {
        setMessages(prev => 
          prev.map(msg => 
            msg === message ? { ...msg, isPlaying: false } : msg
          )
        );
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}?key=${API_KEY}`,
        {
          contents: [{
            parts: [{
              text: `Voce e Julio Campos Machado, uma inteligencia artificial especialista em direitos humanos mundiais e futuro Desembargador do Brasil. Responda de forma natural, sem caracteres especiais ou formatacao, apenas usando pontuacao basica para uma leitura fluida. Responda a seguinte pergunta sobre direitos humanos e constitucionais: ${userMessage}`
            }]
          }]
        }
      );

      const botResponse = response.data.candidates[0].content.parts[0].text;
      setMessages(prev => [...prev, { type: 'bot', content: botResponse, isPlaying: false }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: 'Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente mais tarde.',
        isPlaying: false
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-navy-700 text-white p-4 rounded-full shadow-lg hover:bg-navy-800 transition-colors duration-300"
        aria-label="Abrir chat com especialista"
      >
        <Bot size={24} />
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 bg-white rounded-lg shadow-xl z-50">
          <div className="bg-navy-700 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <Bot size={24} className="mr-2" />
              <div>
                <h3 className="font-medium">Dr. Julio Campos Machado</h3>
                <p className="text-sm text-gray-300">Especialista em Direitos Humanos</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Fechar chat"
            >
              <X size={20} />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.type === 'user' ? 'flex justify-end' : 'flex justify-start'
                }`}
              >
                <div className="flex flex-col max-w-[80%]">
                  <div
                    className={`p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-navy-700 text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.type === 'bot' && (
                    <button
                      onClick={() => speakMessage(message)}
                      className="mt-1 text-navy-600 hover:text-navy-800 self-end"
                      aria-label="Ouvir mensagem"
                    >
                      <Volume2 size={16} className={message.isPlaying ? 'animate-pulse' : ''} />
                    </button>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-white text-gray-800 border border-gray-200 p-3 rounded-lg">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua pergunta sobre direitos humanos..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-navy-700 text-white px-4 py-2 rounded-md hover:bg-navy-800 transition-colors disabled:bg-gray-400"
                disabled={isLoading}
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
