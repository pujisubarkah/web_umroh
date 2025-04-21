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
      <div
        className="fixed bottom-5 right-5 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-all duration-200"
        onClick={handleOpen}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Logo"
          className="w-6 h-6"
        />
        <span className="font-semibold text-sm">Chat Sekarang</span>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-xl rounded-2xl p-4 w-80 fixed bottom-5 right-5 border border-green-200">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-green-600">Asisten Virtual KhalifahAsia</h3>
        <button onClick={handleClose} className="text-green-500 hover:text-green-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="h-96 overflow-y-auto scrollbar-hidden border border-green-100 rounded-lg p-2 mb-2 bg-green-50/20 space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start gap-2 ${msg.sender === 'user' ? 'flex-row-reverse text-right' : 'text-left'}`}>
            <img
              src={msg.sender === 'user' ? '/user.png' : '/avatar.jpg'}
              alt={`${msg.sender} avatar`}
              className="w-8 h-8 rounded-full border border-green-300"
            />
            <div className="max-w-[75%]">
              <div className={`text-xs font-semibold ${msg.sender === 'user' ? 'text-green-600' : 'text-green-500'}`}>
                {msg.sender === 'user' ? 'Kamu' : 'Khalifah Asia'}
              </div>
              <div className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-xl mt-1">
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
          className="border border-green-300 rounded-l-lg p-2 flex-grow text-sm focus:outline-none"
          placeholder="Tanyakan pada kami..."
        />
        <button
          onClick={handleSend}
          className="bg-green-600 text-white rounded-r-lg px-4 hover:bg-green-700 text-sm"
        >
          Kirim
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
