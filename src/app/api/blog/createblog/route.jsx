import { conn } from "../../db/connect"; // Adjust based on your setup

export async function POST(request) {
    try {
        const { heading, content,topic, userId } = await request.json(); // Extract request body

        if (!heading || !content || !userId) {
            return Response.json({ error: "All fields are required" }, { status: 400 });
        }

        const [result] = await conn.promise().query(
            "INSERT INTO blog (heading, content, topic, userId) VALUES (?, ?, ?,?)",
            [heading, content,topic, userId] // Prepared statement to prevent SQL injection
        );

        return Response.json({ message: "Blog added successfully", blogId: result.insertId }, { status: 201 });
    } catch (error) {
        console.error("Error adding blog:", error);
        return Response.json({ error: "Failed to add blog" }, { status: 500 });
    }
}
