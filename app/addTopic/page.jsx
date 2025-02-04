"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen min-h-[300px]">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full border border-gray-300">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Add New Task</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Task Title" required
          />

          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Task Description" required
          />

          <button
            type="submit"
            className="bg-blue-600 font-bold shadow-md rounded-lg text-white py-3 px-6 w-full hover:bg-blue-700 transition-all"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}
