import { getFirstVisit, getHabits } from "@/lib/actions";
import FirstHabit from "@/components/FirstHabit";
import Habits from "@/components/Habits";

export default async function Home() {
  const firstVisit = await getFirstVisit();
  const habits = await getHabits();

  // if its a users first visit return the first visit component
  if (firstVisit) {
    return <FirstHabit />;
  }

  // if the user has habits, return the habits component
  if (habits.length > 0) {
    return <Habits habits={habits} />;
  }

  return null;
}
