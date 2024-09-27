export const prerender = false

export async function GET() {
    return Response.json({message: "Rednered server side!"});
}