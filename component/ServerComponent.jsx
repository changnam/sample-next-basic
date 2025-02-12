export default async function ServerComponent(){
    const data = await fetch(`http://localhost:4000/api/posts/1`).then((res) =>
        res.json()
      );

    return (
        <div>서버 컴포넌트 {data.title}</div>
    )
}