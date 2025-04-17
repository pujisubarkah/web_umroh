// components/Chatbot.tsx
"use client";
import React, { useState } from 'react';
import axios from 'axios';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false); // Mengatur status awal chatbot tertutup

  const handleSend = async () => {
    if (!input) return;

    // Tambahkan pesan pengguna ke daftar pesan
    setMessages((prev) => [...prev, { text: input, sender: 'user' }]);
    
    // Kirim permintaan ke API chatbot
    const response = await axios.post('/api/chat', { message: input });
    
    // Tambahkan pesan bot ke daftar pesan
    setMessages((prev) => [...prev, { text: response.data.reply, sender: 'bot' }]);
    
    // Reset input
    setInput('');
  };

  const handleClose = () => {
    setIsOpen(false); // Menutup chatbot ketika tombol close ditekan
  };

  const handleOpen = () => {
    setIsOpen(true); // Membuka chatbot ketika avatar diklik
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-5 right-5 cursor-pointer" onClick={handleOpen}>
        <img
          src="/avatar.jpg" // Ganti dengan path avatar yang sesuai
          alt="Chatbot Avatar"
          className="w-12 h-12 rounded-full border-2 border-pink-600"
        />
      </div>
    );
  }

  return (
    <div className="bg-pink-100 shadow-lg rounded-lg p-4 w-80 fixed bottom-5 right-5">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-pink-600">Chatbot</h3>
        <button
          onClick={handleClose}
          className="text-red-600 hover:text-red-700"
        >
          Close
        </button>
      </div>
      <div className="h-96 overflow-y-scroll border border-pink-300 rounded-lg p-2 mb-2">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <strong className={msg.sender === 'user' ? 'text-pink-600' : 'text-pink-500'}>
              {msg.sender === 'user' ? 'You' : 'Bot'}:
            </strong>
            <span className="ml-2">{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          onChange={(e) => setInput(e.target.value)}
          className="border border-pink-300 rounded-l-lg p-2 flex-grow"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-pink-600 text-white rounded-r-lg p-2 hover:bg-pink-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
