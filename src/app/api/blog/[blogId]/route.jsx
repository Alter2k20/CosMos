import { conn } from "../../db/connect";

export async function GET(request,{params}) {
    const allparams = await params
    const blogId = allparams.blogId
    // console.log(blogId)
    try {
        const [row] = await conn
            .promise()
            .query("SELECT * FROM blog where blogId = ?", [blogId]);
            
        const [row2] = await conn
            .promise()
            .query("SELECT username FROM user where userId = ?", [row[0].userId]);
            // console.log(row2)
        return  Response.json([row[0],row2[0]]);
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return Response.json(
            { error: "Failed to fetch blogs" },
            { status: 500 }
        );
    }
}
