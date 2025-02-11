export async function GET(request, { params }) {
  const { id } = params;
  return Response.json({ postId: id, title: `Post ${id} fetched successfully!` });
}
