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
          ? "border-green-400 bg-green-100 dark:border-green-700 dark:bg-green-900/20"
          : "border-zinc-300 dark:border-zinc-700",
      )}
    >
      <div className="flex-1">
        {name ? (
          <h2 className="font-semibold">{name}</h2>
        ) : (
          <AddHabit placeholder="New habit..." hideButton />
        )}

        {streak > 0 ? (
          <span
            className={cn(
              "text-sm",
              isCompleted
                ? "text-green-700 dark:text-green-300"
                : "text-zinc-500",
            )}
          >
            {streak} day streak
          </span>
        ) : null}
      </div>

      {!name || isCompleted ? null : (
        <button
          className="cursor-pointer mx-1 size-6 rounded-full hover:bg-emerald-500 dark:hover:bg-emerald-900 flex items-center justify-center"
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
          className="cursor-pointer mx-1 size-6 rounded-full hover:bg-red-500 dark:hover:bg-red-900 flex items-center justify-center"
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
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      )}
    </li>
  );
}
