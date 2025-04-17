// pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import umrahQuestions from '../../data/umrahQuestions.json';  // Mengimpor file JSON

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { message } = req.body;

    // Logika untuk memproses pesan dan memberikan respons
    // Ganti dengan logika chatbot Anda
    const reply = `You said: ${message}`;

    res.status(200).json({ reply });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}