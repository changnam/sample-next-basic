
"use client"

import Link from "next/link";
import Counter from "@/component/Counter";
import {useEffect, useState} from "react";

export default function About() {
  const [id,setId] = useState(0);
  useEffect(() => {
    setId(Math.floor(Math.random() * 100));
  },[]);

    return (
        <>
      <Counter />
      <Link className="block" href="/">돌아가기</Link>
      <Link className="block" href={`/posts/${id}`}>post조회</Link>
      </>
    );
  }
  