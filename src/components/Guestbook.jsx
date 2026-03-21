import { useEffect, useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const Guestbook = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const messagesEndRef = useRef(null);

  const fetchMessages = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("guestbook")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);
    if (data) setMessages(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();

    const channel = supabase
      .channel("guestbook-changes")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "guestbook" }, (payload) => {
        setMessages((prev) => [payload.new, ...prev]);
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [open]);

  const handleSubmit = async () => {
    if (!name.trim() || !message.trim()) return;
    setSubmitting(true);
    await supabase.from("guestbook").insert([{ name: name.trim(), message: message.trim() }]);
    setName("");
    setMessage("");
    setSubmitting(false);
  };

  const getInitial = (n) => n?.charAt(0).toUpperCase() || "?";
  const getColor = (n) => {
    const colors = ["#b25120", "#0f766e", "#7c3aed", "#0369a1", "#b45309", "#be185d"];
    return colors[n?.charCodeAt(0) % colors.length] || "#b25120";
  };

  const timeAgo = (date) => {
    const diff = Math.floor((Date.now() - new Date(date)) / 1000);
    if (diff < 60) return "just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  return (
    <>
      {/* Popup */}
      <div
        className={`fixed bottom-[84px] right-5 w-[300px] bg-background border border-border rounded-2xl shadow-2xl z-[9990] overflow-hidden origin-bottom-right transition-all duration-200 ${
          open ? "scale-100 opacity-100 pointer-events-auto" : "scale-[0.85] opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-primary px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-base">💬</span>
            <span className="text-white font-bold text-[13px]">Guestbook</span>
          </div>
          <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full">
            {messages.length} messages
          </span>
        </div>

        {/* Messages */}
        <div className="max-h-[200px] overflow-y-auto p-3 flex flex-col gap-2.5">
          {loading && <p className="text-[11px] text-muted-foreground text-center">Loading...</p>}
          {!loading && messages.length === 0 && (
            <p className="text-[11px] text-muted-foreground text-center py-3">
              Be the first to leave a message! 👋
            </p>
          )}
          {messages.map((msg) => (
            <div key={msg.id} className="flex gap-2 items-start">
              <div
                className="w-7 h-7 rounded-full text-white flex items-center justify-center text-[11px] font-bold shrink-0"
                style={{ background: getColor(msg.name) }}
              >
                {getInitial(msg.name)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-bold text-foreground">{msg.name}</span>
                  <span className="text-[9px] text-muted-foreground">{timeAgo(msg.created_at)}</span>
                </div>
                <p className="text-[11px] text-muted-foreground mt-0.5">{msg.message}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-2.5 border-t border-border flex flex-col gap-1.5">
          <input
            type="text"
            placeholder="Your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-border rounded-lg px-2.5 py-1.5 text-[11px] bg-background text-foreground outline-none w-full"
          />
          <div className="flex gap-1.5">
            <input
              type="text"
              placeholder="Leave a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="flex-1 border border-border rounded-lg px-2.5 py-1.5 text-[11px] bg-background text-foreground outline-none"
            />
            <button
              onClick={handleSubmit}
              disabled={submitting || !name.trim() || !message.trim()}
              className="bg-primary text-white border-none rounded-lg px-3 cursor-pointer text-[13px] disabled:opacity-50 transition-opacity hover:bg-primary/90"
            >
              {submitting ? "..." : "→"}
            </button>
          </div>
        </div>
      </div>

      {/* FAB button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open guestbook"
        className="fixed bottom-5 right-5 w-[52px] h-[52px] rounded-full bg-primary border-none cursor-pointer flex items-center justify-center shadow-[0_4px_16px_rgba(178,81,32,0.45)] z-[9991] transition-transform hover:scale-110"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          {open
            ? <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            : <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          }
        </svg>
        {!open && messages.length > 0 && (
          <div className="absolute -top-1 -right-1 w-[18px] h-[18px] bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[9px] text-white font-bold">
            {messages.length > 9 ? "9+" : messages.length}
          </div>
        )}
      </button>
    </>
  );
};