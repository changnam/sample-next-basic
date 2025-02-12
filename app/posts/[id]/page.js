import Counter from "@/component/Counter";
import CounterClientOnly from "@/component/CounterClientOnly";

// Generates static HTML + JSON at build time
export async function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }];
  }
  
  export default async function Page({ params }) {
    console.log("id: "+params.id);
    const data = await fetch(`http://localhost:4000/api/posts/${params.id}`,{cache: "no-store"}).then((res) =>
      res.json()
    );
  
    return (
    <>
        <div>서버컴포넌트</div>
        <h1>{data.title}</h1>
        {/*<button onClick={() => alert("테스트")}>클릭</button>*/}
        <Counter />
        <hr/>
        <CounterClientOnly />
    </>
    );
  }
  