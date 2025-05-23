import {conn} from '../../db/connect'

export async function GET(request) {
    try {
        const [rows] = await conn.promise().query("SELECT * FROM blog");
        return Response.json(rows);
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return Response.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}