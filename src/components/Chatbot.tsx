// components/Chatbot.tsx
"use client";
import React, { useState } from 'react';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, sender: 'user' }]);

    // Dummy response
    const response = { data: { reply: `Kamu bilang: ${input}` } };

    setMessages((prev) => [...prev, { text: response.data.reply, sender: 'bot' }]);
    setInput('');
  };

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  if (!isOpen) {
    return (
      <div className="fixed bottom-5 right-5 cursor-pointer" onClick={handleOpen}>
        <img
          src="/avatar.jpg"
          alt="Chatbot Avatar"
          className="w-16 h-16 rounded-full border-4 border-pink-600 shadow-lg hover:scale-105 transition-transform duration-200"
        />
      </div>
    );
  }

  return (
    <div className="bg-white shadow-xl rounded-2xl p-4 w-80 fixed bottom-5 right-5 border border-pink-200">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-pink-600">Asisten Virtual KhalifahAsia</h3>
        <button onClick={handleClose} className="text-pink-500 hover:text-pink-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="h-96 overflow-y-auto scrollbar-hidden border border-pink-100 rounded-lg p-2 mb-2 bg-pink-50/20 space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start gap-2 ${msg.sender === 'user' ? 'flex-row-reverse text-right' : 'text-left'}`}>
            <img
              src={msg.sender === 'user' ? '/user.png' : '/avatar.jpg'}
              alt={`${msg.sender} avatar`}
              className="w-8 h-8 rounded-full border border-pink-300"
            />
            <div className="max-w-[75%]">
              <div className={`text-xs font-semibold ${msg.sender === 'user' ? 'text-pink-600' : 'text-pink-500'}`}>
                {msg.sender === 'user' ? 'Kamu' : 'Khalifah Asia'}
              </div>
              <div className="text-sm bg-pink-100 text-pink-800 px-3 py-1 rounded-xl mt-1">
                {msg.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex">
        <input
          type="text"
          value={input}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          onChange={(e) => setInput(e.target.value)}
          className="border border-pink-300 rounded-l-lg p-2 flex-grow text-sm focus:outline-none"
          placeholder="Tanyakan pada kami..."
        />
        <button
          onClick={handleSend}
          className="bg-pink-600 text-white rounded-r-lg px-4 hover:bg-pink-700 text-sm"
        >
          Kirim
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
