// Generates static HTML + JSON at build time
export async function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }];
  }
  
  export default async function Page({ params }) {
    const data = await fetch(`http://localhost:4000/api/posts/${params.id}`).then((res) =>
      res.json()
    );
  
    return (
    <>
        <h1>{data.title}</h1>
        {/*<button onClick={() => alert("테스트")}>클릭</button>*/}
    </>
    );
  }
  