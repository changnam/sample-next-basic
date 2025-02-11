
import Link from "next/link";
import Counter from "@/component/Counter";

export default function About() {
  
    return (
        <>
      <Counter />
      <Link className="block" href="/">돌아가기</Link>
      </>
    );
  }
  