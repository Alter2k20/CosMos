import MarkdownRenderer from "../MarkdownRenderer/MarkdownRenderer";
export default async function page({ params }) {
    const allparams = await params;
    const blogId = allparams.blogId;
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const urlBlog = `${API_BASE_URL}/api/blog/${blogId}`;

    const blog = await fetch(urlBlog).then((res) => res.json());
    // console.log(blog);

    return (
        <div className="flex flex-col items-center p-8 bg-gray-900 min-h-screen">
            <article className="max-w-3xl w-full bg-gray-800 shadow-md rounded-lg p-6">
                <header className="mb-6">
                    <h1 id="heading" className="text-4xl font-bold text-gray-100 mb-2">{blog[0].heading}</h1>
                    <p id="topic" className="text-lg text-gray-400 bg-gray-900 rounded-2xl p-2 w-fit italic ">{blog[0].topic}</p>
                    <p id="writer" className="text-md text-gray-500"> by: {blog[1].username}</p>
                </header>
                <section>
                    <MarkdownRenderer content={blog[0].content}></MarkdownRenderer>
                </section>
            </article>
        </div>
    );
}
