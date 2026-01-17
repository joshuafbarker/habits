"use client";

import { useState } from "react";
import { toggleFirstVisit, addHabit } from "@/lib/actions";

interface Props {
  placeholder?: string;
  hideButton?: boolean;
  firstVisit?: boolean;
}

export default function AddHabit({
  placeholder,
  hideButton,
  firstVisit,
}: Props) {
  const [habit, setHabit] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // add the habit to the cookie store
    addHabit(habit);

    // reset the input field
    setHabit("");

    // unfocus the input field
    e.currentTarget.blur();

    // if firstVisit toggle the first visit cookie
    if (firstVisit) toggleFirstVisit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <input
        name="add-habit"
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder={placeholder || "Enter your first habit"}
        className="flex-1 border border-zinc-300 dark:border-zinc-700 rounded py-2 px-3 mr-2 focus:border-sky-700 focus:outline-0"
      />

      {hideButton ? null : (
        <button
          type="submit"
          className="py-1 px-4 bg-sky-700 text-white rounded font-bold cursor-pointer hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2"
        >
          Add Habit
        </button>
      )}
    </form>
  );
}
