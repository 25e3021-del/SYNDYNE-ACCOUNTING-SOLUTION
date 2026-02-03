
import React, { useState } from 'react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Welcome to Syndyne! How can we assist with your bookkeeping today?", sender: 'bot' }
  ]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setInput('');
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thank you for your message. One of our experts will be with you shortly. You can also reach us at info@syndyne.com.", 
        sender: 'bot' 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[150]">
      {isOpen && (
        <div className="bg-white w-[350px] h-[500px] shadow-2xl rounded-3xl overflow-hidden border border-slate-100 mb-4 flex flex-col animate-in slide-in-from-bottom-6 duration-300">
          <div className="bg-blue-600 p-6 text-white flex justify-between items-center shadow-lg">
            <div>
              <h4 className="font-black uppercase tracking-widest text-sm">Syndyne Assistant</h4>
              <p className="text-[10px] font-bold opacity-80 uppercase tracking-tighter">Experts Online Now</p>
            </div>
            <button onClick={toggleChat} className="text-white hover:rotate-90 transition-transform">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>
          
          <div className="flex-grow p-6 overflow-y-auto space-y-4 bg-slate-50 scroll-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-xs font-medium leading-relaxed shadow-sm ${m.sender === 'bot' ? 'bg-white text-slate-700 rounded-bl-none' : 'bg-blue-600 text-white rounded-br-none shadow-md'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative flex items-center gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our services..." 
                className="flex-grow pl-5 pr-12 py-4 bg-slate-100 rounded-2xl text-xs font-bold outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              <button onClick={handleSend} className="absolute right-2 p-3 text-blue-600 hover:scale-110 transition-transform">
                <i className="fa-solid fa-paper-plane text-lg"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={toggleChat}
        className="w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        {isOpen ? (
          <i className="fa-solid fa-chevron-down"></i>
        ) : (
          <div className="relative">
            <i className="fa-solid fa-comment-dots"></i>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-blue-600 animate-pulse"></span>
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatBot;
