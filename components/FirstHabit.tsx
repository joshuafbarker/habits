import { display } from "@/lib/fonts";
import AddHabit from "./AddHabit";

export default function FirstHabit() {
  return (
    <div className="flex flex-col max-w-3xl">
      <h1 className={`${display.className} text-3xl lg:text-6xl mb-8`}>
        Track your habits with ease.
        <br />
        No account necessary.
      </h1>

      <AddHabit firstVisit />
    </div>
  );
}
