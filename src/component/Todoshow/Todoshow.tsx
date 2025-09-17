"use client";
import React from "react";

type Props = {
  lastName: string;
};

export const Todoshow: React.FC<Props> = ({ lastName }) => {
  return (
    <div className="mt-6 p-4 w-full border rounded bg-gray-50">
      <h2 className="text-lg font-semibold mb-2">送信された姓の表示</h2>
      {lastName ? (
        <p className="text-gray-700">
          姓：<span className="font-bold">{lastName}</span>
        </p>
      ) : (
        <p className="text-gray-500 italic">まだ送信されていません。</p>
      )}
    </div>
  );
};

// "use client";
// import React, { useState } from "react";

// export const Todoshow: React.FC = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <div className="max-w-xl mx-right mt-30 ml-10">
//       <div className="flex border-b border-gray-300">
//         <button
//           className={`flex-1 py-2 text-center border border-gray-300 ${
//             activeTab === 0
//               ? "bg-white font-semibold border-b-transparent"
//               : "bg-gray-100"
//           }`}
//           onClick={() => setActiveTab(0)}
//         >
//           全て
//         </button>
//         <button
//           className={`flex-1 py-2 text-center border border-gray-300 ${
//             activeTab === 1
//               ? "bg-white font-semibold border-b-transparent"
//               : "bg-gray-100"
//           }`}
//           onClick={() => setActiveTab(1)}
//         >
//           完了
//         </button>

//         <button
//           className={`flex-1 py-2 text-center border border-gray-300 ${
//             activeTab === 2
//               ? "bg-white font-semibold border-b-transparent"
//               : "bg-gray-100"
//           }`}
//           onClick={() => setActiveTab(2)}
//         >
//           未完了
//         </button>
//       </div>

//       {/* タブの中身 */}
//       <div className="border border-gray-300 p-4 bg-white">
//         {activeTab === 0 && (
//           <div>
//             <h2 className="text-lg font-bold mb-2">タブ1の内容</h2>
//             <textarea
//               id="description"
//               rows={6}
//               className="w-80 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
//               placeholder="Enter your description"
//             />
//           </div>
//         )}
//         {activeTab === 1 && (
//           <div>
//             <h2 className="text-lg font-bold mb-2">タブ2の内容</h2>
//             <p>こちらはタブ2に対応する説明や内容が表示されるエリアです。</p>
//           </div>
//         )}
//         {activeTab === 2 && (
//           <div>
//             <h2 className="text-lg font-bold mb-2">タブ3の内容</h2>
//             <p>こちらはタブ3に対応する説明や内容が表示されるエリアです。</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
