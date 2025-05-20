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

  // return the habits component
  return <Habits habits={habits} />;
}
