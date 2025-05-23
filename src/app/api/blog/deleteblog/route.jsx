import { conn } from "../../db/connect"; // Adjust path based on setup

export async function DELETE(request) {
    const { searchParams } = new URL(request.url); // Extract query parameters
    const blogId = searchParams.get("blogId"); // Get blogId from query param

    if (!blogId) {
        return Response.json({ error: "Blog ID is required" }, { status: 400 });
    }

    try {
        const [result] = await conn.promise().query(
            "DELETE FROM blog WHERE blogId = ?",
            [blogId] // Secure query with prepared statement
        );

        if (result.affectedRows === 0) {
            return Response.json({ error: "Blog not found" }, { status: 404 });
        }

        return Response.json({ message: "Blog deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting blog:", error);
        return Response.json({ error: "Failed to delete blog" }, { status: 500 });
    }
}
