"use client";

import { useState } from "react";

type TodoItem = {
  title: string;
  description: string;
  isDone: boolean;
};

export const Todoform: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const [activeTab, setActiveTab] = useState<"all" | "notDone" | "done">("all");

  const handleAddTodo = () => {
    if (title.trim() === "" || description.trim() === "") return;
    const newItem: TodoItem = { title, description, isDone: false };
    setTodoList([...todoList, newItem]);
    setTitle("");
    setDescription("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddTodo();
  };

  const toggleDone = (index: number) => {
    const newList = [...todoList];
    newList[index].isDone = !newList[index].isDone;
    setTodoList(newList);
  };

  const filteredList = (() => {
    switch (activeTab) {
      case "done":
        return todoList.filter((item) => item.isDone);
      case "notDone":
        return todoList.filter((item) => !item.isDone);
      case "all":
      default:
        return todoList;
    }
  })();

  return (
    // ここからTodo登録フォーム
    <div>
      <div className="p-4 w-[500px]  ml-[20px] mx-auto">
        <h1 className="mb-[2px]">タイトル</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              className="border p-2 rounded w-full mb-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="タイトルを入力"
            />
            <h1 className="mt-[20px]">説明</h1>
            <textarea
              className="border p-2 rounded mt-[2px] w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="説明を入力"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="mt-[20px] px-4 py-2  text-black rounded hover: border-2 border-blue-600  transition"
          >
            登録
          </button>
        </form>
        {/* ここまでTodo登録フォーム */}

        {/* ここからTodo表示エリア */}
        <div className="mt-[20px] flex gap-4">
          {/* 全て、未完了、完了のタブのコード */}
          <button
            className={`px-4 py-2   ${
              activeTab === "all"
                ? "bg-blue-0 text-black border-b-2 border-gray"
                : "bg-gray-0 text-black"
            }`}
            onClick={() => setActiveTab("all")}
          >
            全て
          </button>
          <button
            className={`px-4 py-2  ${
              activeTab === "notDone"
                ? "bg-blue-0 text-black border-b-2 border-black"
                : "bg-gray-0 text-black"
            }`}
            onClick={() => setActiveTab("notDone")}
          >
            未完了
          </button>
          <button
            className={`px-4 py-2  ${
              activeTab === "done"
                ? "bg-blue-0 text-black border-b-2 border-black"
                : "bg-gray-0 text-black"
            }`}
            onClick={() => setActiveTab("done")}
          >
            完了
          </button>
        </div>
      </div>
      {/* 全て、未完了、完了のタブのコードここまで */}
      <div className="mb-20 ml-[40px] mt-[20px] w-[80%]  ">
        <div className="mt-[20px]">
          <h2 className="text-lg font-semibold mb-[20px]">
            {activeTab === "all" ? "" : activeTab === "done" ? "" : ""}
          </h2>
          {filteredList.length === 0 ? (
            <p className="text-gray-500">項目がありません。</p>
          ) : (
            <ul className="space-y-2 ">
              {filteredList.map((item, indexInFiltered) => {
                const originalIndex = todoList.findIndex(
                  (t) =>
                    t.title === item.title &&
                    t.description === item.description &&
                    t.isDone === item.isDone
                );
                // Todo表示エリアここまで
                return (
                  <li
                    key={originalIndex}
                    className="mb-[20px] flex items-start gap-2 rounded border  p-2"
                  >
                    <input
                      type="checkbox"
                      checked={item.isDone}
                      onChange={() => toggleDone(originalIndex)}
                      className="my-auto ml-[8px] mr-[12px]"
                    />
                    <div>
                      <p
                        className={`text-[16px] font-bold mt-[8px] ${
                          item.isDone ? "text-gray-200" : "text-gray-600"
                        }`}
                      >
                        {item.title}
                      </p>
                      <p
                        className={`text-[12px] mb-[8px] ${
                          item.isDone ? "text-gray-200" : "text-gray-500"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
