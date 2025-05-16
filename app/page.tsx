import { ledger } from "@/lib/fonts";

export default function Home() {
  return (
    <div>
      <h1 className={`${ledger.className} text-4xl max-w-lg`}>
        Track your habits with ease. No account necessary.
      </h1>
    </div>
  );
}
