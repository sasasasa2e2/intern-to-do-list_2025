import React from "react";

export const Header: React.FC = () => {
  return (
    <div>
      <div className="relative w-full bg-blue-500">
        <img
          src="null"
          alt="Header Image（今はなし）"
          className="w-full h-48 object-cover"
        />

        <img
          src="s510.png"
          className="rounded-full w-[160px] h-[160px] object-cover border-2 border-black absolute left-10 -bottom-[96px]"
        />
      </div>

      <div className="h-[116px]" />

      <div>
        <p className="font-bold text-5xl ml-[40px]">My task</p>
      </div>
    </div>
  );
};
