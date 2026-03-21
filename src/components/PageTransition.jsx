import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionState, setTransitionState] = useState("enter");

  useEffect(() => {
    setTransitionState("exit");
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionState("enter");
    }, 200);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div
      className={`transition-all duration-300 ease-out ${
        transitionState === "enter"
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2"
      }`}
    >
      {displayChildren}
    </div>
  );
};
