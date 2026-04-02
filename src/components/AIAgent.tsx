import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageCircle, Send, X } from "lucide-react";

type Role = "assistant" | "user";
type Message = { role: Role; content: string };

const quickReplies = [
  {
    question: "What is IEEE?",
    answer: "IEEE INU is a student branch focused on technical growth, leadership, and real community impact.",
  },
  {
    question: "How to join?",
    answer: "You can join from the Join Us page on our website, then our team will contact you with next steps.",
  },
  {
    question: "Tell me about committees",
    answer: "We have multiple committees such as Technical, Media, PR, and Membership, each with hands-on opportunities.",
  },
  {
    question: "Upcoming events",
    answer: "We regularly run workshops, hackathons, sessions, and networking events across the semester.",
  },
];

const initialMessage =
  "Hi! I'm the IEEE INU Assistant. Ask me about our committees, events, or how to join!";

const AIAgent = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: initialMessage }]);
  const [input, setInput] = useState("");

  const addMessagePair = (question: string, answer: string) => {
    setMessages((prev) => [...prev, { role: "user", content: question }, { role: "assistant", content: answer }]);
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const found = quickReplies.find((item) => trimmed.toLowerCase().includes(item.question.toLowerCase()));
    const response =
      found?.answer ??
      "I can help with IEEE, committees, joining, and events. You can also use the quick buttons below.";

    addMessagePair(trimmed, response);
    setInput("");
  };

  return (
    <div className="fixed z-50 bottom-6 right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-2xl bg-white shadow-2xl overflow-hidden border border-sky-200"
          >
            <div className="px-4 py-3 bg-gradient-to-r from-sky-700 to-cyan-500 border-b border-sky-300 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">IEEE INU Assistant</p>
                  <p className="text-[11px] text-white/90">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-300 mr-1.5 align-middle" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-md hover:bg-white/20 text-white"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            <div className="h-64 overflow-y-auto p-4 space-y-3 bg-white">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                        msg.role === "user"
                          ? "bg-sky-600 text-white"
                          : "bg-sky-50 text-slate-800 border border-sky-100"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
            </div>

            <div className="p-3 flex flex-wrap gap-2 border-t border-sky-100">
              {quickReplies.map((item) => (
                <button
                  key={item.question}
                  onClick={() => addMessagePair(item.question, item.answer)}
                  className="text-xs px-3 py-1 rounded-full border border-sky-300 text-sky-700 hover:bg-sky-50 transition"
                >
                  {item.question}
                </button>
              ))}
            </div>

            <div className="p-3 border-t border-sky-100 flex gap-2 bg-white">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 rounded-lg bg-sky-50 text-slate-700 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-300"
              />
              <button
                onClick={handleSend}
                className="p-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-sky-600 text-white shadow-lg hover:scale-105 transition flex items-center justify-center"
        aria-label="Toggle assistant"
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default AIAgent;