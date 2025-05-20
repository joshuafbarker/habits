"use server";

import { cookies } from "next/headers";
import type { Habit } from "@/types";

export async function getFirstVisit() {
  const cookieStore = await cookies();

  // get the first visit cookie
  const firstVisit = cookieStore.get("first_visit");

  // if firstVisit cookie is true return the first visit component
  if (firstVisit?.value === "true") {
    return true;
  }

  return false;
}

export async function toggleFirstVisit() {
  const cookieStore = await cookies();

  // set the first visit cookie to false
  cookieStore.set({
    name: "first_visit",
    value: "false",
  });
}

export async function getHabits() {
  const cookieStore = await cookies();

  // get the habits from the cookie store
  const habits = cookieStore.get("habits");

  // if the habits exist, parse them and return them
  if (habits) {
    const parsedHabits: Habit[] = JSON.parse(habits.value);

    // loop through the habits and check if their dateCompleted
    // matches today's date
    // if it doesn't, set completed to false
    const today = new Date().toISOString().split("T")[0];
    const yesterday = new Date(Date.now() - 864e5).toISOString().split("T")[0];

    const updatedHabits = parsedHabits.map((habit: Habit) => {
      // if the habit was completed today, return the habit as is
      if (habit.dateCompleted?.split("T")[0] === today) {
        return habit;
      }

      // if the habit was not completed today, set completed to false
      if (habit.dateCompleted?.split("T")[0] !== today) {
        return {
          ...habit,
          completed: false,
        };
      }

      // if the habit was not completed yesterday, set the streak to 0
      if (habit.dateCompleted?.split("T")[0] !== yesterday) {
        return {
          ...habit,
          streak: 0,
        };
      }

      // return any other habits that dont match the above conditions
      return habit;
    });

    return updatedHabits;
  }

  // if the habits don't exist, return an empty array
  return [];
}

export async function addHabit(habit: string) {
  const cookieStore = await cookies();

  // get the habits from the cookie store
  const habits = cookieStore.get("habits");

  // if the habits exist, parse them and add the new habit
  if (habits) {
    const parsedHabits: Habit[] = JSON.parse(habits.value);
    parsedHabits.push({
      id: parsedHabits.length + 1,
      name: habit,
      completed: false,
      streak: 0,
    });

    // set the new habits in the cookie store
    cookieStore.set({
      name: "habits",
      value: JSON.stringify(parsedHabits),
    });
  } else {
    // if the habits don't exist, create a new array with the new habit
    cookieStore.set({
      name: "habits",
      value: JSON.stringify([
        {
          id: 1,
          name: habit,
          completed: false,
          streak: 0,
        },
      ]),
    });
  }
}

export async function completeHabit(id: number) {
  const cookieStore = await cookies();

  // get the habits from the cookie store
  const habits = cookieStore.get("habits");

  // if the habits exist, parse them and update the completed status of the habit
  // and set the dateCompleted to today's date
  // then increase the streak of the habit by 1
  if (habits) {
    const parsedHabits: Habit[] = JSON.parse(habits.value);
    const updatedHabits = parsedHabits.map((habit: Habit) => {
      if (habit.id === id) {
        return {
          ...habit,
          completed: true,
          dateCompleted: new Date().toISOString(),
          streak: habit.streak + 1,
        };
      }

      return habit;
    });

    // set the new habits in the cookie store
    cookieStore.set({
      name: "habits",
      value: JSON.stringify(updatedHabits),
    });
  }
}

export async function deleteHabit(id: number) {
  const cookieStore = await cookies();

  // get the habits from the cookie store
  const habits = cookieStore.get("habits");

  // if the habits exist, parse them and remove the habit
  if (habits) {
    const parsedHabits: Habit[] = JSON.parse(habits.value);
    const updatedHabits = parsedHabits.filter(
      (habit: Habit) => habit.id !== id,
    );

    // set the new habits in the cookie store
    cookieStore.set({
      name: "habits",
      value: JSON.stringify(updatedHabits),
    });
  }
}
