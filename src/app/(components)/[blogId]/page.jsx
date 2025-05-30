import MarkdownRenderer from "../MarkdownRenderer/MarkdownRenderer";
export default async function page({ params }) {
    const allparams = await params;
    const blogId = allparams.blogId;
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const urlBlog = `${API_BASE_URL}/api/blog/${blogId}`;

    const blog = await fetch(urlBlog).then((res) => res.json());
    // console.log(blog);

    return (
        <div className="flex flex-col justify-center place-items-center p-4">
            <div id="heding">{blog[0].heading}</div>
            <div id="writer">{blog[1].username}</div>
            <div id="topic">{blog[0].topic}</div>
            <MarkdownRenderer content={blog[0].content}></MarkdownRenderer>
        </div>
    );
}
