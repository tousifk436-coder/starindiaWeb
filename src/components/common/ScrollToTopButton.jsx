import React, { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const ScrollToTopButton = () => {
  const [scrolledTop, setScrolledTop] = useState(false);

  const handleClick = () => {
    if (scrolledTop) {
      // Scroll to bottom
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setScrolledTop(!scrolledTop);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-15 right-6 bg-green-900 shadow-400 hover:bg-green-700 shadow-lg-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Scroll toggle"
    >
      {scrolledTop ? <ArrowDown size={20} /> : <ArrowUp size={20} />}
    </button>
  );
};

export default ScrollToTopButton;
