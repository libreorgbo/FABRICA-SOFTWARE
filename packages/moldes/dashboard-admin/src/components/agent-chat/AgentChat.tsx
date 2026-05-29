'use client';

import { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AgentChatProps {
  agentId: string;
  agentName: string;
}

export function AgentChat({ agentId, agentName }: AgentChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    // TODO: stream from /api/v1/agents/:id/chat
  };

  return (
    <div className="flex flex-col h-full border rounded-lg overflow-hidden">
      <header className="p-3 border-b bg-muted font-medium">{agentName}</header>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`text-sm ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-3 py-2 rounded-lg ${m.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
              {m.content}
            </span>
          </div>
        ))}
      </div>
      <div className="p-3 border-t flex gap-2">
        <input
          className="flex-1 border rounded px-3 py-1.5 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && void handleSend()}
          placeholder="Escribe un mensaje..."
        />
        <button className="px-4 py-1.5 bg-primary text-primary-foreground rounded text-sm" onClick={() => void handleSend()}>
          Enviar
        </button>
      </div>
    </div>
  );
}
