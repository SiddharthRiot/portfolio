import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50"
      style={{
        transform: `translate(${position.x - 150}px, ${position.y - 150}px)`,
      }}
    >
      <div
        className="w-[300px] h-[300px] rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: "#7C3AED" }}
      />
    </div>
  );
}

export default CursorGlow;
