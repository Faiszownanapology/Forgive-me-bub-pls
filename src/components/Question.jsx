
import { useState } from "react";

const Question = ({ onYes }) => {
  const [noClicks, setNoClicks] = useState(0);
  const [floating, setFloating] = useState(false);
  const [pos, setPos] = useState({ top: "50%", left: "50%" });

  const handleNoClick = () => {
    const next = noClicks + 1;
    setNoClicks(next);

    if (next >= 5) return;

    setFloating(false);

    setTimeout(() => {
      const top = Math.random() * 60 + 20;
      const left = Math.random() * 60 + 20;

      setPos({
        top: `${top}%`,
        left: `${left}%`,
      });

      setFloating(true);
    }, 300);
  };

  return (
    <div className="flex-1 flex items-center justify-center relative px-10 py-20">
      <div className="relative bg-white/90 backdrop-blur-xl rounded-[3rem] p-14 shadow-2xl text-center max-w-xl w-full">

        <h2 className="text-4xl font-semibold text-gray-700 mb-14">
          Can you forgive me, bub? 🥺
        </h2>

        <div className="relative h-40 flex items-center justify-center gap-10">

          <button
            onClick={onYes}
            className="px-12 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-2xl font-medium shadow-lg hover:scale-105 transition-all duration-300 z-10"
          >
            Dimaafin kok bub ❤️
          </button>

          {noClicks === 0 && (
            <button
              onClick={handleNoClick}
              className="px-12 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-2xl font-medium shadow-lg transition-all duration-300"
            >
              Engga dulu deh
            </button>
          )}

          {noClicks > 0 && noClicks < 5 && floating && (
            <button
              onClick={handleNoClick}
              style={{
                position: "absolute",
                top: pos.top,
                left: pos.left,
                transform: "translate(-50%, -50%)",
              }}
              className="px-12 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-2xl font-medium shadow-lg transition-all duration-300"
            >
              Engga dulu deh
            </button>
          )}
        </div>

        {noClicks >= 5 && (
          <p className="mt-10 text-lg text-gray-500 italic">
            It's okay, bub. I'll give you the time you need. ❤️
          </p>
        )}
      </div>
    </div>
  );
};

export default Question;
