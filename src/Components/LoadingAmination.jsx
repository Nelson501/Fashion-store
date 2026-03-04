import { useEffect, useState } from "react";

export const LoadingAmination = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "You Are Welcome To Nelson Dayo fashoin Home";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="bg-black fixed inset-0 z-50 text-white flex flex-col items-center justify-center gap-8">

      {/* Top Progress Bar */}
      <div className="w-[300px] h-[4px] bg-gray-800 rounded overflow-hidden">
        <div className="h-full bg-blue-500 animate-pulse w-full"></div>
      </div>

      {/* Typing Text */}
      <div className="text-2xl md:text-3xl font-serif font-semibold text-center">
        {text}
        <span className="ml-1 animate-pulse">|</span>
      </div>

      {/* Bottom Progress Bar */}
      <div className="w-[300px] h-[4px] bg-gray-800 rounded overflow-hidden">
        <div className="h-full bg-blue-500 animate-pulse w-full"></div>
      </div>

    </div>
  );
};