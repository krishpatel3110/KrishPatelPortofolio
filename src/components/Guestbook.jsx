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

    // Realtime subscription
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
        style={{
          position: "fixed",
          bottom: "84px",
          right: "20px",
          width: "300px",
          background: "var(--color-background, #fff)",
          border: "1px solid var(--color-border, #e5e7eb)",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
          zIndex: 9990,
          overflow: "hidden",
          transformOrigin: "bottom right",
          transform: open ? "scale(1)" : "scale(0.85)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "transform 0.25s cubic-bezier(.34,1.56,.64,1), opacity 0.2s ease",
        }}
      >
        {/* Header */}
        <div style={{ background: "#b25120", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "16px" }}>💬</span>
            <span style={{ color: "white", fontWeight: 700, fontSize: "13px" }}>Guestbook</span>
          </div>
          <span style={{ background: "rgba(255,255,255,0.2)", color: "white", fontSize: "10px", padding: "2px 8px", borderRadius: "20px" }}>
            {messages.length} messages
          </span>
        </div>

        {/* Messages */}
        <div style={{ maxHeight: "200px", overflowY: "auto", padding: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
          {loading && <p style={{ fontSize: "11px", color: "var(--color-muted-foreground)", textAlign: "center" }}>Loading...</p>}
          {!loading && messages.length === 0 && (
            <p style={{ fontSize: "11px", color: "var(--color-muted-foreground)", textAlign: "center", padding: "12px 0" }}>
              Be the first to leave a message! 👋
            </p>
          )}
          {messages.map((msg) => (
            <div key={msg.id} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
              <div style={{
                width: "28px", height: "28px", borderRadius: "50%",
                background: getColor(msg.name), color: "white",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "11px", fontWeight: 700, flexShrink: 0,
              }}>
                {getInitial(msg.name)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-foreground)" }}>{msg.name}</span>
                  <span style={{ fontSize: "9px", color: "var(--color-muted-foreground)" }}>{timeAgo(msg.created_at)}</span>
                </div>
                <p style={{ fontSize: "11px", color: "var(--color-muted-foreground)", margin: "2px 0 0" }}>{msg.message}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div style={{ padding: "10px 12px", borderTop: "1px solid var(--color-border)", display: "flex", flexDirection: "column", gap: "6px" }}>
          <input
            type="text"
            placeholder="Your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              border: "1px solid var(--color-border)", borderRadius: "8px",
              padding: "6px 10px", fontSize: "11px",
              background: "var(--color-background)", color: "var(--color-foreground)",
              outline: "none", width: "100%", boxSizing: "border-box",
            }}
          />
          <div style={{ display: "flex", gap: "6px" }}>
            <input
              type="text"
              placeholder="Leave a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              style={{
                flex: 1, border: "1px solid var(--color-border)", borderRadius: "8px",
                padding: "6px 10px", fontSize: "11px",
                background: "var(--color-background)", color: "var(--color-foreground)",
                outline: "none",
              }}
            />
            <button
              onClick={handleSubmit}
              disabled={submitting || !name.trim() || !message.trim()}
              style={{
                background: "#b25120", color: "white", border: "none",
                borderRadius: "8px", padding: "0 12px", cursor: "pointer",
                fontSize: "13px", opacity: (submitting || !name.trim() || !message.trim()) ? 0.5 : 1,
                transition: "opacity 0.2s",
              }}
            >
              {submitting ? "..." : "→"}
            </button>
          </div>
        </div>
      </div>

      {/* FAB button */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          position: "fixed", bottom: "20px", right: "20px",
          width: "52px", height: "52px", borderRadius: "50%",
          background: "#b25120", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 16px rgba(178,81,32,0.45)",
          zIndex: 9991, transition: "transform 0.2s",
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          {open
            ? <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            : <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          }
        </svg>
        {!open && messages.length > 0 && (
          <div style={{
            position: "absolute", top: "-4px", right: "-4px",
            width: "18px", height: "18px", background: "#ef4444",
            borderRadius: "50%", border: "2px solid white",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "9px", color: "white", fontWeight: 700,
          }}>
            {messages.length > 9 ? "9+" : messages.length}
          </div>
        )}
      </button>
    </>
  );
};