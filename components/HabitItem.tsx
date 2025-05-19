"use client";

import { completeHabit, deleteHabit } from "@/lib/actions";
import cn from "classnames";

interface Props {
  id: number;
  isCompleted: boolean;
  name?: string;
}

export default function HabitItem({ id, name, isCompleted }: Props) {
  function handleClick(id: number, action: "complete" | "delete") {
    if (action === "complete") completeHabit(id);

    if (action === "delete") deleteHabit(id);
  }

  return (
    <li
      key={id}
      className={cn(
        "mb-2 border rounded py-2 px-3 flex",
        isCompleted
          ? "border-green-300 bg-green-100 dark:bg-green-900"
          : "border-slate-300",
      )}
    >
      {name ? (
        <span className="flex-1">{name}</span>
      ) : (
        <input className="flex-1" type="text" placeholder="New habit..." />
      )}
      <button onClick={() => handleClick(id, "complete")}>complete</button>
      <button onClick={() => handleClick(id, "delete")}>delete</button>
    </li>
  );
}
