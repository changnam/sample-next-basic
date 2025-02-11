import Link from "next/link";
import Counter from "@/component/Counter";

export default function Home() {
  return (
    <>
    <Link href="/about">about</Link>
    <Counter />
    </>
  );
}
