import Link from "next/link";
// import Counter from "@/component/Counter";

export default function Home() {
  console.log("break point");
  return (
    <>
    <Link href="/about">about</Link>
    <Link href="/composite" className="block">composite</Link>
    {/*<Counter />*/}
    </>
  );
}
