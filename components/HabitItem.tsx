"use client";

import cn from "classnames";
import AddHabit from "./AddHabit";
import { completeHabit, deleteHabit } from "@/lib/actions";

interface Props {
  id: number;
  isCompleted: boolean;
  streak: number;
  name?: string;
}

export default function HabitItem({ id, name, isCompleted, streak }: Props) {
  function handleClick(id: number, action: "complete" | "delete") {
    if (action === "complete") completeHabit(id);

    if (action === "delete") deleteHabit(id);
  }

  return (
    <li
      key={id}
      className={cn(
        "mb-2 border rounded p-4 flex min-h-16 items-center",
        isCompleted
          ? "border-green-300 bg-green-50 dark:bg-green-900"
          : "border-slate-300",
      )}
    >
      <div className="flex-1">
        {name ? (
          <h2 className="font-semibold">{name}</h2>
        ) : (
          <AddHabit placeholder="New habit..." hideButton />
        )}

        {streak > 0 ? (
          <span className="text-sm text-slate-500">{streak} day streak</span>
        ) : null}
      </div>

      {!name || isCompleted ? null : (
        <button
          className="cursor-pointer mx-1 size-6 rounded-full hover:bg-emerald-200 flex items-center justify-center"
          onClick={() => handleClick(id, "complete")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </button>
      )}

      {!name ? null : (
        <button
          className="cursor-pointer mx-1 size-6 rounded-full hover:bg-red-200 flex items-center justify-center"
          onClick={() => handleClick(id, "delete")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </li>
  );
}
