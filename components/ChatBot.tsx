
import React, { useState } from 'react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm the Syndyne assistant. How can I help you today?", sender: 'bot' }
  ]);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen && (
        <div className="bg-white w-80 h-[450px] shadow-2xl rounded-3xl overflow-hidden border border-slate-200 mb-4 flex flex-col animate-in slide-in-from-bottom-4">
          <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
            <div>
              <h4 className="font-bold">Syndyne Helper</h4>
              <p className="text-xs opacity-75">Online • Responds Instantly</p>
            </div>
            <button onClick={toggleChat} className="text-white/80 hover:text-white">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.sender === 'bot' ? 'bg-white shadow-sm text-slate-700' : 'bg-blue-600 text-white shadow-lg'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-slate-100">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="w-full pl-4 pr-10 py-3 bg-slate-100 rounded-xl text-sm outline-none focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={toggleChat}
        className="w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-all"
      >
        {isOpen ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-comment-dots"></i>}
      </button>
    </div>
  );
};

export default ChatBot;
