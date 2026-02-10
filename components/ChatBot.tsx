
import React, { useState, useEffect, useRef } from 'react';

const KNOWLEDGE_BASE: Record<string, string> = {
  "greeting": "Welcome to SNDJ Global. I'm your assistant. We offer Tax Preparation, FBAR, and Virtual CFO services. How can I help?",
  "leadership": "Our leadership team includes Jay Desai (CEO), Sandip Desai, and Yatri Shah, bringing 8+ years of industry expertise.",
  "locations": "We have offices in Seattle (WA), Torrance (CA), New York City (NY), and Noida (India). Where are you located?",
  "services": "SNDJ Global specializes in Accounting/Bookkeeping, Tax Preparation, Virtual CFO, FBAR/FATCA Consultation, Payroll, and Sales Tax across 45 states.",
  "pricing": "We provide cost-effective solutions to raise your standards. For a detailed quote, please call +1 561-536-6050 or email info@sndjglobal.com.",
  "fbar": "Our FBAR/FATCA Consultation helps you stay informed and achieve your goals by understanding intricate reporting details.",
  "tax": "We handle US Tax Preparation with 100% accuracy, providing peace of mind during the overflow of Tax Season.",
  "default": "I can assist with accounting inquiries, US tax filing, or finding our nearest office. Would you like a consultation with our experts?"
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { text: KNOWLEDGE_BASE.greeting, sender: 'bot' }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const getResponse = (query: string) => {
    const q = query.toLowerCase();
    if (q.includes("ceo") || q.includes("who is") || q.includes("desai")) return KNOWLEDGE_BASE.leadership;
    if (q.includes("where") || q.includes("location") || q.includes("office")) return KNOWLEDGE_BASE.locations;
    if (q.includes("fbar") || q.includes("facta") || q.includes("abroad")) return KNOWLEDGE_BASE.fbar;
    if (q.includes("tax") || q.includes("irs")) return KNOWLEDGE_BASE.tax;
    if (q.includes("service") || q.includes("what do you do")) return KNOWLEDGE_BASE.services;
    if (q.includes("price") || q.includes("cost")) return KNOWLEDGE_BASE.pricing;
    return KNOWLEDGE_BASE.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setInput('');
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = getResponse(userMsg);
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[150]">
      {isOpen && (
        <div className="bg-white w-[380px] h-[550px] shadow-2xl rounded-[32px] overflow-hidden border border-slate-100 mb-4 flex flex-col animate-in slide-in-from-bottom-8 duration-500">
          <div className="bg-slate-900 p-6 text-white flex justify-between items-center relative overflow-hidden">
            <div className="relative z-10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-black text-xs">S</div>
              <div>
                <h4 className="font-black uppercase tracking-widest text-[10px]">SNDJ Assistant</h4>
                <p className="text-[9px] font-bold text-blue-400 uppercase tracking-tighter">8+ Years Expertise</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="relative z-10 hover:rotate-90 transition-transform">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-4 rounded-[20px] text-[13px] leading-relaxed shadow-sm ${
                  m.sender === 'bot' 
                    ? 'bg-white text-slate-700 rounded-bl-none border border-slate-100' 
                    : 'bg-blue-600 text-white rounded-br-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-[10px] text-slate-400 font-bold ml-2">Assistant is typing...</div>}
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about FBAR or Tax..." 
                className="w-full pl-5 pr-14 py-4 bg-slate-100 rounded-2xl text-[13px] font-medium outline-none border-none"
              />
              <button onClick={handleSend} className="absolute right-2 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-arrow-up text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-all">
        {isOpen ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-robot"></i>}
      </button>
    </div>
  );
};

export default ChatBot;
