import type { NextApiRequest, NextApiResponse } from 'next';
import { chat } from '@/ai/flows/chat-flow';
import type { ChatInput } from '@/ai/flows/chat-flow';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const input = req.body as ChatInput;
    const result = await chat(input);
    return res.status(200).json(result);
  } catch (err) {
    console.error('API /api/chat error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
