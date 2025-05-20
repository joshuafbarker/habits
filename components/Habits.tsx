import type { Habit } from "@/types";
import HabitItem from "./HabitItem";

export default function Habits({ habits }: { habits: Habit[] }) {
  // create an array with at least 5 items
  const items = [...habits, ...Array(5 - habits.length).fill({})];

  return (
    <div className="flex flex-wrap max-w-4xl w-full">
      <h1 className="basis-full font-semibold mb-4 border-b border-b-slate-400 border-dotted">
        Your Habits
      </h1>

      <ul className="w-full">
        {items.map((habit: Habit, index) => (
          <HabitItem
            key={index}
            id={habit.id}
            name={habit.name}
            isCompleted={habit.completed}
            streak={habit.streak}
          />
        ))}
      </ul>
    </div>
  );
}
