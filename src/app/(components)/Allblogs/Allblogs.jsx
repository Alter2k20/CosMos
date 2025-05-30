"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Allblogs() {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5; // Number of blogs per page

    useEffect(() => {
        fetch("/api/blog/getblogs")
            .then((response) => response.json())
            .then((data) => {
                setBlogs(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const totalPages = Math.ceil(blogs.length / pageSize);

    // Slice blogs to show only current page
    const currentBlogs = blogs.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (
        <div className="min-h-screen flex justify-center bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-gray-200">
            <div className="container max-w-7xl px-6 py-12 flex gap-8">
                {/* Sidebar - Stats */}
                <aside
                    id="matrices"
                    className="w-1/5 bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-center items-center"
                >
                    <h2 className="text-xl font-semibold mb-4 text-indigo-400 tracking-wide">
                        Blog Stats
                    </h2>
                    <div className="text-center text-3xl font-bold mb-1">
                        {blogs.length}
                    </div>
                    <div className="text-gray-400 uppercase tracking-wider text-sm">
                        Total Blogs
                    </div>
                </aside>

                {/* Main Content - Blog List */}
                <main
                    id="allblogs"
                    className="w-3/5 max-h-[85vh] overflow-y-auto space-y-6 px-4"
                >
                    {currentBlogs.length === 0 ? (
                        <p className="text-center text-gray-400 mt-20">
                            No blogs available.
                        </p>
                    ) : (
                        currentBlogs.map((val) => (
                            <article
                                key={val.blogId}
                                className="bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
                            >
                                <header className="flex justify-between items-center mb-3">
                                    <h3 className="text-lg font-semibold text-indigo-300 hover:text-indigo-400 cursor-pointer">
                                        <Link href={`/${val.blogId}`}>{val.heading}</Link>
                                    </h3>
                                    <span className="inline-block bg-indigo-600 text-indigo-100 px-3 py-1 text-xs font-medium rounded-full select-none">
                                        {val.topic}
                                    </span>
                                </header>
                                <p className="text-gray-300 leading-relaxed max-w-2xl">
                                    {val.content}
                                </p>
                            </article>
                        ))
                    )}
                </main>

                {/* Sidebar - Pagination Controls */}
                <aside
                    id="filter"
                    className="w-1/5 bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-6"
                >
                    <h2 className="text-xl font-semibold mb-4 text-indigo-400 tracking-wide">
                        Navigation
                    </h2>
                    <div className="flex gap-4 w-full justify-center">
                        <button
                            onClick={() =>
                                setCurrentPage((p) => Math.max(p - 1, 1))
                            }
                            disabled={currentPage === 1}
                            className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-md text-white font-semibold transition"
                        >
                            Prev
                        </button>

                        <span className="flex-1 text-center font-medium text-indigo-200 self-center">
                            Page {currentPage} of {totalPages}
                        </span>

                        <button
                            onClick={() =>
                                setCurrentPage((p) =>
                                    Math.min(p + 1, totalPages)
                                )
                            }
                            disabled={currentPage === totalPages}
                            className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-md text-white font-semibold transition"
                        >
                            Next
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
