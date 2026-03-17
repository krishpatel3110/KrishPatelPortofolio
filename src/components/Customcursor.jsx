import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const colors = ["#b25120", "#d97706", "#f59e0b", "#fbbf24", "#e8dfd0"];

    const handleMouseMove = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }

      // Particle trail
      const p = document.createElement("div");
      const size = Math.random() * 7 + 3;
      p.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        animation: kp-fade 0.6s ease-out forwards;
      `;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 650);
    };

    const handleClick = (e) => {
      // Ripple rings
      for (let i = 0; i < 3; i++) {
        const r = document.createElement("div");
        const size = 24 + i * 18;
        r.style.cssText = `
          position: fixed;
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          border: 1.5px solid ${colors[i]};
          pointer-events: none;
          z-index: 9997;
          transform: translate(-50%, -50%);
          animation: kp-ripple ${0.55 + i * 0.12}s ease-out forwards;
        `;
        document.body.appendChild(r);
        setTimeout(() => r.remove(), 850);
      }
    };

    if (!document.getElementById("kp-cursor-styles")) {
      const style = document.createElement("style");
      style.id = "kp-cursor-styles";
      style.textContent = `
        *, *::before, *::after { cursor: none !important; }
        @keyframes kp-fade {
          0%   { opacity: 0.9; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0;   transform: translate(-50%, -50%) scale(0); }
        }
        @keyframes kp-ripple {
          0%   { opacity: 0.8; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0;   transform: translate(-50%, -50%) scale(5); }
        }
      `;
      document.head.appendChild(style);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      document.getElementById("kp-cursor-styles")?.remove();
    };
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: "fixed",
        width: "9px",
        height: "9px",
        borderRadius: "50%",
        background: "#b25120",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        transition: "left 0.04s linear, top 0.04s linear",
      }}
    />
  );
};