import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Page() {
  return (
    <div>
      <Navigation />
      <h1>The Wild Oasis, welcome on board</h1>;
      <Link href="/cabins">Explore luxury</Link>
    </div>
  );
}
