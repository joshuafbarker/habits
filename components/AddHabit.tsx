"use client";

import { useState } from "react";
import { toggleFirstVisit, addHabit } from "@/lib/actions";

export default function AddHabit() {
  const [habit, setHabit] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // add the habit to the cookie store
    addHabit(habit);

    // toggle the first visit cookie
    toggleFirstVisit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Enter your first habit"
        className="flex-1 border border-slate-200 rounded py-2 px-3 mr-2 focus:outline-sky-700"
      />
      <button
        type="submit"
        className="py-1 px-4 bg-sky-700 text-white rounded font-bold"
      >
        Add Habit
      </button>
    </form>
  );
}
