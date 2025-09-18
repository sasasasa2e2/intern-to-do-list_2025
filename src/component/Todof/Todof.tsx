"use client";
import { FC, ChangeEvent, useState } from "react";
import { Todoshow } from "@/component/Todoshow/Todoshow"; 

export const Todof: FC = () => {
  const [lastName, setLastName] = useState(""); 
  const [submittedLastName, setSubmittedLastName] = useState(""); 
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");

  const onChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLastNameErrorMessage("");

    if (lastName.trim() === "") {
      setLastNameErrorMessage("姓を入力してください。");
      return;
    }

    
    setSubmittedLastName(lastName);

    
    setLastName("");
  };

  return (
    <>
      <div className="max-w-md ml-10 mx-auto mt-10 p-6 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4">React フォーム</h1>

        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">
              <span className="text-red-500 mr-1">＊</span>姓
            </label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={onChangeLastName}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="例: 山田"
            />
            {lastNameErrorMessage && (
              <p className="text-red-500 text-sm mt-1">
                {lastNameErrorMessage}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition"
          >
            送信
          </button>
        </form>
      </div>
      <Todoshow lastName={submittedLastName} />
    </>
  );
};

// "use client";
// import { FC, ChangeEvent, useState } from "react";

// export const Todof: React.FC = () => {
//   // 各項目の入力情報
//   const [lastName, setLastName] = useState("");

//   // 各項目のエラーメッセージ
//   const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");

//   // 送信処理
//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // エラーメッセージの初期化
//     setLastNameErrorMessage("");

//     const formData = {
//       lastName,
//     };
//   };

//   // onChange
//   const onChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
//     setLastName(e.target.value);
//   };

//   return (
//     <div className="wrapper">
//       <h1>React Form</h1>
//       <section className="section">
//         <h2>useState Form</h2>
//         <p>ReactのuseStateを使用してformを作成した例です。</p>
//         <form onSubmit={onSubmit}>
//           <div className="form-item">
//             <label>
//               <span className="label required">必須</span>
//               <span>姓</span>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={lastName}
//                 onChange={onChangeLastName}
//               />
//             </label>
//             {lastNameErrorMessage && (
//               <p className="error-message">{lastNameErrorMessage}</p>
//             )}
//           </div>

//           <div className="submit-button">
//             <input type="submit" />
//           </div>
//         </form>
//       </section>
//       <p>姓: {lastName}</p>
//     </div>
//   );
// };
// // "use client";
// // import React from "react";
// // import { useState } from "react";
// // export const Todof: React.FC = () => {
// //   return (
// //     <form onSubmit={}>
// //       <div className="mt-5 ml-10">
// //         <label htmlFor="title" className="block mb-2 font-medium">
// //           タイトル
// //         </label>
// //         <input
// //           id="title"
// //           rows={2}
// //           className="w-80 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
// //           placeholder="Enter your title"
// //         />

// //         <div className="mt-6">
// //           <label htmlFor="description" className="block mb-2 font-medium">
// //             説明
// //           </label>
// //           <input
// //             id="description"
// //             rows={6}
// //             className="w-80 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
// //             placeholder="Enter your description"
// //           />
// //         </div>
// //         <div className="mt-6"></div>
// //         <button
// //           type="submit"
// //           className="fixed z-50 left-10 py-2 px-6 border border-black bg-white
// //           text-black rounded-full shadow-md transition hover:border-blue-500
// //           focus:outline-none focus:ring-2 focus:ring-blue-500"
// //         >
// //           登録
// //         </button>
// //       </div>
// //     </form>
// //   );
// // };
