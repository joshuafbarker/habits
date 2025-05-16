export default function Habits({ habits }: { habits: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      {habits.map((habit: string) => (
        <div
          key={habit}
          className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between"
        >
          <span className="text-gray-800">{habit}</span>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
