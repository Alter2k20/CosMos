import { conn } from "../../db/connect"; // Adjust based on your setup

export async function POST(request) {
    try {
        const { username, email, password } = await request.json(); // Extract request body

        if (!username || !email || !password) {
            return Response.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const [result] = await conn.promise().query(
            "INSERT INTO user (username,email,password) VALUES ( ?, ?, ?)",
            [username, email, password] // Prepared statement to prevent SQL injection
        );

        return Response.json(
            { message: "success"},
            { status: 201 }
        );
    } catch (error) {
        console.error("Error adding user:", error);
        return Response.json({ message: "failure" }, { status: 500 });
    }
}
