import React from "react";

export const icon: React.FC = () => {
  return (
    <div className="mt-5 ml-10">
      <label htmlFor="title" className="block mb-2 font-medium">
        タイトル
      </label>
      <textarea
        id="title"
        rows={2}
        className="w-80 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
        placeholder="Enter your title"
      />

      <div className="mt-6">
        <label htmlFor="description" className="block mb-2 font-medium">
          説明
        </label>
        <textarea
          id="description"
          rows={6}
          className="w-80 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
          placeholder="Enter your description"
        />
      </div>
      <div className="mt-6"></div>
      <button
        className="fixed z-50 border border-black-600 left-10 py-2 px-6 bg-white-400 hover: text-black rounded-full shadow-md transition"
        onClick={() => {
          window.open("https://www.google.com/?hl=ja", "_blank");
        }}
      >
        登録
      </button>
    </div>
  );
};
