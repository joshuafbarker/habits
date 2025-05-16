"use server";

import { cookies } from "next/headers";

export async function toggleFirstVisit() {
  const cookieStore = await cookies();

  // set the first visit cookie to false
  cookieStore.set({
    name: "first_visit",
    value: "false",
  });
}

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

export async function addHabit(habit: string) {
  const cookieStore = await cookies();

  // get the habits from the cookie store
  const habits = cookieStore.get("habits");

  // if the habits exist, parse them and add the new habit
  if (habits) {
    const parsedHabits = JSON.parse(habits.value);
    parsedHabits.push(habit);

    // set the new habits in the cookie store
    cookieStore.set({
      name: "habits",
      value: JSON.stringify(parsedHabits),
    });
  } else {
    // if the habits don't exist, create a new array with the new habit
    cookieStore.set({
      name: "habits",
      value: JSON.stringify([habit]),
    });
  }
}

export async function getHabits() {
  const cookieStore = await cookies();

  // get the habits from the cookie store
  const habits = cookieStore.get("habits");

  // if the habits exist, parse them and return them
  if (habits) {
    return JSON.parse(habits.value);
  }

  // if the habits don't exist, return an empty array
  return [];
}
